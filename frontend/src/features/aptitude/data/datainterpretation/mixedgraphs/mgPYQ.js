/* mixedGraphsPYQ.js */

const mixedGraphsPYQ = [
  {
    id: 1,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "TCS NQT 2024",

    data: {
      bar: [
        { year: "2021", sales: 150 },
        { year: "2022", sales: 220 },
      ],

      line: [
        { year: "2021", profit: 50 },
        { year: "2022", profit: 80 },
      ],
    },

    question:
      "In which year was sales maximum?",

    options: [
      "2021",
      "2022",
      "Both Same",
      "None",
    ],

    answer: "2022",

    explanation:
      "Sales in 2022 = 220.",
  },

  {
    id: 2,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Infosys 2023",

    data: {
      pie: [
        { category: "Food", value: 50 },
        { category: "Rent", value: 30 },
        { category: "Travel", value: 20 },
      ],

      table: [
        { totalExpense: 30000 },
      ],
    },

    question:
      "How much money was spent on Rent?",

    options: [
      "7000",
      "8000",
      "9000",
      "10000",
    ],

    answer: "9000",

    explanation:
      "30% of 30000 = 9000.",
  },

  {
    id: 3,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Wipro Elite NLTH 2024",

    data: {
      bar: [
        { city: "Delhi", population: 140 },
        { city: "Mumbai", population: 180 },
      ],

      line: [
        { city: "Delhi", literacy: 82 },
        { city: "Mumbai", literacy: 88 },
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
      "Mumbai literacy = 88%.",
  },

  {
    id: 4,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Accenture 2024",

    data: {
      pie: [
        { sport: "Cricket", value: 45 },
        { sport: "Football", value: 35 },
        { sport: "Basketball", value: 20 },
      ],

      line: [
        { year: "2024", viewers: 2000 },
      ],
    },

    question:
      "How many viewers prefer Cricket?",

    options: [
      "800",
      "900",
      "1000",
      "1100",
    ],

    answer: "900",

    explanation:
      "45% of 2000 = 900.",
  },

  {
    id: 5,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Capgemini 2023",

    data: {
      table: [
        { product: "Mobile", sales: 400 },
        { product: "Laptop", sales: 300 },
      ],

      bar: [
        { product: "Tablet", sales: 200 },
      ],
    },

    question:
      "What is the total product sales?",

    options: [
      "800",
      "850",
      "900",
      "950",
    ],

    answer: "900",

    explanation:
      "400 + 300 + 200 = 900.",
  },

  {
    id: 6,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "IBM 2024",

    data: {
      line: [
        { month: "Jan", temp: 18 },
        { month: "Feb", temp: 24 },
      ],

      bar: [
        { month: "Jan", rainfall: 12 },
        { month: "Feb", rainfall: 18 },
      ],
    },

    question:
      "What is the increase in rainfall from Jan to Feb?",

    options: [
      "4",
      "5",
      "6",
      "7",
    ],

    answer: "6",

    explanation:
      "18 - 12 = 6.",
  },

  {
    id: 7,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Cognizant 2024",

    data: {
      pie: [
        { branch: "CSE", value: 50 },
        { branch: "IT", value: 30 },
        { branch: "ECE", value: 20 },
      ],

      table: [
        { totalStudents: 500 },
      ],
    },

    question:
      "How many students belong to CSE?",

    options: [
      "200",
      "225",
      "250",
      "275",
    ],

    answer: "250",

    explanation:
      "50% of 500 = 250.",
  },

  {
    id: 8,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Deloitte 2023",

    data: {
      bar: [
        { quarter: "Q1", revenue: 300 },
        { quarter: "Q2", revenue: 450 },
      ],

      line: [
        { quarter: "Q1", profit: 60 },
        { quarter: "Q2", profit: 90 },
      ],
    },

    question:
      "Which quarter has maximum revenue?",

    options: [
      "Q1",
      "Q2",
      "Both Same",
      "None",
    ],

    answer: "Q2",

    explanation:
      "Q2 revenue = 450.",
  },

  {
    id: 9,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "HCL 2024",

    data: {
      line: [
        { year: "2021", students: 700 },
        { year: "2022", students: 900 },
      ],

      pie: [
        { category: "Boys", value: 55 },
        { category: "Girls", value: 45 },
      ],
    },

    question:
      "How many girls were there in 2022?",

    options: [
      "350",
      "380",
      "405",
      "420",
    ],

    answer: "405",

    explanation:
      "45% of 900 = 405.",
  },

  {
    id: 10,

    type: "mixedgraph",

    topic: "Mixed Graphs",

    difficulty: "pyq",

    company: "Tech Mahindra 2024",

    data: {
      table: [
        { employee: "A", salary: 35000 },
        { employee: "B", salary: 50000 },
      ],

      bar: [
        { employee: "C", salary: 45000 },
      ],
    },

    question:
      "Who has maximum salary?",

    options: [
      "A",
      "B",
      "C",
      "None",
    ],

    answer: "B",

    explanation:
      "Employee B salary = ₹50000.",
  },
];

export default mixedGraphsPYQ;