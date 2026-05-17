/* mixedGraphsMedium.js */

const mixedGraphsMedium = [
  {
    id: 1,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "What is the increase in sales from 2021 to 2022?",

    options: [
      "40",
      "50",
      "60",
      "70",
    ],

    answer: "60",

    explanation:
      "180 - 120 = 60.",
  },

  {
    id: 2,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "How much money was spent on Food?",

    options: [
      "7000",
      "8000",
      "9000",
      "10000",
    ],

    answer: "8000",

    explanation:
      "40% of 20000 = 8000.",
  },

  {
    id: 3,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "What is the population difference between Mumbai and Delhi?",

    options: [
      "20",
      "25",
      "30",
      "35",
    ],

    answer: "30",

    explanation:
      "150 - 120 = 30.",
  },

  {
    id: 4,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "How many viewers prefer Football?",

    options: [
      "200",
      "250",
      "300",
      "350",
    ],

    answer: "300",

    explanation:
      "30% of 1000 = 300.",
  },

  {
    id: 5,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "What is the total sales of all products?",

    options: [
      "600",
      "650",
      "700",
      "750",
    ],

    answer: "650",

    explanation:
      "300 + 200 + 150 = 650.",
  },

  {
    id: 6,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "What is the percentage increase in rainfall from Jan to Feb?",

    options: [
      "40%",
      "45%",
      "50%",
      "55%",
    ],

    answer: "50%",

    explanation:
      "((15 - 10) / 10) × 100 = 50%.",
  },

  {
    id: 7,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "How many students belong to IT branch?",

    options: [
      "120",
      "140",
      "160",
      "180",
    ],

    answer: "140",

    explanation:
      "35% of 400 = 140.",
  },

  {
    id: 8,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "What is the increase in profit from Q1 to Q2?",

    options: [
      "10",
      "15",
      "20",
      "25",
    ],

    answer: "20",

    explanation:
      "60 - 40 = 20.",
  },

  {
    id: 9,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "How many girls were there in 2022?",

    options: [
      "200",
      "220",
      "240",
      "260",
    ],

    answer: "240",

    explanation:
      "40% of 600 = 240.",
  },

  {
    id: 10,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "medium",

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
      "What is the average salary of all employees?",

    options: [
      "35000",
      "36666",
      "38333",
      "40000",
    ],

    answer: "38333",

    explanation:
      "(30000 + 45000 + 40000) / 3 = 38333.",
  },
];

export default mixedGraphsMedium;