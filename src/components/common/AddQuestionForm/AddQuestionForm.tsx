import React, { useState } from "react";
import { AddQuestion } from "../../../types";
import { REACT_APP_API_URL } from "../../../utils/helper";

function AddQuestionForm() {
  const [addQuestion, setAddQuestion] = useState<AddQuestion>({
    id: "",
    category: "",
    difficulty: "",
    question: "",
    options: ["", "", "", ""],
    answer: "",
    favourited: false,
    timestamp: new Date(),
  });
<<<<<<< HEAD
  const apiURL = REACT_APP_API_URL
  console.log(`React URL ${REACT_APP_API_URL}`)
=======
  const apiURL = REACT_APP_API_URL;
>>>>>>> main
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newId = new Date().valueOf();
    const newTimestamp = new Date();
    setAddQuestion((prevState) => {
      const updatedQuestion = {
        ...prevState,
        id: newId,
        timestamp: newTimestamp,
      };

      // Return the new state
      return updatedQuestion;
    });

    // Using the updatedQuestion for the fetch request
    const updatedQuestion = {
      ...addQuestion,
      id: newId,
      timestamp: newTimestamp,
    };

    fetch(`${apiURL}/create-question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuestion),
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

    setAddQuestion((prevState) => {
      if (type === "checkbox") {
        return {
          ...prevState,
          [name]: checked,
        };
      } else if (name.startsWith("option")) {
        const index = parseInt(name.split(" ")[1], 10) - 1;
        const newOptions = [...prevState.options];
        newOptions[index] = value;
        return {
          ...prevState,
          options: newOptions,
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
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
          Option 1:
        </label>
        <input
          type="text"
          name="option 1"
          value={addQuestion.options[0]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 2:
        </label>
        <input
          type="text"
          name="option 2"
          value={addQuestion.options[1]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 3:
        </label>
        <input
          type="text"
          name="option 3"
          value={addQuestion.options[2]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 4:
        </label>
        <input
          type="text"
          name="option 4"
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