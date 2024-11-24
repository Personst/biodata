import React from 'react';
import { motion } from 'framer-motion';
import { Cake, GraduationCap, MapPin, Briefcase, Heart } from 'lucide-react';
import { QuickFacts } from './QuickFacts';

export const About = () => {
  const details = [
    { icon: GraduationCap, label: 'Education', value: 'Masters in Business Administration' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Briefcase, label: 'Profession', value: 'Marketing Manager' },
    { icon: Heart, label: 'Marital Status', value: 'Never Married' },
  ];

  return (
    <section className="py-20 bg-white">
      <QuickFacts />
      
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate individual seeking a life partner who values growth, compassion, and mutual respect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <detail.icon className="w-6 h-6 text-pink-500 mr-4" />
                <div>
                  <h3 className="text-gray-600 text-sm">{detail.label}</h3>
                  <p className="text-gray-800 font-semibold">{detail.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg transform rotate-6 scale-105 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};