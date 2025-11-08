import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">u</span>
            <span className="text-emerald-400">mart</span>
          </div>
          <p className="mt-3 text-sm text-gray-400">Everyday essentials and fashion for your family and home.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Store</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#categories" className="hover:text-white">Categories</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#home" className="hover:text-white">Home</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Visit</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Jamkhambhaliya, Gujarat</li>
            <li>India</li>
            <li>Mon–Sun 9 AM – 9 PM</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Follow</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} Umart. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
