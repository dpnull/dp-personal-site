"use client";

import React from 'react';
import { TechTagProps } from './types';

const techColors: Record<string, string> = {
  'JavaScript': 'bg-yellow-400 text-yellow-900',
  'TypeScript': 'bg-blue-400 text-blue-900',
  'React': 'bg-cyan-400 text-cyan-900',
  'Storybook': 'bg-pink-400 text-pink-900',
  '.NET': 'bg-purple-400 text-purple-900',
  'XML': 'bg-orange-300 text-orange-900',
  'OOP': 'bg-green-400 text-green-900',
  'React Native': 'bg-cyan-300 text-cyan-900',
  'Expo': 'bg-indigo-300 text-indigo-900',
  'Node.js Express': 'bg-green-300 text-green-900',
  'MongoDB Atlas': 'bg-green-700 text-green-100',
  'TensorFlow': 'bg-orange-400 text-orange-900',
  'Keras': 'bg-red-400 text-red-900',
  'Embedded': 'bg-gray-400 text-gray-900',
  'ROS': 'bg-rose-400 text-rose-900',
  'Agile': 'bg-blue-200 text-blue-900',
  'Algorithms': 'bg-fuchsia-400 text-fuchsia-900',
  'CMake': 'bg-gray-300 text-gray-900',
  'Bash': 'bg-gray-700 text-gray-100',
  'ASM': 'bg-yellow-700 text-yellow-100',
  'JUnit': 'bg-red-300 text-red-900',
  'Git': 'bg-orange-500 text-orange-100',
  'compiler-design principles': 'bg-indigo-400 text-indigo-900',
  '94/100 marks': 'bg-green-500 text-green-100',
  '92/100 marks': 'bg-green-400 text-green-900',
};

const TechTag: React.FC<TechTagProps> = ({ name }) => {
  return (
    <div className="list-item mt-2 mr-2">
      <div className={
        `px-4 py-1 text-sm font-medium rounded-full bg-[#172133] text-cyan-300`
      }>
        {name}
      </div>
    </div>
  );
};

export default TechTag; 