
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

type EmergencyContact = {
  id: number;
  name: string | null;
  phone: string | null;
  email: string | null;
};

export function EmergencyContacts() {
  const [newContact, setNewContact] = useState({ name: "", phone: "", email: "" });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: contacts, isLoading } = useQuery({
    queryKey: ["emergency-contacts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("emergency_contacts")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      
      // Ensure the data matches our type by mapping it
      return (data || []).map(contact => ({
        id: contact.id,
        name: contact.name,
        // Use the correct column name from the database
        phone: contact["phone number"] ? String(contact["phone number"]) : null,
        email: contact.email
      })) as EmergencyContact[];
    }
  });

  const addContactMutation = useMutation({
    mutationFn: async () => {
      // Convert phone to number if provided
      const phoneNumber = newContact.phone ? Number(newContact.phone) : null;
      
      const { error } = await supabase
        .from("emergency_contacts")
        .insert([{
          name: newContact.name,
          // Ensure we're using the correct column name for the database
          "phone number": phoneNumber,
          email: newContact.email,
          user_id: (await supabase.auth.getUser()).data.user?.id
        }]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emergency-contacts"] });
      setNewContact({ name: "", phone: "", email: "" });
      toast({
        title: "Contact Added",
        description: "Emergency contact has been added successfully.",
      });
    },
    onError: (error) => {
      console.error("Error adding contact:", error);
      toast({
        title: "Error",
        description: "Failed to add emergency contact.",
        variant: "destructive",
      });
    }
  });

  const deleteContactMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase
        .from("emergency_contacts")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["emergency-contacts"] });
      toast({
        title: "Contact Deleted",
        description: "Emergency contact has been removed.",
      });
    },
    onError: (error) => {
      console.error("Error deleting contact:", error);
    }
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact(prev => ({ ...prev, name: e.target.value }))}
        />
        <Input
          placeholder="Phone"
          value={newContact.phone}
          onChange={(e) => setNewContact(prev => ({ ...prev, phone: e.target.value }))}
        />
        <Input
          placeholder="Email"
          type="email"
          value={newContact.email}
          onChange={(e) => setNewContact(prev => ({ ...prev, email: e.target.value }))}
        />
        <Button 
          onClick={() => addContactMutation.mutate()}
          disabled={!newContact.name || (!newContact.phone && !newContact.email)}
          className="bg-[#7E69AB] hover:bg-[#6a579b]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      <div className="space-y-2">
        {isLoading ? (
          <p>Loading contacts...</p>
        ) : contacts?.map((contact) => (
          <div key={contact.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#7E69AB]" />
              <div>
                <p className="font-medium">{contact.name}</p>
                <div className="text-sm text-gray-500">
                  {contact.phone && <p>{contact.phone}</p>}
                  {contact.email && <p>{contact.email}</p>}
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteContactMutation.mutate(contact.id)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
