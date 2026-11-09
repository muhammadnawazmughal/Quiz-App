import React, { useState } from 'react';
import { quizQuestions } from './data/questions';
import Header from './components/Header';
import Progress from './components/Progress';
import QuizCard from './components/QuizCard';
import Navigation from './components/Navigation';
import ResultCard from './components/ResultCard';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (questionId, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: option
    });
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedOptions[q.id] === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptions({});
    setIsSubmitted(false);
  };

  const currentQuestion = quizQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6 sm:p-8">
        
        {/* Header Component */}
        <Header />

        {!isSubmitted ? (
          <div>
            <Progress 
              currentIndex={currentIndex} 
              totalQuestions={quizQuestions.length} 
            />

            <QuizCard 
              question={currentQuestion}
              selectedOption={selectedOptions[currentQuestion.id]}
              onOptionSelect={handleOptionSelect}
            />

            <Navigation 
              currentIndex={currentIndex}
              totalQuestions={quizQuestions.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        ) : (
          <ResultCard 
            score={calculateScore()}
            totalQuestions={quizQuestions.length}
            onRestart={handleRestart}
          />
        )}

      </div>
    </div>
  );
};

export default App;