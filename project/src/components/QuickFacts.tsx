import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Star, Clock, Heart, Coffee } from 'lucide-react';

export const QuickFacts = () => {
  const facts = [
    { icon: Star, value: '27', label: 'Age' },
    { icon: Clock, value: "5'7\"", label: 'Height' },
    { icon: Heart, value: 'B+', label: 'Blood Group' },
    { icon: Coffee, value: 'Hindu', label: 'Religion' }
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <fact.icon className="w-8 h-8 text-pink-500 mb-3" />
              <span className="text-2xl font-bold text-gray-800">{fact.value}</span>
              <span className="text-sm text-gray-600">{fact.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};