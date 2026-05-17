/* probabilityHard.js */

const probabilityHard = [
  {
    id: 1,
    topic: "Probability",
    difficulty: "hard",
    company: "TCS Digital",
    question:
      "Three coins tossed. Probability of exactly two heads?",
    options: ["1/8", "3/8", "1/2", "5/8"],
    answer: "3/8",
    explanation:
      "HHT, HTH, THH",
  },

  {
    id: 2,
    topic: "Probability",
    difficulty: "hard",
    company: "Infosys",
    question:
      "Probability of getting sum 9 on two dice?",
    options: ["1/12", "1/9", "1/8", "1/6"],
    answer: "1/9",
    explanation:
      "4 favorable outcomes",
  },

  {
    id: 3,
    topic: "Probability",
    difficulty: "hard",
    company: "Wipro",
    question:
      "A bag contains 6 red, 4 green, 5 blue balls. Probability of not green?",
    options: ["11/15", "4/15", "2/3", "3/5"],
    answer: "11/15",
    explanation:
      "11 non-green balls",
  },

  {
    id: 4,
    topic: "Probability",
    difficulty: "hard",
    company: "Accenture",
    question:
      "Probability of drawing two kings consecutively without replacement?",
    options: ["1/221", "1/169", "1/52", "1/13"],
    answer: "1/221",
    explanation:
      "(4/52)(3/51)",
  },

  {
    id: 5,
    topic: "Probability",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "Probability of getting at most one head in two tosses?",
    options: ["1/4", "1/2", "3/4", "1"],
    answer: "3/4",
    explanation:
      "TT, HT, TH",
  },

  {
    id: 6,
    topic: "Probability",
    difficulty: "hard",
    company: "IBM",
    question:
      "Probability of drawing a prime numbered card from 1-10?",
    options: ["2/5", "1/2", "3/5", "4/5"],
    answer: "2/5",
    explanation:
      "2,3,5,7",
  },

  {
    id: 7,
    topic: "Probability",
    difficulty: "hard",
    company: "TCS",
    question:
      "Probability of sum greater than 10 on two dice?",
    options: ["1/18", "1/12", "1/9", "1/6"],
    answer: "1/12",
    explanation:
      "11 and 12",
  },

  {
    id: 8,
    topic: "Probability",
    difficulty: "hard",
    company: "Infosys",
    question:
      "Probability of drawing red king?",
    options: ["1/13", "1/26", "1/52", "1/4"],
    answer: "1/26",
    explanation:
      "2 red kings",
  },

  {
    id: 9,
    topic: "Probability",
    difficulty: "hard",
    company: "Wipro",
    question:
      "Probability of exactly one tail in three tosses?",
    options: ["1/8", "3/8", "1/2", "5/8"],
    answer: "3/8",
    explanation:
      "THH, HTH, HHT",
  },

  {
    id: 10,
    topic: "Probability",
    difficulty: "hard",
    company: "Accenture",
    question:
      "Probability of drawing queen or ace?",
    options: ["1/13", "2/13", "3/13", "4/13"],
    answer: "2/13",
    explanation:
      "8 cards",
  },

  {
    id: 11,
    topic: "Probability",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "Probability of no head in three tosses?",
    options: ["1/8", "1/4", "3/8", "1/2"],
    answer: "1/8",
    explanation:
      "TTT only",
  },

  {
    id: 12,
    topic: "Probability",
    difficulty: "hard",
    company: "IBM",
    question:
      "Probability of drawing two aces without replacement?",
    options: ["1/221", "1/169", "1/52", "1/13"],
    answer: "1/221",
    explanation:
      "(4/52)(3/51)",
  },

  {
    id: 13,
    topic: "Probability",
    difficulty: "hard",
    company: "TCS Digital",
    question:
      "Probability of at least two heads in three tosses?",
    options: ["1/4", "3/8", "1/2", "5/8"],
    answer: "1/2",
    explanation:
      "2 heads + 3 heads",
  },

  {
    id: 14,
    topic: "Probability",
    difficulty: "hard",
    company: "Infosys",
    question:
      "Probability of getting product 12 on two dice?",
    options: ["1/18", "1/12", "1/9", "1/6"],
    answer: "1/9",
    explanation:
      "(2,6),(6,2),(3,4),(4,3)",
  },

  {
    id: 15,
    topic: "Probability",
    difficulty: "hard",
    company: "Wipro",
    question:
      "Probability of drawing card neither red nor ace?",
    options: ["6/13", "7/13", "8/13", "9/13"],
    answer: "6/13",
    explanation:
      "24 cards",
  },

  {
    id: 16,
    topic: "Probability",
    difficulty: "hard",
    company: "Accenture",
    question:
      "Probability of getting exactly two tails in three tosses?",
    options: ["1/8", "3/8", "1/2", "5/8"],
    answer: "3/8",
    explanation:
      "TTH, THT, HTT",
  },

  {
    id: 17,
    topic: "Probability",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "Probability of drawing a card greater than 10?",
    options: ["3/13", "4/13", "5/13", "6/13"],
    answer: "3/13",
    explanation:
      "J,Q,K",
  },

  {
    id: 18,
    topic: "Probability",
    difficulty: "hard",
    company: "IBM",
    question:
      "Probability of sum 5 on two dice?",
    options: ["1/18", "1/12", "1/9", "1/6"],
    answer: "1/9",
    explanation:
      "4 favorable outcomes",
  },

  {
    id: 19,
    topic: "Probability",
    difficulty: "hard",
    company: "TCS",
    question:
      "Probability of drawing heart or king?",
    options: ["4/13", "1/13", "13/52", "16/52"],
    answer: "4/13",
    explanation:
      "13+4-1",
  },

  {
    id: 20,
    topic: "Probability",
    difficulty: "hard",
    company: "Infosys",
    question:
      "Probability of getting at least one six in two dice?",
    options: ["11/36", "5/18", "1/3", "7/18"],
    answer: "11/36",
    explanation:
      "Complement method",
  },
];

export default probabilityHard;