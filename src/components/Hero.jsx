import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-emerald-700 uppercase tracking-widest">Jamkhambhaliya, Gujarat</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Welcome to Umart
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your neighborhood store for everyday living — from fashionable apparel for the whole family to home essentials and decor. Discover quality, value, and friendly service.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#categories" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition-colors">Explore Categories</a>
            <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">Get Directions</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-emerald-100 via-white to-emerald-50 border border-emerald-200 shadow-inner flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 p-6">
              {['Ladies Wear','Gents Wear','Kids Wear','Footwear','Plastic Items','Daily Necessities','Crockery','Kitchen Essentials','Homeware','Home Decor','Cosmetics'].map((item) => (
                <div key={item} className="px-3 py-2 rounded-lg bg-white/70 border border-gray-200 text-sm text-gray-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
