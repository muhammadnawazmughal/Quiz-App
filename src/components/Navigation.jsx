import React from 'react';

const Navigation = ({ currentIndex, totalQuestions, onPrevious, onNext }) => {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className={`px-4 py-2 rounded-lg font-medium text-sm ${
          currentIndex === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
        }`}
      >
        Previous
      </button>

      <button
        onClick={onNext}
        className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-medium text-sm hover:bg-emerald-700 transition"
      >
        {currentIndex === totalQuestions - 1 ? 'Submit Quiz' : 'Next'}
      </button>
    </div>
  );
};

export default Navigation;