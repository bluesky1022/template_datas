import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Choose the correct form of the verb: She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes",
  },
  {
    id: 2,
    question: "Select the synonym of 'happy'.",
    options: ["sad", "angry", "joyful", "tired"],
    answer: "joyful",
  },
  {
    id: 3,
    question: "Fill in the blank: I have ___ apple.",
    options: ["a", "an", "the", "some"],
    answer: "an",
  },
  {
    id: 4,
    question: "What is the past tense of 'run'?",
    options: ["ran", "runned", "running", "runs"],
    answer: "ran",
  },
  {
    id: 5,
    question: "Choose the correct sentence:",
    options: [
      "He don't like pizza.",
      "He doesn't likes pizza.",
      "He doesn't like pizza.",
      "He don't likes pizza."
    ],
    answer: "He doesn't like pizza.",
  },
];

function EnglishExam() {
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (questionId, option) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowScore(true);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>English Exam</h2>
      <form onSubmit={handleSubmit}>
        {questions.map(({ id, question, options }) => (
          <div key={id} style={{ marginBottom: 20 }}>
            <p><strong>{id}. {question}</strong></p>
            {options.map(option => (
              <label key={option} style={{ display: 'block', marginBottom: 5 }}>
                <input
                  type="radio"
                  name={`question-${id}`}
                  value={option}
                  checked={userAnswers[id] === option}
                  onChange={() => handleOptionChange(id, option)}
                  required
                />{' '}
                {option}
              </label>
            ))}
          </div>
        ))}

        <button type="submit" style={{ padding: '10px 20px', fontSize: 16 }}>
          Submit
        </button>
      </form>

      {showScore && (
        <div style={{ marginTop: 30, fontSize: 18 }}>
          Your score: {calculateScore()} / {questions.length}
        </div>
      )}
    </div>
  );
}

export default EnglishExam;