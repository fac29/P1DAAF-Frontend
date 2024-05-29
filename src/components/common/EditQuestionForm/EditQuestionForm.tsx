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

function EditProfileForm() {
  const [question, setQuestion] = useState<Question>();
  const [questionValue, setQuestionValue] = useState(question?.question);
  const [categoryValue, setCategoryValue] = useState(question?.category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/random/1");

        response.json().then((res) => {
          setQuestion(res[0]);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestionValue(event.target.value);
  }

  function handleSubmit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    console.log(questionValue);
  }

  return (
    <div>
      <form>
        {/* Render input fields based on the profileData object */}

        <div>
          <label>Category:</label>
          <input
            type="text"
            value={categoryValue}
            onChange={(e) => handleChange(e)}
          />
          <label>Difficulty:</label>
          <input
            type="text"
            value={questionValue}
            onChange={(e) => handleChange(e)}
          />
          <label>Question:</label>
          <input
            type="text"
            value={question?.question}
            onChange={(e) => handleChange(e)}
          />
          <label>Option 0:</label>
          <input
            type="text"
            value={questionValue}
            onChange={(e) => handleChange(e)}
          />
          <label>Option 1:</label>
          <input
            type="text"
            value={questionValue}
            onChange={(e) => handleChange(e)}
          />
          <label>Option 2:</label>
          <input
            type="text"
            value={questionValue}
            onChange={(e) => handleChange(e)}
          />
          <label>Option 3:</label>
          <input
            type="text"
            value={questionValue}
            onChange={(e) => handleChange(e)}
          />
          <label>Answer:</label>
          <input
            type="text"
            value={questionValue}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfileForm;
