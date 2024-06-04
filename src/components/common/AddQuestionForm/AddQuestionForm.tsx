import React, { useState } from "react";
import { Question } from "../../../types";
import { REACT_APP_API_URL } from "../../../utils/helper";

function AddQuestionForm() {
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
  const apiURL = REACT_APP_API_URL;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let { id, timestamp } = addQuestion;
    const newId = new Date().valueOf();
    const newTimestamp = new Date();
    id = newId;
    timestamp = newTimestamp;

    //fetch("http://localhost:3000/create-question", {
    fetch(`${apiURL}/create-question`, {
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
    const { name, type, checked, value } = event.target as HTMLInputElement;

    setAddQuestion((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" text-black  p-4 bg-gray-100 rounded shadow-md "
    >
      <div className="grid grid-cols-2 gap-2 auto-cols-min">
        <label className="block text-gray-700 self-end font-bold mb-2">
          Category:
        </label>
        <input
          type="text"
          name="category"
          value={addQuestion.category}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Difficulty:
        </label>
        <input
          type="text"
          name="difficulty"
          value={addQuestion.difficulty}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Question:
        </label>
        <input
          type="text"
          name="question"
          value={addQuestion.question}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 0:
        </label>
        <input
          type="text"
          name="options"
          value={addQuestion.options[0]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 1:
        </label>
        <input
          type="text"
          name="options"
          value={addQuestion.options[1]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 2:
        </label>
        <input
          type="text"
          name="options"
          value={addQuestion.options[2]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 3:
        </label>
        <input
          type="text"
          name="options"
          value={addQuestion.options[3]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Answer:
        </label>
        <input
          type="text"
          name="answer"
          value={addQuestion.answer}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Favourited:
        </label>
        <input
          type="checkbox"
          name="favourited"
          checked={addQuestion.favourited}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />
      </div>

      <button type="submit">Add question</button>
    </form>
  );
}

export default AddQuestionForm;
