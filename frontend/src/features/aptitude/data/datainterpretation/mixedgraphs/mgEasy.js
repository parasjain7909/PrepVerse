/* mixedGraphsEasy.js */

const mixedGraphsEasy = [
  {
    id: 1,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      bar: [
        { year: "2021", sales: 120 },
        { year: "2022", sales: 180 },
      ],

      line: [
        { year: "2021", profit: 40 },
        { year: "2022", profit: 70 },
      ],
    },

    question:
      "In which year were sales higher?",

    options: [
      "2021",
      "2022",
      "Both Same",
      "Cannot Determine",
    ],

    answer: "2022",

    explanation:
      "Sales in 2022 were 180.",
  },

  {
    id: 2,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      pie: [
        { category: "Food", value: 40 },
        { category: "Rent", value: 35 },
        { category: "Travel", value: 25 },
      ],

      table: [
        { month: "Jan", expense: 20000 },
      ],
    },

    question:
      "Which category had highest expense percentage?",

    options: [
      "Food",
      "Rent",
      "Travel",
      "None",
    ],

    answer: "Food",

    explanation:
      "Food has 40%.",
  },

  {
    id: 3,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      bar: [
        { city: "Delhi", population: 120 },
        { city: "Mumbai", population: 150 },
      ],

      line: [
        { city: "Delhi", literacy: 80 },
        { city: "Mumbai", literacy: 85 },
      ],
    },

    question:
      "Which city has higher literacy rate?",

    options: [
      "Delhi",
      "Mumbai",
      "Both Same",
      "None",
    ],

    answer: "Mumbai",

    explanation:
      "Mumbai literacy rate is 85%.",
  },

  {
    id: 4,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      pie: [
        { sport: "Cricket", value: 50 },
        { sport: "Football", value: 30 },
        { sport: "Basketball", value: 20 },
      ],

      line: [
        { year: "2023", viewers: 1000 },
      ],
    },

    question:
      "Which sport has least percentage?",

    options: [
      "Cricket",
      "Football",
      "Basketball",
      "None",
    ],

    answer: "Basketball",

    explanation:
      "Basketball has 20%.",
  },

  {
    id: 5,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      table: [
        { product: "Mobile", sales: 300 },
        { product: "Laptop", sales: 200 },
      ],

      bar: [
        { product: "Tablet", sales: 150 },
      ],
    },

    question:
      "Which product sold maximum units?",

    options: [
      "Mobile",
      "Laptop",
      "Tablet",
      "None",
    ],

    answer: "Mobile",

    explanation:
      "Mobile sales = 300.",
  },

  {
    id: 6,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      line: [
        { month: "Jan", temp: 20 },
        { month: "Feb", temp: 24 },
      ],

      bar: [
        { month: "Jan", rainfall: 10 },
        { month: "Feb", rainfall: 15 },
      ],
    },

    question:
      "Which month had higher rainfall?",

    options: [
      "Jan",
      "Feb",
      "Both Same",
      "None",
    ],

    answer: "Feb",

    explanation:
      "February rainfall = 15.",
  },

  {
    id: 7,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      pie: [
        { branch: "CSE", value: 45 },
        { branch: "IT", value: 35 },
        { branch: "ECE", value: 20 },
      ],

      table: [
        { totalStudents: 400 },
      ],
    },

    question:
      "Which branch has maximum students percentage?",

    options: [
      "CSE",
      "IT",
      "ECE",
      "None",
    ],

    answer: "CSE",

    explanation:
      "CSE has 45%.",
  },

  {
    id: 8,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      bar: [
        { quarter: "Q1", revenue: 200 },
        { quarter: "Q2", revenue: 250 },
      ],

      line: [
        { quarter: "Q1", profit: 40 },
        { quarter: "Q2", profit: 60 },
      ],
    },

    question:
      "In which quarter was profit higher?",

    options: [
      "Q1",
      "Q2",
      "Both Same",
      "None",
    ],

    answer: "Q2",

    explanation:
      "Profit in Q2 = 60.",
  },

  {
    id: 9,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      line: [
        { year: "2021", students: 500 },
        { year: "2022", students: 600 },
      ],

      pie: [
        { category: "Boys", value: 60 },
        { category: "Girls", value: 40 },
      ],
    },

    question:
      "Which year had more students?",

    options: [
      "2021",
      "2022",
      "Both Same",
      "None",
    ],

    answer: "2022",

    explanation:
      "2022 had 600 students.",
  },

  {
    id: 10,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "easy",

    data: {
      table: [
        { employee: "A", salary: 30000 },
        { employee: "B", salary: 45000 },
      ],

      bar: [
        { employee: "C", salary: 40000 },
      ],
    },

    question:
      "Who has highest salary?",

    options: [
      "A",
      "B",
      "C",
      "None",
    ],

    answer: "B",

    explanation:
      "Employee B salary = ₹45000.",
  },
];

export default mixedGraphsEasy;