type Categories =
  | "Mathematics"
  | "Science"
  | "History"
  | "Geography"
  | "Pop Culture"
  | "Music"
  | "Literature"
  | "Favourited";
type CategoriesArray = Array<Categories>;

type Difficulties = "Easy" | "Medium" | "Hard" | "All";

type DifficultiesArray = Array<Difficulties>;

function Dropdown() {
  const categories: CategoriesArray = [
    "Mathematics",
    "Science",
    "History",
    "Geography",
    "Pop Culture",
    "Music",
    "Literature",
    "Favourited",
  ];

  const difficulties: DifficultiesArray = ["Easy", "Medium", "Hard", "All"];

  return (
    <div className="flex justify-evenly">
      <select className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
        {categories.map((category, index) => {
          return (
            <option key={index} value="category">
              {category}
            </option>
          );
        })}
      </select>
      <select className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
        {difficulties.map((difficulty, index) => {
          return (
            <option key={index} value="category">
              {difficulty}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
