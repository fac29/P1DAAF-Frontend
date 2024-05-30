import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

import Navbar from './components/common/Navbar/Navbar'

<<<<<<< HEAD
// // Components
import Home from "./components/pages/Home/Home";
import Quiz from "./components/pages/Quiz/Quiz";
import QuestionBank from "./components//pages/QuestionBank/QuestionBank";
import AddQuestion from "./components/common/AddQuestion/AddQuestion.tsx";

function App() {
  return (
    <>
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
        </div>
      </Router>

      {/* <AddQuestion /> */}
    </>
  );
=======

function App() {
	return (
		<Router>
			<div>
				<Navbar />

				<AppRoutes />
			</div>
		</Router>
	)
>>>>>>> main
}

export default App
