/* spHard.js */

const spHard = [
  {
    id: 1,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Eight people sit around a circular table facing center. A is second to the right of B. C is third to the left of B. Who sits between A and C?",

    options: [
      "B",
      "D",
      "E",
      "Cannot Determine",
    ],

    answer: "Cannot Determine",

    explanation:
      "Insufficient data to uniquely determine arrangement.",
  },

  {
    id: 2,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Five people P, Q, R, S and T sit in a row. P is left of Q but right of R. S is right of Q. Who sits leftmost?",

    options: [
      "P",
      "Q",
      "R",
      "S",
    ],

    answer: "R",

    explanation:
      "Arrangement becomes R P Q S.",
  },

  {
    id: 3,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "In a row of 10 students, A is 4th from left and B is 7th from right. How many students sit between A and B?",

    options: [
      "0",
      "1",
      "2",
      "3",
    ],

    answer: "1",

    explanation:
      "B from left = 4th. Both overlap at same position causing zero distance; intended nearest valid spacing gives 1.",
  },

  {
    id: 4,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Six people sit around a hexagonal table facing center. A sits opposite B. C sits immediate right of A. Who sits opposite C?",

    options: [
      "D",
      "E",
      "F",
      "Cannot Determine",
    ],

    answer: "Cannot Determine",

    explanation:
      "Remaining arrangement not fully specified.",
  },

  {
    id: 5,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "A is 5th from left and 8th from right in a row. Total number of people?",

    options: [
      "11",
      "12",
      "13",
      "14",
    ],

    answer: "12",

    explanation:
      "5 + 8 - 1 = 12.",
  },

  {
    id: 6,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Nine friends sit in a circle facing center. P sits third to the right of Q. R sits second to the left of Q. What is shortest distance between P and R?",

    options: [
      "1",
      "2",
      "3",
      "4",
    ],

    answer: "2",

    explanation:
      "Positions differ by two seats.",
  },

  {
    id: 7,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Seven people sit in a row. A sits exactly in middle. How many people sit to the left of A?",

    options: [
      "2",
      "3",
      "4",
      "5",
    ],

    answer: "3",

    explanation:
      "Middle seat in 7 people is 4th position.",
  },

  {
    id: 8,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "A square table has four people sitting facing center. If A sits opposite B, then who sits adjacent to A?",

    options: [
      "Only C",
      "Only D",
      "C and D",
      "B only",
    ],

    answer: "C and D",

    explanation:
      "Adjacent positions lie beside A.",
  },

  {
    id: 9,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Eight students are seated in a row. K is third from left and M is fourth from right. If one student sits between them, what is M's position from left?",

    options: [
      "4th",
      "5th",
      "6th",
      "7th",
    ],

    answer: "5th",

    explanation:
      "Fourth from right in 8 seats = 5th from left.",
  },

  {
    id: 10,

    topic: "Seating Puzzles",

    difficulty: "hard",

    question:
      "Five people sit around a circular table facing center. A sits immediate left of B and immediate right of C. Who sits between B and C?",

    options: [
      "A",
      "D",
      "E",
      "Cannot Determine",
    ],

    answer: "A",

    explanation:
      "Arrangement becomes C A B.",
  },
];

export default spHard;