import React, { useState } from "react";
import { Question } from "../../../types";

function AddQuestion() {
  const [addQuestion, setAddQuestion] = useState<Question>({
    id: 9,
    category: "test",
    difficulty: "easy",
    question: "How many",
    options: ["01/07/1998", "07/07/1998", "02/02/1961", "09/09/1990"],
    answer: "",
    favourited: false,
    timestamp: new Date(),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    const { name, type, checked, value } = event.target;

    setAddQuestion((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
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
            type="checkbox"
            name="favourited"
            checked={addQuestion.favourited}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-row">
          <label>Timestamp:</label>
          <input
            type="date"
            name="timestamp"
            value={addQuestion.timestamp.toISOString().split("T")[0]}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <button type="submit">Add question</button>
    </form>
  );
}

export default AddQuestion;
