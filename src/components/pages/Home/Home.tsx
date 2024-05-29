import Button from "../../common/Button/Button";
import Dropdown from "../../common/Dropdown/Dropdown";


const handler = () => {console.log("clicked")}


function Home() {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Take a Quiz</h1>
      <article>This is the main page for the quiz, yeah</article>
      <Dropdown/>
      <Button name="START QUIZ" color="orange" handler={handler}/>     
    </div>
  );
}

export default Home;