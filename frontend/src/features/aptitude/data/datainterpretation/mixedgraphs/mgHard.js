/* mixedGraphsHard.js */

const mixedGraphsHard = [
  {
    id: 1,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "What is the percentage increase in profit from 2021 to 2022?",

    options: [
      "60%",
      "70%",
      "75%",
      "80%",
    ],

    answer: "75%",

    explanation:
      "((70 - 40)/40) ×100 = 75%.",
  },

  {
    id: 2,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "How much more money was spent on Food than Travel?",

    options: [
      "2000",
      "2500",
      "3000",
      "3500",
    ],

    answer: "3000",

    explanation:
      "(40% - 25%) of 20000 = 3000.",
  },

  {
    id: 3,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "What is the difference in literate population between Mumbai and Delhi?",

    options: [
      "25.5",
      "31.5",
      "40",
      "45",
    ],

    answer: "31.5",

    explanation:
      "Mumbai literates = 150×85%=127.5, Delhi = 120×80%=96, difference = 31.5.",
  },

  {
    id: 4,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "Football viewers are what percent less than Cricket viewers?",

    options: [
      "30%",
      "35%",
      "40%",
      "45%",
    ],

    answer: "40%",

    explanation:
      "((500 - 300)/500) ×100 = 40%.",
  },

  {
    id: 5,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "Tablet sales are what percentage of total sales?",

    options: [
      "20%",
      "23.07%",
      "25%",
      "30%",
    ],

    answer: "23.07%",

    explanation:
      "150 / 650 ×100 = 23.07%.",
  },

  {
    id: 6,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "Temperature increased by what percentage from Jan to Feb?",

    options: [
      "15%",
      "18%",
      "20%",
      "25%",
    ],

    answer: "20%",

    explanation:
      "((24 - 20)/20) ×100 = 20%.",
  },

  {
    id: 7,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "CSE students are what percent more than ECE students?",

    options: [
      "100%",
      "110%",
      "125%",
      "130%",
    ],

    answer: "125%",

    explanation:
      "CSE=180, ECE=80, ((180-80)/80)×100 =125%.",
  },

  {
    id: 8,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "Profit as percentage of revenue in Q2 is?",

    options: [
      "20%",
      "22%",
      "24%",
      "25%",
    ],

    answer: "24%",

    explanation:
      "60/250 ×100 = 24%.",
  },

  {
    id: 9,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "How many more boys than girls were there in 2022?",

    options: [
      "100",
      "110",
      "120",
      "130",
    ],

    answer: "120",

    explanation:
      "Boys=360, Girls=240, difference=120.",
  },

  {
    id: 10,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "hard",

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
      "Employee B salary is what percent more than Employee A salary?",

    options: [
      "40%",
      "45%",
      "50%",
      "55%",
    ],

    answer: "50%",

    explanation:
      "((45000 - 30000)/30000) ×100 = 50%.",
  },
];

export default mixedGraphsHard;