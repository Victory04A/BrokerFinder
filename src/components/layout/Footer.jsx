import React from 'react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container-custom py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Broker<span className="text-primary-400">Finder</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Connect with trusted brokers in real estate, insurance, and finance. 
              Find the right professional for your needs.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-primary-400 transition-colors">
                  Find Brokers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Brokers */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Brokers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/register" className="hover:text-primary-400 transition-colors">
                  Join as Broker
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-primary-400 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>support@brokerfinder.com</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>+255 622 444 331</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Dodoma, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} BrokerFinder. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
