const generateQuiz = (questions) => {
  return [...questions]
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);
};

export default generateQuiz;