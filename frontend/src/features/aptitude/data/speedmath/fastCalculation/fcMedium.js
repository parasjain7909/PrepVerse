/* fcMedium.js */

const fcMedium = [
  {
    id: 1,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 48 × 52?",

    options: [
      "2396",
      "2496",
      "2596",
      "2696",
    ],

    answer: "2496",

    explanation:
      "48 × 52 = (50 - 2)(50 + 2) = 2500 - 4.",

    trick:
      "Use identity: (a-b)(a+b)=a²-b².",
  },

  {
    id: 2,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 999 × 9?",

    options: [
      "8991",
      "8999",
      "9001",
      "9099",
    ],

    answer: "8991",

    explanation:
      "999 × 9 = 9000 - 9.",

    trick:
      "Multiply near base 1000 then subtract.",
  },

  {
    id: 3,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 75% of 400?",

    options: [
      "250",
      "275",
      "300",
      "325",
    ],

    answer: "300",

    explanation:
      "75% of 400 = 300.",

    trick:
      "75% = 3/4 of number.",
  },

  {
    id: 4,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 125 × 16?",

    options: [
      "1000",
      "1500",
      "2000",
      "2500",
    ],

    answer: "2000",

    explanation:
      "125 × 16 = 2000.",

    trick:
      "125 × 8 = 1000, then double again.",
  },

  {
    id: 5,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 98²?",

    options: [
      "9504",
      "9604",
      "9704",
      "9804",
    ],

    answer: "9604",

    explanation:
      "98² = (100 - 2)².",

    trick:
      "Use base 100 shortcut.",
  },

  {
    id: 6,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 102²?",

    options: [
      "10204",
      "10304",
      "10404",
      "10504",
    ],

    answer: "10404",

    explanation:
      "102² = (100 + 2)².",

    trick:
      "Use near-base square trick.",
  },

  {
    id: 7,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 35 × 35?",

    options: [
      "1125",
      "1225",
      "1325",
      "1425",
    ],

    answer: "1225",

    explanation:
      "35² = 1225.",

    trick:
      "For numbers ending in 5: n(n+1)|25.",
  },

  {
    id: 8,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 5% of 840?",

    options: [
      "32",
      "42",
      "52",
      "62",
    ],

    answer: "42",

    explanation:
      "5% = half of 10%.",

    trick:
      "10% of 840 = 84, half = 42.",
  },

  {
    id: 9,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 250 × 4?",

    options: [
      "500",
      "750",
      "1000",
      "1250",
    ],

    answer: "1000",

    explanation:
      "250 × 4 = 1000.",

    trick:
      "Quarter multiplication shortcut.",
  },

  {
    id: 10,

    topic: "Fast Calculation",

    difficulty: "medium",

    question:
      "What is 88 + 99 + 111?",

    options: [
      "288",
      "298",
      "308",
      "318",
    ],

    answer: "298",

    explanation:
      "88 + 99 = 187, +111 = 298.",

    trick:
      "Pair nearest hundreds quickly.",
  },
];

export default fcMedium;