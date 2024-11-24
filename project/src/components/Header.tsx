import React from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 via-orange-50 to-white overflow-hidden py-12"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="mb-12 relative"
        >
          {/* Pearl border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 rounded-3xl transform scale-105 opacity-20"></div>
          
          <div className="relative bg-white rounded-3xl p-12 shadow-xl">
            <div className="max-w-[300px] mx-auto">
              <img 
                src="https://raw.githubusercontent.com/mayankchaudhary26/Cool-Readme-ideas/master/data/ganesha.gif"
                alt="Lord Ganesh"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 space-y-2"
          >
            <p className="text-4xl font-sanskrit text-orange-600 font-bold">
              ॐ श्री गणेशाय नमः
            </p>
            <p className="text-xl text-gray-600">Om Shri Ganeshaya Namaha</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Sarah Anderson
          </h1>
          <p className="text-xl text-gray-600">
            A Journey to Forever
          </p>
        </motion.div>
      </div>
    </motion.header>
  );
};