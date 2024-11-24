import React from 'react';
import { motion } from 'framer-motion';
import { Music, Book, Plane, Camera, Coffee } from 'lucide-react';

export const Interests = () => {
  const interests = [
    { icon: Music, label: 'Classical Music' },
    { icon: Book, label: 'Reading' },
    { icon: Plane, label: 'Traveling' },
    { icon: Camera, label: 'Photography' },
    { icon: Coffee, label: 'Coffee Tasting' },
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Interests & Hobbies</h2>
          <p className="text-gray-600">Discovering life's beauty through various passions</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <interest.icon className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-gray-800 font-medium text-center">{interest.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};