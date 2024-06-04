export const getCategoryFilterTypes = (): string[] => {
  return [
    "Science",
    "Geography",
    "History",
    "Mathematics",
    "Pop Culture",
    "Music",
    "Literature",
    "Favourited",
  ];
};

export const getDifficultyLevels = (): string[] => {
  return ["easy", "medium", "hard", "all"];
};

// Change this to 'http://localhost:3000/' when developing!!
// export const REACT_APP_API_URL = 'https://18.175.120.83:8443'
export const REACT_APP_API_URL = "http://localhost:3000";
