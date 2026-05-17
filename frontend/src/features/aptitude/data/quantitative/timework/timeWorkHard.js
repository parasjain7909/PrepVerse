/* timeWorkHard.js */

const timeWorkHard = [
  {
    id: 1,
    topic: "Time & Work",
    difficulty: "hard",
    company: "TCS Digital",
    question:
      "A can complete work in 12 days and B in 18 days. They work together for 4 days, then A leaves. Remaining work is completed by B in?",
    options: ["5", "6", "7", "8"],
    answer: "6",
    explanation:
      "Together 4 days = 5/9 done. Remaining = 4/9. B does 1/18/day → 8 days.",
  },

  {
    id: 2,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Infosys",
    question:
      "A alone can do work in 10 days and B alone in 15 days. If they work on alternate days starting with A, total days required?",
    options: ["11", "12", "13", "14"],
    answer: "12",
    explanation:
      "2 days work = 1/10 + 1/15 = 1/6",
  },

  {
    id: 3,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Wipro",
    question:
      "A is twice as efficient as B and together they finish work in 12 days. A alone takes?",
    options: ["16", "18", "20", "24"],
    answer: "18",
    explanation:
      "Let B = x, A = 2x",
  },

  {
    id: 4,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Accenture",
    question:
      "12 men complete work in 15 days. How many men are needed to complete same work in 9 days?",
    options: ["18", "20", "22", "24"],
    answer: "20",
    explanation:
      "Men × Days constant",
  },

  {
    id: 5,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "A can do work in 20 days and B in 30 days. If they work together, work completed in 5 days?",
    options: ["1/3", "1/2", "5/12", "7/12"],
    answer: "5/12",
    explanation:
      "5 × (1/20 + 1/30)",
  },

  {
    id: 6,
    topic: "Time & Work",
    difficulty: "hard",
    company: "IBM",
    question:
      "A can complete work in 16 days and B in 24 days. If A works alone for 4 days, remaining work by B?",
    options: ["12", "14", "16", "18"],
    answer: "18",
    explanation:
      "Remaining = 3/4",
  },

  {
    id: 7,
    topic: "Time & Work",
    difficulty: "hard",
    company: "TCS",
    question:
      "15 workers can complete work in 20 days. After 5 days, 5 workers leave. Remaining work completed in?",
    options: ["18", "20", "22", "25"],
    answer: "25",
    explanation:
      "Use total man-days concept.",
  },

  {
    id: 8,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Infosys",
    question:
      "A can complete work in 8 days and B in 12 days. They work together for 3 days. Remaining work?",
    options: ["1/8", "1/4", "3/8", "5/8"],
    answer: "3/8",
    explanation:
      "Done = 5/8",
  },

  {
    id: 9,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Wipro",
    question:
      "A and B together finish work in 6 days. B and C in 8 days. A and C in 12 days. A alone?",
    options: ["12", "16", "20", "24"],
    answer: "16",
    explanation:
      "Use equation method.",
  },

  {
    id: 10,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Accenture",
    question:
      "20 men complete work in 30 days. After 10 days, 5 men leave. Remaining work completed in?",
    options: ["20", "22", "24", "26"],
    answer: "26",
    explanation:
      "Use man-days.",
  },

  {
    id: 11,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "A can do work in 24 days and B in 36 days. Together after 8 days, remaining work?",
    options: ["1/9", "1/6", "2/9", "1/3"],
    answer: "1/9",
    explanation:
      "Done = 8/9",
  },

  {
    id: 12,
    topic: "Time & Work",
    difficulty: "hard",
    company: "IBM",
    question:
      "A is 50% more efficient than B. If B takes 18 days, A takes?",
    options: ["10", "11", "12", "14"],
    answer: "12",
    explanation:
      "18 ÷ 1.5 = 12",
  },

  {
    id: 13,
    topic: "Time & Work",
    difficulty: "hard",
    company: "TCS Digital",
    question:
      "A and B together do work in 10 days. A alone takes 15 days. B alone?",
    options: ["20", "25", "30", "35"],
    answer: "30",
    explanation:
      "1/B = 1/10 - 1/15",
  },

  {
    id: 14,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Infosys",
    question:
      "8 men or 12 women can complete work in 20 days. Ratio of efficiency?",
    options: ["2:3", "3:2", "4:3", "3:4"],
    answer: "3:2",
    explanation:
      "8M = 12W",
  },

  {
    id: 15,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Wipro",
    question:
      "A can do work in 30 days. B in 20 days. C in 15 days. Together?",
    options: ["6", "7", "8", "10"],
    answer: "8",
    explanation:
      "LCM method",
  },

  {
    id: 16,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Accenture",
    question:
      "A works twice as fast as B. Together they finish work in 18 days. B alone takes?",
    options: ["36", "48", "54", "60"],
    answer: "54",
    explanation:
      "Efficiency ratio 2:1",
  },

  {
    id: 17,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "If 5 men complete work in 12 days, how many men needed in 4 days?",
    options: ["10", "12", "15", "18"],
    answer: "15",
    explanation:
      "Man-days constant",
  },

  {
    id: 18,
    topic: "Time & Work",
    difficulty: "hard",
    company: "IBM",
    question:
      "A alone takes 40 days. B alone takes 60 days. Together for 10 days. Remaining work?",
    options: ["1/6", "1/4", "1/3", "1/2"],
    answer: "1/6",
    explanation:
      "Done = 5/6",
  },

  {
    id: 19,
    topic: "Time & Work",
    difficulty: "hard",
    company: "TCS",
    question:
      "A can do work in 25 days and B in 20 days. Together efficiency?",
    options: ["1/9", "1/10", "1/11", "1/12"],
    answer: "1/11",
    explanation:
      "1/25 + 1/20 = 9/100",
  },

  {
    id: 20,
    topic: "Time & Work",
    difficulty: "hard",
    company: "Infosys",
    question:
      "10 workers complete work in 15 days. 5 extra workers join after 5 days. Total days required?",
    options: ["10", "11", "12", "13"],
    answer: "12",
    explanation:
      "Use man-days method.",
  },
];

export default timeWorkHard;