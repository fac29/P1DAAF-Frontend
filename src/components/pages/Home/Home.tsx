import React from 'react';
import Button from "../../common/Button/Button";
import Dropdown from "../../common/Dropdown/Dropdown";
//import { getCategoryFilterTypes, getDifficultyLevels } from "../../../utils/helper";

const handler = () => {
  console.log("clicked")
}

function Home() {
  // const categories = getCategoryFilterTypes();
  // const difficulties = getDifficultyLevels();

  return (
    <div className="container mx-auto flex flex-col items-center mt-10 p-5">
      <h1 className="text-4xl font-bold mb-4 text-white">Take a Quiz</h1>
      <section className="mb-6 text-gray-400 text-center">
        <p>This is the main page for the quiz.</p>
      </section>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
        {/* <Dropdown name="Category" options={categories} />
        <Dropdown name="Difficulty" options={difficulties} /> */}
        <Dropdown  />
        <Dropdown  />
      </div>
      <Button name="START QUIZ" color="orange" handler={handler} />
    </div>
  );
}

export default Home;
