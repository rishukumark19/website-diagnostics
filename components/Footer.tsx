import React from 'react';
import { labData } from '../constants/data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">{labData.name}</h3>
            <p className="text-gray-400">{labData.footer.description}</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {labData.footer.quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {labData.footer.contactInfo.map(info => (
                <li key={info.label}>
                  <a href={info.href} className="hover:text-white transition-colors">{info.value}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
             <h4 className="font-semibold text-white mb-4">Follow Us</h4>
             <div className="flex space-x-4">
                {labData.footer.socials.map(social => (
                  <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors" aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
          <p>{labData.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;