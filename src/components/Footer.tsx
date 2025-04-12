
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#7E69AB]/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-[#9b87f5]">Soul</span>
              <span className="text-2xl font-bold text-[#7E69AB]">Trail</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Your AI-powered companion for safer, more meaningful solo travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#9b87f5]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5]" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5]" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5]" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#7E69AB] mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-gray-600 hover:text-[#9b87f5]">
                  Mood-Based Exploration
                </Link>
              </li>
              <li>
                <Link to="/companion" className="text-gray-600 hover:text-[#9b87f5]">
                  AI Travel Buddy
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-600 hover:text-[#9b87f5]">
                  Safety Tools
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-600 hover:text-[#9b87f5]">
                  Travel Journal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#7E69AB] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#9b87f5]">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#7E69AB] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-[#9b87f5] flex-shrink-0 mt-1" />
                <a href="mailto:hello@soultrail.com" className="text-gray-600 hover:text-[#9b87f5]">
                  hello@soultrail.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#9b87f5]">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SoulTrail. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
