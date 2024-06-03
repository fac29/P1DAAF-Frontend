import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Quiz from "../components/pages/Quiz/Quiz";
import QuestionBank from "../components/pages/QuestionBank/QuestionBank";
import AddQuestion from "../components/pages/AddQuestion/AddQuestion";
import EditQuestion from "../components/pages/EditQuestion/EditQuestion";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/questionbank" element={<QuestionBank />} />

      <Route path="/questionbank/addquestion" element={<AddQuestion />} />
      <Route path="/questionbank/editquestion/:id" element={<EditQuestion />} />

    </Routes>
  );
};

export default AppRoutes;
