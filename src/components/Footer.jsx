// src/components/Footer.jsx
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = [
    {
      title: 'About SASTI',
      links: ['About Us', 'Careers', 'Press', 'SASTI Cares', 'Gift Cards']
    },
    {
      title: 'Help',
      links: ['Payments', 'Shipping', 'Returns', 'FAQs', 'Report Infringement']
    },
    {
      title: 'Consumer Policy',
      links: ['Cancellation', 'Returns', 'Terms Of Use', 'Security', 'Privacy']
    },
    {
      title: 'Social',
      links: ['Facebook', 'Twitter', 'YouTube', 'Instagram', 'LinkedIn']
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* About Column */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">SASTI Shopping</div>
            <p className="text-gray-400 mb-4">
              India's Most Affordable Online Shopping Destination
            </p>
            <div className="flex space-x-4">
              <FiFacebook size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiTwitter size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiInstagram size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiYoutube size={24} className="text-gray-400 hover:text-white cursor-pointer" />
              <FiLinkedin size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="text-gray-400 hover:text-white cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2023 SASTI Shopping. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQiLz48L3N2Zz4=" 
                alt="Visa" 
                className="h-8 bg-white p-1 rounded"
              />
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQiLz48L3N2Zz4=" 
                alt="Mastercard" 
                className="h-8 bg-white p-1 rounded"
              />
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQiLz48L3N2Zz4=" 
                alt="Paytm" 
                className="h-8 bg-white p-1 rounded"
              />
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcng9IjQiLz48L3N2Zz4=" 
                alt="UPI" 
                className="h-8 bg-white p-1 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;