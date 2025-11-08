import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Visit Umart</h3>
            <p className="mt-3 text-gray-600">Jamkhambhaliya, Gujarat, India</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-lg bg-white border border-gray-200">
                <div className="font-semibold text-gray-800">Store Hours</div>
                <div className="mt-2 text-gray-600">Mon–Sun: 9:00 AM – 9:00 PM</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-gray-200">
                <div className="font-semibold text-gray-800">Contact</div>
                <div className="mt-2 text-gray-600">Phone: +91-XXXXXXXXXX</div>
                <div className="text-gray-600">Email: hello@umart.in</div>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition-colors"
            >
              Get Directions
            </a>
          </div>
          <form className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Send us a message</h4>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
              <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your email" />
              <input className="sm:col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Phone (optional)" />
              <textarea rows="4" className="sm:col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your message"></textarea>
            </div>
            <button type="button" className="mt-4 w-full rounded-md bg-gray-900 text-white font-semibold py-2 hover:bg-gray-800 transition-colors">Submit</button>
            <p className="mt-2 text-xs text-gray-500">We will get back to you shortly.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
