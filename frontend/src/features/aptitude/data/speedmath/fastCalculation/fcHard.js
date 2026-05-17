/* fcHard.js */

const fcHard = [
  {
    id: 1,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 998 × 997?",

    options: [
      "994006",
      "995006",
      "996006",
      "997006",
    ],

    answer: "995006",

    explanation:
      "998 × 997 = (1000 - 2)(1000 - 3).",

    trick:
      "Use base 1000 shortcut: 998-3 = 995 | 2×3 = 006.",
  },

  {
    id: 2,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 115²?",

    options: [
      "12225",
      "13225",
      "14225",
      "15225",
    ],

    answer: "13225",

    explanation:
      "115² = 13225.",

    trick:
      "For numbers ending in 5: 11×12 | 25.",
  },

  {
    id: 3,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 104 × 106?",

    options: [
      "10924",
      "11024",
      "11124",
      "11224",
    ],

    answer: "11024",

    explanation:
      "104 × 106 = (100+4)(100+6).",

    trick:
      "Base 100 method: 104+6 = 110 | 4×6 = 24.",
  },

  {
    id: 4,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 9999²?",

    options: [
      "99980001",
      "99990001",
      "99970001",
      "99960001",
    ],

    answer: "99980001",

    explanation:
      "9999² = (10000 -1 )².",

    trick:
      "Use (a-b)² = a² -2ab + b².",
  },

  {
    id: 5,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 125 × 125?",

    options: [
      "14625",
      "15625",
      "16625",
      "17625",
    ],

    answer: "15625",

    explanation:
      "125² = 15625.",

    trick:
      "Use square shortcut for numbers ending in 25.",
  },

  {
    id: 6,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 89 × 91?",

    options: [
      "7999",
      "8099",
      "8199",
      "8299",
    ],

    answer: "8099",

    explanation:
      "89 × 91 = (90-1)(90+1).",

    trick:
      "Use a²-b² identity.",
  },

  {
    id: 7,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 995 × 995?",

    options: [
      "989025",
      "990025",
      "992025",
      "995025",
    ],

    answer: "990025",

    explanation:
      "995² = (1000-5)².",

    trick:
      "995-5 = 990 | 5² = 025.",
  },

  {
    id: 8,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 45²?",

    options: [
      "1925",
      "2025",
      "2125",
      "2225",
    ],

    answer: "2025",

    explanation:
      "45² = 2025.",

    trick:
      "4×5 = 20 then append 25.",
  },

  {
    id: 9,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 1001 × 999?",

    options: [
      "998999",
      "999999",
      "1000999",
      "1001999",
    ],

    answer: "999999",

    explanation:
      "(1000+1)(1000-1)=1000000-1.",

    trick:
      "Use difference of squares.",
  },

  {
    id: 10,

    topic: "Fast Calculation",

    difficulty: "hard",

    question:
      "What is 111 × 111?",

    options: [
      "12221",
      "12321",
      "12421",
      "12521",
    ],

    answer: "12321",

    explanation:
      "111² = 12321.",

    trick:
      "Observe pattern in repeated digit squares.",
  },
];

export default fcHard;