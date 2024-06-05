import { useState } from "react";
import Button from "../Button/Button";
import Score from "../Score/Score";
import Modal from "../Modal/Modal"; // Import the Modal component
import { useNavigate } from "react-router-dom";

interface SlideProps {
  questions: string[];
  options: string[][];
  answers: string[];
}

export function QuestionSlide({ questions, options, answers }: SlideProps) {
  // Initializing the state
  const totalLength = questions.length;
  const [selectedOption, setSelectedOption] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Handler to change the color of the button ("option")
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  // When you press the next button...
  const nextHandler = () => {
    if (selectedOption === answers[questionIndex]) {
      setScore((score) => score + 1);
      console.log(`${score + 1}`);
    }
    if (questionIndex < totalLength - 1) {
      setQuestionIndex((questionIndex) => questionIndex + 1);
      setSelectedOption("");
    } else {
      // Show the modal with the score
      setIsModalOpen(true);
      setIsQuizFinished(true); // Set quiz finished to true
    }
  };

  // Handler for the back button
  const navigate = useNavigate();
  const backHandler = () => {
    setIsModalOpen(false);
    navigate("/home"); // Navigate back to the home page or any other desired route
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
      <div
        id="questionCard"
        className="flex flex-col justify-center items-center w-96 h-auto p-10 border-4 border-gray-300 bg-white rounded-lg shadow-lg"
      >
        <div className="text-2xl font-bold text-black mb-4">
          Question: {questionIndex + 1} / {totalLength}
        </div>
        <div className=" text-black">{questions[questionIndex]}</div>

        <div className="pb-4">
          {options[questionIndex].map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full py-2 my-2 text-center rounded-lg ${
                selectedOption === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              data-value={option}
            >
              {option}
            </button>
          ))}
        </div>
        {!isQuizFinished ? (
          <Button name="Next" handler={nextHandler} color="blue" />
        ) : (
          <Button name="Back" handler={backHandler} color="orange" />
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={backHandler}>
        <Score score={(score * 100) / totalLength} />
      </Modal>
    </div>
  );
}
