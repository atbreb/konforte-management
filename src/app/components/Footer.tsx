import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Konforte <span className="text-teal-500">Management</span>
            </div>
            <p className="text-sm mb-4">
              Professional retail property management in Central Florida
            </p>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div className="text-sm">
                123 Central Florida Blvd<br />
                Orlando, FL 32801
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-teal-500 transition-colors">
                Home
              </Link>
              <Link to="/properties" className="text-sm hover:text-teal-500 transition-colors">
                Properties
              </Link>
              <Link to="/about" className="text-sm hover:text-teal-500 transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm hover:text-teal-500 transition-colors">
                Services
              </Link>
              <Link to="/faq" className="text-sm hover:text-teal-500 transition-colors">
                FAQ
              </Link>
              <Link to="/blog" className="text-sm hover:text-teal-500 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-sm hover:text-teal-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:4074350218" className="flex items-center gap-2 text-sm hover:text-teal-500 transition-colors">
                <Phone className="h-4 w-4" />
                (407) 435-0218
              </a>
              <a href="mailto:info@konfortemanagement.com" className="flex items-center gap-2 text-sm hover:text-teal-500 transition-colors">
                <Mail className="h-4 w-4" />
                info@konfortemanagement.com
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-teal-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-teal-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} Konforte Management. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-500 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}