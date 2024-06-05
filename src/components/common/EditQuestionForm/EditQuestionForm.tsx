import React, { useState, useEffect } from "react";
import { Question, AddQuestion } from "../../../types";
import { useNavigate } from "react-router";

import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";

import {
  getCategoryFilterTypes,
  getDifficultyLevels,
} from "../../../utils/helper";

interface EditQuestionFormProps {
  id: number;
}

const EditQuestionForm: React.FC<EditQuestionFormProps> = ({ id }) => {
  const [questionData, setQuestionData] = useState<AddQuestion>({
    id: 0,
    category: "",
    difficulty: "",
    question: "",
    options: ["", "", "", ""],
    answer: "",
    favourited: false,
    timestamp: new Date(), // Initialize timestamp as a Date object
  });
  const apiURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const categories = getCategoryFilterTypes();
  const difficulties = getDifficultyLevels();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Log the id to verify it's being passed correctly

        // Convert id to number if necessary
        const numericId = Number(id);
        if (isNaN(numericId)) {
          throw new Error("Invalid ID");
        }

        const response = await fetch(`${apiURL}/get-question-by-id/${id}`);
        const responseData: [Question] = await response.json();
        const data: Question = responseData[0];
        data.timestamp = new Date(data.timestamp); // Convert timestamp to Date object
        setQuestionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id, apiURL]);

  const handleInputChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, type, checked, value } =
      event.currentTarget as HTMLInputElement;

    setQuestionData((prevState) => {
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
      } else if (name.startsWith("category")) {
        return {
          ...prevState,
          [name]: value,
        };
      } else if (name.startsWith("difficulty")) {
        return {
          ...prevState,
          [name]: value,
        };
      } else {
        return {
          ...prevState,
          [name]: value,
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`${apiURL}/edit-question`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
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

    navigate("/questionbank");
  };

  const goBack = () => {
    navigate("/questionbank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-black p-4 bg-gray-100 rounded shadow-md"
    >
      <div className="grid grid-cols-2 gap-2 auto-cols-min">
        <label className="block text-gray-700 self-end font-bold mb-2">
          Category:
        </label>
        <Dropdown
          name="category"
          contentArr={categories}
          defaultValue={questionData.category}
          handleDropdown={handleInputChange}
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Difficulty:
        </label>
        <Dropdown
          name="difficulty"
          contentArr={difficulties}
          defaultValue={questionData.difficulty}
          handleDropdown={handleInputChange}
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Question:
        </label>
        <input
          type="text"
          name="question"
          value={questionData.question}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 1:
        </label>
        <input
          type="text"
          name="option 1"
          value={questionData.options[0]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 2:
        </label>
        <input
          type="text"
          name="option 2"
          value={questionData.options[1]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 3:
        </label>
        <input
          type="text"
          name="option 3"
          value={questionData.options[2]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 4:
        </label>
        <input
          type="text"
          name="option 4"
          value={questionData.options[3]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Answer:
        </label>
        <input
          type="text"
          name="answer"
          value={questionData.answer}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Favourited:
        </label>
        <input
          type="checkbox"
          name="favourited"
          checked={questionData.favourited}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />
      </div>

      <div className="w-full flex justify-between left-0 p-4 bg-gray-100">
        <Button name="Back" handler={goBack} />
        <Button name="Edit Question" handler={() => handleSubmit} />
      </div>
    </form>
  );
};

export default EditQuestionForm;
