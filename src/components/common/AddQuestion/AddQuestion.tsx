import React, { useState, useRef, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";

export type CategoryFilterTypes =
  | "Science"
  | "Geography"
  | "History"
  | "Mathematics"
  | "Pop Culture"
  | "Music"
  | "Literature"
  | "Favourited";
export type Favourited = true | false;

export type Difficulty = "easy" | "medium" | "hard" | "all";

export type Question = {
  id: number;
  category: string;
  difficulty: Difficulty;
  question: string;
  options: Array<string>;
  answer: string;
  favourited: boolean; // This should be boolean instead of true
  timestamp: Date;
};
export type Questions = Array<Question>;

export type OuterQuestion = { questions: Questions };

const testQuestionObj: Question = {
  id: "666",
  category: "History",
  difficulty: "easy",
  question: "When was Princess Diana Born?",
  options: ["01/07/1998", "07/07/1998", "02/02/1961", "09/09/1990"],
  answer: "07/07/1998",
  favourited: true,
  timestamp: "10/10/10",
};

function AddQuestion() {
  const [addQuestion, setAddQuestion] = useState<Question>({
    id: 9,
    category: "test",
    difficulty: "easy",
    question: "How many",
    options: ["01/07/1998", "07/07/1998", "02/02/1961", "09/09/1990"],
    answer: "",
    favourited: false,
    timestamp: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/create-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addQuestion),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAddQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-col">
        <div className="">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={addQuestion.id}
            onChange={handleInputChange}
            className=""
          />
        </div>
        <div className="flex-row justify-between">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={addQuestion.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row justify-between">
          <label>Difficulty:</label>
          <input
            type="text"
            name="difficulty"
            value={addQuestion.difficulty}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row">
          <label>Question:</label>
          <input
            type="text"
            name="question"
            value={addQuestion.question}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row">
          <label>Option 0:</label>
          <input
            type="text"
            name="options"
            value={addQuestion.options[0]}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row">
          <label>Option 1:</label>
          <input
            type="text"
            name="options"
            value={addQuestion.options[1]}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row">
          <label>Option 2:</label>
          <input
            type="text"
            name="options"
            value={addQuestion.options[2]}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row">
          <label>Option 3:</label>
          <input
            type="text"
            name="options"
            value={addQuestion.options[3]}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row">
          <label>Answer:</label>
          <input
            type="text"
            name="answer"
            value={addQuestion.answer}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row">
          <label>Favourited:</label>
          <input
            type="text"
            name="favourtied"
            value={addQuestion.favourtited}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row">
          <label>Timestamp:</label>
          <input
            type="text"
            name="timestamp"
            value={addQuestion.timestamp}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button type="submit">Add question</button>
    </form>
  );
}

export default AddQuestion;
