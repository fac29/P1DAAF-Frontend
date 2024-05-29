import React from 'react';
import QuestionBankTable from './QuestionBankTable';
import { Questions } from '../../../types';

const sampleQuestions: Questions = [
  {
    id: 1,
    category: 'Geography',
    difficulty: 'easy',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
    favourited: false,
    timestamp: new Date(),
  },
  {
    id: 2,
    category: 'Mathematics',
    difficulty: 'medium',
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
    favourited: false,
    timestamp: new Date(),
  },
  // Add more questions as needed
];

function Test() {
  return (
    <div className='App'>
      <QuestionBankTable questions={sampleQuestions} />
    </div>
  );
}

export default Test;
