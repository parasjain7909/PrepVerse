/* tableHard.js */

const tableHard = [
  {
    id: 1,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Students Marks Analysis",

    tableData: [
      { student: "Rahul", math: 78, science: 82, english: 74 },
      { student: "Aman", math: 88, science: 76, english: 90 },
      { student: "Priya", math: 92, science: 90, english: 95 },
      { student: "Neha", math: 85, science: 80, english: 88 },
    ],

    question:
      "What is Priya's average marks across all subjects?",

    options: [
      "90",
      "91",
      "92.3",
      "93",
    ],

    answer: "92.3",

    explanation:
      "(92 + 90 + 95) / 3 = 92.3.",
  },

  {
    id: 2,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Company Employees",

    tableData: [
      { department: "HR", employees: 25 },
      { department: "IT", employees: 60 },
      { department: "Sales", employees: 45 },
      { department: "Finance", employees: 30 },
    ],

    question:
      "IT employees are what percentage of total employees?",

    options: [
      "35%",
      "37.5%",
      "40%",
      "42%",
    ],

    answer: "37.5%",

    explanation:
      "60 / 160 × 100 = 37.5%.",
  },

  {
    id: 3,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Monthly Sales",

    tableData: [
      { month: "Jan", sales: 220 },
      { month: "Feb", sales: 260 },
      { month: "Mar", sales: 310 },
      { month: "Apr", sales: 290 },
    ],

    question:
      "What is the percentage increase from Jan to Mar?",

    options: [
      "35%",
      "38%",
      "40.9%",
      "45%",
    ],

    answer: "40.9%",

    explanation:
      "((310 - 220) / 220) × 100 = 40.9%.",
  },

  {
    id: 4,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Books Read",

    tableData: [
      { student: "Rahul", books: 12 },
      { student: "Aman", books: 18 },
      { student: "Priya", books: 15 },
      { student: "Neha", books: 25 },
    ],

    question:
      "Neha read what percentage more books than Rahul?",

    options: [
      "90%",
      "100%",
      "108.3%",
      "120%",
    ],

    answer: "108.3%",

    explanation:
      "((25 - 12) / 12) × 100 = 108.3%.",
  },

  {
    id: 5,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Laptop Sales",

    tableData: [
      { brand: "Dell", sales: 320 },
      { brand: "HP", sales: 480 },
      { brand: "Lenovo", sales: 280 },
      { brand: "Asus", sales: 420 },
    ],

    question:
      "What percentage of total sales belong to HP?",

    options: [
      "30%",
      "32%",
      "34%",
      "36%",
    ],

    answer: "32%",

    explanation:
      "480 / 1500 × 100 = 32%.",
  },

  {
    id: 6,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Sports Participation",

    tableData: [
      { sport: "Cricket", players: 200 },
      { sport: "Football", players: 140 },
      { sport: "Basketball", players: 100 },
      { sport: "Volleyball", players: 60 },
    ],

    question:
      "Cricket participation is what percentage more than Volleyball?",

    options: [
      "200%",
      "220%",
      "233.3%",
      "250%",
    ],

    answer: "233.3%",

    explanation:
      "((200 - 60) / 60) × 100 = 233.3%.",
  },

  {
    id: 7,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Daily Earnings",

    tableData: [
      { day: "Mon", earning: 5200 },
      { day: "Tue", earning: 6400 },
      { day: "Wed", earning: 5800 },
      { day: "Thu", earning: 7100 },
    ],

    question:
      "What is the percentage increase from Monday to Thursday?",

    options: [
      "30%",
      "34%",
      "36.5%",
      "40%",
    ],

    answer: "36.5%",

    explanation:
      "((7100 - 5200) / 5200) × 100 = 36.5%.",
  },

  {
    id: 8,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Electricity Consumption",

    tableData: [
      { house: "A", units: 420 },
      { house: "B", units: 520 },
      { house: "C", units: 380 },
      { house: "D", units: 680 },
    ],

    question:
      "House D consumed what percentage more electricity than House C?",

    options: [
      "70%",
      "75%",
      "78.9%",
      "80%",
    ],

    answer: "78.9%",

    explanation:
      "((680 - 380) / 380) × 100 = 78.9%.",
  },

  {
    id: 9,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Movie Ticket Sales",

    tableData: [
      { show: "Morning", tickets: 220 },
      { show: "Afternoon", tickets: 420 },
      { show: "Evening", tickets: 620 },
      { show: "Night", tickets: 510 },
    ],

    question:
      "What percentage of total tickets were sold during Evening show?",

    options: [
      "32%",
      "35%",
      "37%",
      "40%",
    ],

    answer: "35%",

    explanation:
      "620 / 1770 × 100 ≈ 35%.",
  },

  {
    id: 10,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Online Course Enrollments",

    tableData: [
      { course: "Web Dev", students: 450 },
      { course: "AI", students: 620 },
      { course: "Cloud", students: 380 },
      { course: "Cyber Security", students: 500 },
    ],

    question:
      "What is the ratio of AI students to total students?",

    options: [
      "31:100",
      "32:100",
      "33:100",
      "34:100",
    ],

    answer: "31:100",

    explanation:
      "620 : 1950 ≈ 31 : 100.",
  },

  {
    id: 11,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Rainfall Data",

    tableData: [
      { city: "Delhi", rainfall: 25 },
      { city: "Mumbai", rainfall: 45 },
      { city: "Chennai", rainfall: 35 },
      { city: "Kolkata", rainfall: 30 },
    ],

    question:
      "Mumbai rainfall is what percentage more than Delhi rainfall?",

    options: [
      "70%",
      "75%",
      "80%",
      "85%",
    ],

    answer: "80%",

    explanation:
      "((45 - 25) / 25) × 100 = 80%.",
  },

  {
    id: 12,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Library Visitors",

    tableData: [
      { day: "Monday", visitors: 180 },
      { day: "Tuesday", visitors: 240 },
      { day: "Wednesday", visitors: 300 },
      { day: "Thursday", visitors: 360 },
    ],

    question:
      "What is the average increase in visitors per day?",

    options: [
      "50",
      "55",
      "60",
      "65",
    ],

    answer: "60",

    explanation:
      "(60 + 60 + 60) / 3 = 60.",
  },

  {
    id: 13,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Cars Sold",

    tableData: [
      { company: "Honda", cars: 350 },
      { company: "Hyundai", cars: 420 },
      { company: "Tata", cars: 500 },
      { company: "Mahindra", cars: 280 },
    ],

    question:
      "What percentage of total cars were sold by Tata?",

    options: [
      "30%",
      "31%",
      "32.2%",
      "34%",
    ],

    answer: "32.2%",

    explanation:
      "500 / 1550 × 100 = 32.2%.",
  },

  {
    id: 14,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Water Consumption",

    tableData: [
      { activity: "Drinking", liters: 150 },
      { activity: "Bathing", liters: 420 },
      { activity: "Cleaning", liters: 310 },
      { activity: "Cooking", liters: 120 },
    ],

    question:
      "Bathing consumes how many times more water than Cooking?",

    options: [
      "3",
      "3.2",
      "3.5",
      "4",
    ],

    answer: "3.5",

    explanation:
      "420 / 120 = 3.5.",
  },

  {
    id: 15,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Exam Scores",

    tableData: [
      { student: "Rahul", marks: 78 },
      { student: "Aman", marks: 88 },
      { student: "Priya", marks: 96 },
      { student: "Neha", marks: 92 },
    ],

    question:
      "What is the difference between highest and lowest marks?",

    options: [
      "16",
      "18",
      "20",
      "22",
    ],

    answer: "18",

    explanation:
      "96 - 78 = 18.",
  },

  {
    id: 16,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Social Media Users",

    tableData: [
      { app: "Instagram", users: 850 },
      { app: "YouTube", users: 1200 },
      { app: "Facebook", users: 600 },
      { app: "Twitter", users: 350 },
    ],

    question:
      "What percentage of total users use Facebook?",

    options: [
      "18%",
      "20%",
      "22%",
      "24%",
    ],

    answer: "20%",

    explanation:
      "600 / 3000 × 100 = 20%.",
  },

  {
    id: 17,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Factory Workers",

    tableData: [
      { department: "Assembly", workers: 180 },
      { department: "Packing", workers: 120 },
      { department: "Quality", workers: 90 },
      { department: "Maintenance", workers: 60 },
    ],

    question:
      "Assembly workers are what percentage of total workers?",

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

    difficulty: "hard",

    title:
      "Company Profits",

    tableData: [
      { year: "2019", profit: 15 },
      { year: "2020", profit: 22 },
      { year: "2021", profit: 35 },
      { year: "2022", profit: 50 },
    ],

    question:
      "What is the total increase in profit from 2019 to 2022?",

    options: [
      "30",
      "32",
      "35",
      "38",
    ],

    answer: "35",

    explanation:
      "50 - 15 = 35.",
  },

  {
    id: 19,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Mobile Sales",

    tableData: [
      { brand: "Samsung", sales: 320 },
      { brand: "Apple", sales: 280 },
      { brand: "Xiaomi", sales: 420 },
      { brand: "Vivo", sales: 350 },
    ],

    question:
      "What percentage of total mobile sales belong to Xiaomi?",

    options: [
      "28%",
      "30.7%",
      "32%",
      "34%",
    ],

    answer: "30.7%",

    explanation:
      "420 / 1370 × 100 = 30.7%.",
  },

  {
    id: 20,

    type: "table",

    topic: "Tables",

    difficulty: "hard",

    title:
      "Students Attendance",

    tableData: [
      { day: "Mon", attendance: 60 },
      { day: "Tue", attendance: 72 },
      { day: "Wed", attendance: 84 },
      { day: "Thu", attendance: 96 },
    ],

    question:
      "What is the percentage increase in attendance from Monday to Thursday?",

    options: [
      "50%",
      "55%",
      "60%",
      "65%",
    ],

    answer: "60%",

    explanation:
      "((96 - 60) / 60) × 100 = 60%.",
  },
];

export default tableHard;