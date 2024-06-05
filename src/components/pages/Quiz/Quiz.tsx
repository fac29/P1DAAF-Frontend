import { QuestionSlide } from "../../common/Question/QuestionSlide";
import { getData } from "../../../data/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Questions } from "../../../types";

function Quiz() {
  const { category, difficulty } = useParams<{
    category: string;
    difficulty: string;
  }>();

  const [data, setData] = useState<Questions>();

  useEffect(() => {
    if (category && difficulty) {
      getData(category, difficulty).then((result) => {
        if (result.length > 8) {
          setData(result.slice(0, 8));
        } else {
          setData(result.slice(0, result.length));
        }
      });
    }
  }, [category, difficulty]); // Dependency array includes category and difficulty

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        <QuestionSlide
          questions={data?.map((element) => element.question)}
          options={data?.map((element) => element.options)}
          answers={data?.map((element) => element.answer)}
        />
      ) : null}
    </>
  );
}

export default Quiz;
