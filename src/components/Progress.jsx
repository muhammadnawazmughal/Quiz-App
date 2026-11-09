import React from 'react';

const Progress = ({ currentIndex, totalQuestions }) => {
  const percentage = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="flex justify-between items-center mb-4 text-sm font-semibold text-gray-600">
      <span>Question {currentIndex + 1} of {totalQuestions}</span>
      <span>{percentage}% Completed</span>
    </div>
  );
};

export default Progress;