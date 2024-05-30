import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../components/pages/Home/Home";
import Quiz from "../components/pages/Quiz/Quiz";
import QuestionBank from "../components/pages/QuestionBank/QuestionBank";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/questionbank" element={<QuestionBank />} />
    </Routes>
  );
}

export default AppRoutes;
