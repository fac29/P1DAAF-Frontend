import "./App.css";
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // Components
import Home from "./components/pages/Home/Home";
import Quiz from "./components/pages/Quiz/Quiz";
import QuestionBank from "./components//pages/QuestionBank/QuestionBank";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/questionbank">QuestionBank</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/questionbank" element={<QuestionBank />} />
        </Routes>
        <Home />
      </div>
      
    </Router>
  );
}

export default App;
