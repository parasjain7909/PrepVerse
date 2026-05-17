/* profitLossHard.js */

const profitLossHard = [
  {
    id: 1,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "TCS Digital",
    question:
      "A trader marks goods 50% above cost price and gives 20% discount. Find profit percentage.",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    explanation:
      "1.5 × 0.8 = 1.2 → 20% profit",
  },

  {
    id: 2,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Infosys",
    question:
      "An article is sold at 10% loss. Had it been sold for ₹180 more, there would have been 5% profit. Find CP.",
    options: ["₹1000", "₹1200", "₹1400", "₹1500"],
    answer: "₹1200",
    explanation:
      "Difference = 15% = 180 → CP = 1200",
  },

  {
    id: 3,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Wipro",
    question:
      "A trader gives two successive discounts of 20% and 10%. Equivalent discount?",
    options: ["26%", "27%", "28%", "30%"],
    answer: "28%",
    explanation:
      "1 - (0.8 × 0.9) = 28%",
  },

  {
    id: 4,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Accenture",
    question:
      "A seller marks goods 25% above CP and allows 10% discount. Profit percentage?",
    options: ["10%", "11.5%", "12.5%", "15%"],
    answer: "12.5%",
    explanation:
      "1.25 × 0.9 = 1.125",
  },

  {
    id: 5,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "A man sells an article at 20% profit. If he had bought it at 10% less and sold for ₹60 less, he would gain 25%. Find CP.",
    options: ["₹200", "₹240", "₹300", "₹360"],
    answer: "₹240",
    explanation:
      "Use equation method.",
  },

  {
    id: 6,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "IBM",
    question:
      "A retailer gains 15% after giving 10% discount on marked price. If CP = ₹2000, find MP.",
    options: ["₹2400", "₹2500", "₹2555.55", "₹2600"],
    answer: "₹2555.55",
    explanation:
      "SP = 2300. MP = 2300 × 100 / 90",
  },

  {
    id: 7,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "TCS",
    question:
      "An item is sold at 25% profit. If the cost price increases by 20% and selling price remains same, profit percentage becomes?",
    options: ["2%", "4.16%", "5%", "6%"],
    answer: "4.16%",
    explanation:
      "Use assumed CP = 100",
  },

  {
    id: 8,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Infosys",
    question:
      "A trader sells two articles for ₹500 each. On one he gains 20%, on other loses 20%. Overall result?",
    options: [
      "No profit no loss",
      "4% loss",
      "5% loss",
      "6% loss",
    ],
    answer: "4% loss",
    explanation:
      "Use formula: loss = (20²/100)%",
  },

  {
    id: 9,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Wipro",
    question:
      "A trader marks goods 60% above CP and gives 25% discount. Profit percentage?",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    explanation:
      "1.6 × 0.75 = 1.2",
  },

  {
    id: 10,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Accenture",
    question:
      "Selling price of 20 articles equals CP of 25 articles. Loss percentage?",
    options: ["15%", "18%", "20%", "25%"],
    answer: "20%",
    explanation:
      "SP/CP = 20/25 = 0.8",
  },

  {
    id: 11,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "A seller allows 20% discount and still gains 20%. If MP = ₹2400, find CP.",
    options: ["₹1400", "₹1500", "₹1600", "₹1700"],
    answer: "₹1600",
    explanation:
      "SP = 1920. CP = 1920/1.2",
  },

  {
    id: 12,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "IBM",
    question:
      "A trader gains 25% by selling for ₹5000. If CP increases by 20%, what should be new SP for same profit percentage?",
    options: ["₹6000", "₹6250", "₹6500", "₹7000"],
    answer: "₹6000",
    explanation:
      "New CP = 4800. SP = 4800 × 1.25",
  },

  {
    id: 13,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "TCS Digital",
    question:
      "A retailer gives three successive discounts 10%, 20%, 10%. Equivalent discount?",
    options: ["32%", "35%", "36%", "38%"],
    answer: "35.2%",
    explanation:
      "1 - (0.9 × 0.8 × 0.9)",
  },

  {
    id: 14,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Infosys",
    question:
      "A man sells a product at 10% loss. Had he sold it for ₹120 more, he would gain 10%. Find CP.",
    options: ["₹500", "₹600", "₹700", "₹800"],
    answer: "₹600",
    explanation:
      "20% = 120 → CP = 600",
  },

  {
    id: 15,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Wipro",
    question:
      "Cost price of 15 articles equals SP of 12 articles. Profit percentage?",
    options: ["20%", "25%", "30%", "35%"],
    answer: "25%",
    explanation:
      "SP/CP = 15/12",
  },

  {
    id: 16,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Accenture",
    question:
      "A trader sells an item at 30% profit. If SP increases by ₹390, profit becomes 50%. Find CP.",
    options: ["₹1800", "₹1900", "₹1950", "₹2000"],
    answer: "₹1950",
    explanation:
      "20% = 390",
  },

  {
    id: 17,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Capgemini",
    question:
      "A product sold at ₹2400 gives 20% loss. At what price should it be sold for 25% profit?",
    options: ["₹3500", "₹3600", "₹3700", "₹3750"],
    answer: "₹3750",
    explanation:
      "CP = 3000. New SP = 3750",
  },

  {
    id: 18,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "IBM",
    question:
      "A trader gains 10% after giving 20% discount. Find marked price if CP = ₹900.",
    options: ["₹1200", "₹1237.5", "₹1250", "₹1300"],
    answer: "₹1237.5",
    explanation:
      "SP = 990. MP = 990 × 100 / 80",
  },

  {
    id: 19,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "TCS",
    question:
      "A seller loses 10% by selling an article for ₹720. Find gain percentage if sold for ₹880.",
    options: ["8%", "10%", "12%", "15%"],
    answer: "10%",
    explanation:
      "CP = 800. Profit = 80",
  },

  {
    id: 20,
    topic: "Profit & Loss",
    difficulty: "hard",
    company: "Infosys",
    question:
      "A trader marks goods 40% above CP and allows 15% discount. Profit percentage?",
    options: ["15%", "18%", "19%", "20%"],
    answer: "19%",
    explanation:
      "1.4 × 0.85 = 1.19",
  },
];

export default profitLossHard;