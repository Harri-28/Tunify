import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Tunify helped me discover amazing songs that perfectly match my mood. It's like having a personal DJ who understands your emotions!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    text: "The emotion detection is spot on! I use this app every day to find songs that resonate with how I'm feeling.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    text: "I love how it suggests songs in different languages. It's helping me explore music beyond my comfort zone!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop"
  },
  {
    name: "Karthik Raja",
    location: "Chennai",
    text: "The multilingual support is fantastic! Finally found an app that understands regional music preferences.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Meera Reddy",
    location: "Hyderabad",
    text: "Beautiful interface and the emotion quotes are so meaningful. It's more than just a music app!",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=150&h=150&fit=crop"
  }
];

interface TestimonialsProps {
  isDarkMode: boolean;
  theme: string;
}

function Testimonials({ isDarkMode, theme }: TestimonialsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getThemeStyles = () => {
    switch (theme) {
      case 'spotify':
        return isDarkMode ? 'bg-[#282828]' : 'bg-[#1ED760]/10';
      case 'youtube-music':
        return isDarkMode ? 'bg-[#212121]' : 'bg-[#FF0000]/10';
      case 'apple-music':
        return isDarkMode ? 'bg-[#2A2A2A]' : 'bg-[#FA2C55]/10';
      default:
        return isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
    }
  };

  return (
    <div className="py-12">
      <h2 className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        What Our Users Say
      </h2>
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 px-6"
          animate={{
            x: isPaused ? 0 : '-100%'
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 p-6 rounded-xl ${getThemeStyles()} transition-transform hover:scale-105`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;