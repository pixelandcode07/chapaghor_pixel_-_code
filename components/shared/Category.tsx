import React from 'react';

export function Category() {
  const needs = [
    { title: "Education & Campus Needs", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" },
    { title: "Startu p Branding", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" },
    { title: "Event & Promotions", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop" },
    { title: "Cafe Essentials", img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop" },
  ];

  return (
    <section>
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px bg-gray-300 flex-1 max-w-[150px] hidden sm:block"></div>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Shop By Business Needs</h2>
        <div className="h-px bg-gray-300 flex-1 max-w-[150px] hidden sm:block"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {needs.map((need, i) => (
          <div key={i} className="group cursor-pointer flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden mb-4 shadow-sm relative">
              <img src={need.img} alt={need.title} className="w-full h-[220px] object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="text-center font-bold text-gray-800 text-[15px]">{need.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}