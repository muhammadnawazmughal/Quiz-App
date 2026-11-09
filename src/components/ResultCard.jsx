import React from 'react';

const ResultCard = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="text-center py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
      <p className="text-gray-600 mb-6">Here is your final score summary:</p>
      
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6 inline-block w-full">
        <p className="text-lg text-gray-700">Your Score:</p>
        <p className="text-4xl font-extrabold text-emerald-600 mt-2">
          {score} / {totalQuestions}
        </p>
      </div>

      <button
        onClick={onRestart}
        className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition w-full"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultCard;