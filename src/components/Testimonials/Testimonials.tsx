// src/components/Testimonials/Testimonials.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  job: string;
}

const Testimonials: React.FC = () => {
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        'Pro Service Growth completely transformed my digital presence. Within weeks of launching my new website, I saw a 50% increase in online bookings. The design is not just beautiful, but strategically crafted to convert visitors into clients.',
      name: 'Jessica Martinez',
      job: 'Professional Makeup Artist',
    },
    {
      quote:
        'I was skeptical about investing in a new website, but Pro Service Growth proved me wrong. Their sales-driven design helped me increase my monthly revenue by 35%. The booking process is seamless, and my clients love how professional it looks!',
      name: 'Emily Thompson',
      job: 'Luxury Nail Technician',
    },
    {
      quote:
        'As a new esthetician, I struggled to attract clients online. Pro Service Growth created a website that not only looks stunning but actually brings in consistent bookings. Their attention to detail is unmatched!',
      name: 'Sophia Rodriguez',
      job: 'Medical Spa Esthetician',
    },
    {
      quote:
        'Thanks to Pro Service Growth, my business has seen unprecedented growth. The website they designed for me has become a powerful tool for attracting new clients.',
      name: 'Ava Johnson',
      job: 'Hair Stylist',
    },
    {
      quote:
        'The team at Pro Service Growth was incredibly supportive throughout the entire process. My new website has increased my visibility and client engagement significantly.',
      name: 'Mia Brown',
      job: 'Spa Owner',
    },
    {
      quote:
        "I can't believe how much my bookings have increased since launching my new site. Pro Service Growth knows how to create websites that work!",
      name: 'Olivia Davis',
      job: 'Nail Artist',
    },
    {
      quote:
        "The design is sleek and professional. I've received numerous compliments from clients about my new website!",
      name: 'Isabella Garcia',
      job: 'Makeup Artist',
    },
    {
      quote:
        "Pro Service Growth helped me establish an online presence that truly reflects my brand. I'm so grateful for their expertise!",
      name: 'Charlotte Martinez',
      job: 'Esthetician',
    },
    {
      quote:
        "With my new website, I've seen a dramatic increase in inquiries and bookings. I highly recommend Pro Service Growth!",
      name: 'Amelia Lee',
      job: 'Beauty Consultant',
    },
    {
      quote:
        "Pro Service Growth's team was amazing! They listened to my needs and delivered a website that exceeded my expectations.",
      name: 'Evelyn Wilson',
      job: 'Salon Owner',
    },
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-soft-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-elegant-gray">
          What our Clients are Saying
        </h2>
        <p className="text-xl mb-12 text-gray-600">
          Our high-converting websites have helped beauty professionals
          skyrocket their bookings and grow their businesses. Don't just take
          our word for it!
        </p>

        <div className="relative bg-white rounded-lg shadow-lg p-8 mb-12 min-h-[300px]">
          <button
            onClick={handlePrevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-hot-pink hover:text-opacity-80 focus:outline-none"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={handleNextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-hot-pink hover:text-opacity-80 focus:outline-none"
            aria-label="Next testimonial"
          >
            →
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg italic mb-6 text-elegant-gray">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <p className="font-bold text-hot-pink">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].job}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
