'use client'
import React from 'react';

const testimonials = [
  {
    text: "The team at Starlite Care made all the difference during my recovery. They were always there when I needed them, and their support was invaluable.",
    author: "John D.",
    title: "Client",
    company: "Starlite",
  },
  {
    text: "Starlite Care has been a lifesaver for our family. The caregivers are attentive, kind, and truly care about our father's well-being. We couldn't be happier with the service they provide.",
    author: "Mary S.",
    title: "Clientele",
    company: "Starlite",
  },
  {
    text: "The team at Starlite Care made all the difference during my recovery. They were always there when I needed them, and their support was invaluable.",
    author: "John D.",
    title: "Client",
    company: "Starlite",
  },
];

const StarRating = () => (
  <div className="flex mb-2">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isMiddle }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col justify-between w-full md:w-[360px] ${isMiddle ? 'md:h-[280px] md:z-10' : 'md:h-[260px] md:-mt-2'} transition-all duration-300 mb-6 md:mb-0`}>
    <div>
      <div className="text-gray-300 text-4xl font-serif mb-2">"</div>
      <StarRating />
      <p className="text-gray-700 mb-4 text-sm">{testimonial.text}</p>
    </div>
    <div className="flex justify-between items-end">
      <div>
        <div className="font-bold text-gray-900">{testimonial.author}</div>
        <div className="text-gray-600 text-sm">{testimonial.title}</div>
      </div>
      <div className="text-lg font-bold">
        <span className="text-green-600">Star</span>
        <span className="text-gray-900">lite</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Success stories from  our <br className="hidden md:inline" /> customers
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} isMiddle={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;