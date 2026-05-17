/* tableMedium.js */

const tableMedium = [
  {
    id: 1,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Students Marks",

    tableData: [
      { student: "Rahul", math: 78, science: 82 },
      { student: "Aman", math: 88, science: 76 },
      { student: "Priya", math: 92, science: 90 },
      { student: "Neha", math: 85, science: 80 },
    ],

    question:
      "What is the average Math marks of all students?",

    options: [
      "84",
      "85.75",
      "86",
      "87",
    ],

    answer: "85.75",

    explanation:
      "(78 + 88 + 92 + 85) / 4 = 85.75.",
  },

  {
    id: 2,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Company Employees",

    tableData: [
      { department: "HR", employees: 25 },
      { department: "IT", employees: 60 },
      { department: "Sales", employees: 45 },
      { department: "Finance", employees: 30 },
    ],

    question:
      "How many more employees are there in IT than HR?",

    options: [
      "30",
      "35",
      "40",
      "45",
    ],

    answer: "35",

    explanation:
      "60 - 25 = 35.",
  },

  {
    id: 3,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Monthly Sales",

    tableData: [
      { month: "Jan", sales: 120 },
      { month: "Feb", sales: 150 },
      { month: "Mar", sales: 180 },
      { month: "Apr", sales: 160 },
    ],

    question:
      "What is the total sales from Jan to Apr?",

    options: [
      "580",
      "600",
      "610",
      "620",
    ],

    answer: "610",

    explanation:
      "120 + 150 + 180 + 160 = 610.",
  },

  {
    id: 4,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Books Read",

    tableData: [
      { student: "Rahul", books: 5 },
      { student: "Aman", books: 8 },
      { student: "Priya", books: 6 },
      { student: "Neha", books: 10 },
    ],

    question:
      "What is the total number of books read?",

    options: [
      "25",
      "27",
      "29",
      "31",
    ],

    answer: "29",

    explanation:
      "5 + 8 + 6 + 10 = 29.",
  },

  {
    id: 5,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Laptop Sales",

    tableData: [
      { brand: "Dell", sales: 220 },
      { brand: "HP", sales: 300 },
      { brand: "Lenovo", sales: 180 },
      { brand: "Asus", sales: 250 },
    ],

    question:
      "What is the average laptop sales?",

    options: [
      "230",
      "237.5",
      "240",
      "245",
    ],

    answer: "237.5",

    explanation:
      "(220 + 300 + 180 + 250) / 4 = 237.5.",
  },

  {
    id: 6,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Sports Participation",

    tableData: [
      { sport: "Cricket", players: 60 },
      { sport: "Football", players: 45 },
      { sport: "Basketball", players: 35 },
      { sport: "Volleyball", players: 25 },
    ],

    question:
      "What percentage of total players participated in Cricket?",

    options: [
      "35%",
      "36.36%",
      "38%",
      "40%",
    ],

    answer: "36.36%",

    explanation:
      "60 / 165 × 100 = 36.36%.",
  },

  {
    id: 7,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Daily Earnings",

    tableData: [
      { day: "Mon", earning: 2500 },
      { day: "Tue", earning: 3000 },
      { day: "Wed", earning: 2800 },
      { day: "Thu", earning: 3200 },
    ],

    question:
      "What is the average earning per day?",

    options: [
      "2800",
      "2850",
      "2875",
      "2900",
    ],

    answer: "2875",

    explanation:
      "(2500 + 3000 + 2800 + 3200) / 4 = 2875.",
  },

  {
    id: 8,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Electricity Consumption",

    tableData: [
      { house: "A", units: 120 },
      { house: "B", units: 150 },
      { house: "C", units: 100 },
      { house: "D", units: 130 },
    ],

    question:
      "How many total units were consumed?",

    options: [
      "450",
      "480",
      "500",
      "520",
    ],

    answer: "500",

    explanation:
      "120 + 150 + 100 + 130 = 500.",
  },

  {
    id: 9,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Movie Ticket Sales",

    tableData: [
      { show: "Morning", tickets: 120 },
      { show: "Afternoon", tickets: 180 },
      { show: "Evening", tickets: 250 },
      { show: "Night", tickets: 200 },
    ],

    question:
      "What is the difference between highest and lowest ticket sales?",

    options: [
      "110",
      "120",
      "130",
      "140",
    ],

    answer: "130",

    explanation:
      "250 - 120 = 130.",
  },

  {
    id: 10,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Online Course Enrollments",

    tableData: [
      { course: "Web Dev", students: 120 },
      { course: "AI", students: 150 },
      { course: "Cloud", students: 100 },
      { course: "Cyber Security", students: 90 },
    ],

    question:
      "How many students enrolled in AI and Web Dev together?",

    options: [
      "240",
      "250",
      "260",
      "270",
    ],

    answer: "270",

    explanation:
      "150 + 120 = 270.",
  },

  {
    id: 11,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Rainfall Data",

    tableData: [
      { city: "Delhi", rainfall: 20 },
      { city: "Mumbai", rainfall: 40 },
      { city: "Chennai", rainfall: 35 },
      { city: "Kolkata", rainfall: 25 },
    ],

    question:
      "What is the average rainfall?",

    options: [
      "28",
      "30",
      "32.5",
      "35",
    ],

    answer: "30",

    explanation:
      "(20 + 40 + 35 + 25) / 4 = 30.",
  },

  {
    id: 12,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Library Visitors",

    tableData: [
      { day: "Monday", visitors: 80 },
      { day: "Tuesday", visitors: 100 },
      { day: "Wednesday", visitors: 120 },
      { day: "Thursday", visitors: 140 },
    ],

    question:
      "How many more visitors came on Thursday than Monday?",

    options: [
      "40",
      "50",
      "60",
      "70",
    ],

    answer: "60",

    explanation:
      "140 - 80 = 60.",
  },

  {
    id: 13,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Cars Sold",

    tableData: [
      { company: "Honda", cars: 120 },
      { company: "Hyundai", cars: 150 },
      { company: "Tata", cars: 180 },
      { company: "Mahindra", cars: 110 },
    ],

    question:
      "What is the average number of cars sold?",

    options: [
      "130",
      "135",
      "140",
      "145",
    ],

    answer: "140",

    explanation:
      "(120 + 150 + 180 + 110) / 4 = 140.",
  },

  {
    id: 14,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Water Consumption",

    tableData: [
      { activity: "Drinking", liters: 100 },
      { activity: "Bathing", liters: 300 },
      { activity: "Cleaning", liters: 200 },
      { activity: "Cooking", liters: 80 },
    ],

    question:
      "What percentage of total water is used for Bathing?",

    options: [
      "40%",
      "42.2%",
      "44%",
      "46%",
    ],

    answer: "44%",

    explanation:
      "300 / 680 × 100 ≈ 44%.",
  },

  {
    id: 15,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Exam Scores",

    tableData: [
      { student: "Rahul", marks: 78 },
      { student: "Aman", marks: 88 },
      { student: "Priya", marks: 96 },
      { student: "Neha", marks: 92 },
    ],

    question:
      "What is the average score?",

    options: [
      "86",
      "87.5",
      "88.5",
      "89",
    ],

    answer: "88.5",

    explanation:
      "(78 + 88 + 96 + 92) / 4 = 88.5.",
  },

  {
    id: 16,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Social Media Users",

    tableData: [
      { app: "Instagram", users: 350 },
      { app: "YouTube", users: 500 },
      { app: "Facebook", users: 200 },
      { app: "Twitter", users: 150 },
    ],

    question:
      "How many total users are there?",

    options: [
      "1100",
      "1150",
      "1200",
      "1250",
    ],

    answer: "1200",

    explanation:
      "350 + 500 + 200 + 150 = 1200.",
  },

  {
    id: 17,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Factory Workers",

    tableData: [
      { department: "Assembly", workers: 180 },
      { department: "Packing", workers: 120 },
      { department: "Quality", workers: 90 },
      { department: "Maintenance", workers: 60 },
    ],

    question:
      "What percentage of workers are in Assembly?",

    options: [
      "35%",
      "38%",
      "40%",
      "42%",
    ],

    answer: "40%",

    explanation:
      "180 / 450 × 100 = 40%.",
  },

  {
    id: 18,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Company Profits",

    tableData: [
      { year: "2019", profit: 12 },
      { year: "2020", profit: 18 },
      { year: "2021", profit: 15 },
      { year: "2022", profit: 25 },
    ],

    question:
      "What is the total profit earned?",

    options: [
      "65",
      "68",
      "70",
      "72",
    ],

    answer: "70",

    explanation:
      "12 + 18 + 15 + 25 = 70.",
  },

  {
    id: 19,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Mobile Sales",

    tableData: [
      { brand: "Samsung", sales: 220 },
      { brand: "Apple", sales: 180 },
      { brand: "Xiaomi", sales: 260 },
      { brand: "Vivo", sales: 200 },
    ],

    question:
      "What is the difference between highest and lowest sales?",

    options: [
      "60",
      "70",
      "80",
      "90",
    ],

    answer: "80",

    explanation:
      "260 - 180 = 80.",
  },

  {
    id: 20,

    type: "table",

    topic: "Tables",

    difficulty: "medium",

    title:
      "Students Attendance",

    tableData: [
      { day: "Mon", attendance: 40 },
      { day: "Tue", attendance: 45 },
      { day: "Wed", attendance: 50 },
      { day: "Thu", attendance: 55 },
    ],

    question:
      "What is the average attendance?",

    options: [
      "45",
      "46",
      "47.5",
      "48",
    ],

    answer: "47.5",

    explanation:
      "(40 + 45 + 50 + 55) / 4 = 47.5.",
  },
];

export default tableMedium;