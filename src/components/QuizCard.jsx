import React from 'react';

const QuizCard = ({ question, selectedOption, onOptionSelect }) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        {question.id}. {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          // Check karte hain ke kya yeh option user ne select kiya hai
          const isSelected = selectedOption === option;
          
          let btnStyle = "bg-white border-gray-200 hover:bg-gray-50 text-gray-700";

          if (isSelected) {
            // Agar selected option correct hai toh Green, warna Red show karein
            if (option === question.answer) {
              btnStyle = "bg-green-50 border-green-500 text-green-800 font-medium";
            } else {
              btnStyle = "bg-red-50 border-red-500 text-red-800 font-medium";
            }
          }

          return (
            <button
              key={index}
              onClick={() => onOptionSelect(question.id, option)}
              className={`w-full text-left p-3 rounded-lg border transition-all ${btnStyle}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;