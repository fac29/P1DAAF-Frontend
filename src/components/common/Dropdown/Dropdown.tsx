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
    <div>
      <select>
        {categories.map((category) => {
          return <option value="category">{category}</option>;
        })}
      </select>
      <select>
        {difficulties.map((difficulty) => {
          return <option value="category">{difficulty}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
