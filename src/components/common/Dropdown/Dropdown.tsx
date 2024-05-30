interface Props {
  name: string;
  contentArr: Array<string>;
  handleDropdown: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Dropdown({ name, contentArr, handleDropdown }: Props) {
  return (
    <div className="flex justify-evenly">
      <select
        name={name}
        onChange={(e) => handleDropdown(e)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <option value="">Please choose {name}</option>
        {contentArr?.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
