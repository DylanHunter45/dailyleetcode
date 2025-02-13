// const API_KEY = "";
const BASE_URL = "https://alfa-leetcode-api.onrender.com/";

export const getDailyProblem = async () => {
  const response = await fetch(`${BASE_URL}daily`);
  const data = await response.json();
  return data;
};

export const getRandomProblem = async () => {
  const response = await fetch(`${BASE_URL}daily`);
  const data = await response.json();
  return data.results;
};
