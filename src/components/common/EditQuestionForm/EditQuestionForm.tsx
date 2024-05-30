import React, { useState, useRef, useEffect } from "react";
import { Question, Questions } from "../../../types";

// const testQuestionObj = {
//   id: 0,
//   category: "",
//   difficulty: "",
//   question: "",
//   options: ["", "", "", ""],
//   answer: "",
//   favourited: false,
//   timestamp: new Date(),
// };

function EditQuestionForm() {
  const [questionData, setQuestionData] = useState<Question>({
    id: 0,
    category: "",
    difficulty: "",
    question: "Default start values",
    options: ["a", "b", "c", "d"],
    answer: "",
    favourited: false,
    timestamp: new Date(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/random/1");
        const data: Question = await response.json();
        console.log(data[0]);
        // setQuestionData(data[0]);
        // response.json().then((res) => {
        //   // setQuestionData(res[0]);
        //   console.log(res[0]);
        // });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setQuestionValue(event.target.value);
  // }

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;

    setQuestionData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    console.log(questionData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" text-black  p-4 bg-gray-100 rounded shadow-md "
    >
      <div className="grid grid-cols-2 gap-2 auto-cols-min">
        <label className="block text-gray-700 font-bold mb-2 self-end">
          ID:
        </label>
        <input
          type="text"
          name="id"
          value={questionData.id}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 self-end font-bold mb-2">
          Category:
        </label>
        <input
          type="text"
          name="category"
          value={questionData.category}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Difficulty:
        </label>
        <input
          type="text"
          name="difficulty"
          value={questionData.difficulty}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
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
          Option 0:
        </label>
        <input
          type="text"
          name="options"
          value={questionData.options}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 1:
        </label>
        <input
          type="text"
          name="options"
          value={questionData.options}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 2:
        </label>
        <input
          type="text"
          name="options"
          value={questionData.options}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Option 3:
        </label>
        <input
          type="text"
          name="options"
          value={questionData.options}
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

        <label className="block text-gray-700 font-bold mb-2 self-end">
          Timestamp:
        </label>
        <input
          type="date"
          name="timestamp"
          value={questionData.timestamp.toISOString().split("T")[0]}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded bg-white"
        />
      </div>

      <button type="submit">Edit question</button>
    </form>
  );
}

export default EditQuestionForm;
