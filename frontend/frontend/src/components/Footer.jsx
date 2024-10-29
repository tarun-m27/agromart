import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-400">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm text-gray-300">
              We provide high-quality fertilizers and agricultural products to
              help your crops grow better and yield more. Your satisfaction is
              our priority.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/tools" className="hover:underline">
                  Tools
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* Customer Service */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:underline">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/support" className="hover:underline">
                  Customer Support
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <p className="text-sm text-gray-300">kumarswamy layout Bengaluru</p>
            <p className="text-sm text-gray-300">+91 7795369328</p>
            <p className="text-sm text-gray-300">agrimart123@.com</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm">
          <p>&copy; 2024 Agri Mart. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
