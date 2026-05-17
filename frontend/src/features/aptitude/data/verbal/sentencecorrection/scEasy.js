/* sentenceCorrectionEasy.js */

const sentenceCorrectionEasy = [
  {
    id: 1,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "She do not like coffee.",

    options: [
      "She do not likes coffee",
      "She does not like coffee",
      "She not likes coffee",
      "She does not likes coffee",
    ],

    answer:
      "She does not like coffee",

    explanation:
      "Singular subject 'She' takes 'does not'.",
  },

  {
    id: 2,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "He have completed his work.",

    options: [
      "He has completed his work",
      "He had completed his work",
      "He have complete his work",
      "He completed his worked",
    ],

    answer:
      "He has completed his work",

    explanation:
      "'He' is singular, so use 'has'.",
  },

  {
    id: 3,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "The boys was playing football.",

    options: [
      "The boys were playing football",
      "The boys is playing football",
      "The boys has playing football",
      "The boys playing football",
    ],

    answer:
      "The boys were playing football",

    explanation:
      "'Boys' is plural, so use 'were'.",
  },

  {
    id: 4,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "Rita and Sita is friends.",

    options: [
      "Rita and Sita are friends",
      "Rita and Sita was friends",
      "Rita and Sita be friends",
      "Rita and Sita has friends",
    ],

    answer:
      "Rita and Sita are friends",

    explanation:
      "Two subjects joined by 'and' take plural verb.",
  },

  {
    id: 5,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "I am going to market yesterday.",

    options: [
      "I went to market yesterday",
      "I go to market yesterday",
      "I going to market yesterday",
      "I was go to market yesterday",
    ],

    answer:
      "I went to market yesterday",

    explanation:
      "Use past tense 'went' for yesterday.",
  },

  {
    id: 6,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "She can sings very well.",

    options: [
      "She can sing very well",
      "She can sang very well",
      "She can singing very well",
      "She can sung very well",
    ],

    answer:
      "She can sing very well",

    explanation:
      "After modal verbs, base form of verb is used.",
  },

  {
    id: 7,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "They has finished the project.",

    options: [
      "They have finished the project",
      "They having finished the project",
      "They finisheded the project",
      "They is finished the project",
    ],

    answer:
      "They have finished the project",

    explanation:
      "'They' takes 'have'.",
  },

  {
    id: 8,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "Rahul do his homework daily.",

    options: [
      "Rahul does his homework daily",
      "Rahul doing his homework daily",
      "Rahul did his homework daily",
      "Rahul have homework daily",
    ],

    answer:
      "Rahul does his homework daily",

    explanation:
      "Singular subject requires 'does'.",
  },

  {
    id: 9,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "The sun rise in the east.",

    options: [
      "The sun rises in the east",
      "The sun rising in the east",
      "The sun rose in east",
      "The sun rise at east",
    ],

    answer:
      "The sun rises in the east",

    explanation:
      "Universal truths use simple present tense.",
  },

  {
    id: 10,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "My friend are very honest.",

    options: [
      "My friend is very honest",
      "My friend were very honest",
      "My friend be honest",
      "My friend have honest",
    ],

    answer:
      "My friend is very honest",

    explanation:
      "Singular noun 'friend' takes 'is'.",
  },

  {
    id: 11,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "We was waiting for the bus.",

    options: [
      "We were waiting for the bus",
      "We are waiting for the bus",
      "We waiting for the bus",
      "We have waiting for the bus",
    ],

    answer:
      "We were waiting for the bus",

    explanation:
      "'We' takes 'were'.",
  },

  {
    id: 12,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "She is more smarter than me.",

    options: [
      "She is smarter than me",
      "She smarter than me",
      "She is smart than me",
      "She more smart than me",
    ],

    answer:
      "She is smarter than me",

    explanation:
      "Do not use double comparison.",
  },

  {
    id: 13,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "He don't play cricket.",

    options: [
      "He doesn't play cricket",
      "He not play cricket",
      "He doesn't plays cricket",
      "He do not cricket",
    ],

    answer:
      "He doesn't play cricket",

    explanation:
      "'He' takes 'doesn't'.",
  },

  {
    id: 14,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "I have seen him yesterday.",

    options: [
      "I saw him yesterday",
      "I seeing him yesterday",
      "I seen him yesterday",
      "I had saw him yesterday",
    ],

    answer:
      "I saw him yesterday",

    explanation:
      "Specific past time uses simple past.",
  },

  {
    id: 15,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "Each student have a notebook.",

    options: [
      "Each student has a notebook",
      "Each student having notebook",
      "Each students have notebook",
      "Each student are notebook",
    ],

    answer:
      "Each student has a notebook",

    explanation:
      "'Each' is singular.",
  },

  {
    id: 16,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "There is many books on the table.",

    options: [
      "There are many books on the table",
      "There many books on table",
      "There was many books on table",
      "There be many books",
    ],

    answer:
      "There are many books on the table",

    explanation:
      "'Books' is plural so use 'are'.",
  },

  {
    id: 17,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "She did not went to school.",

    options: [
      "She did not go to school",
      "She did not goes to school",
      "She not went to school",
      "She didn't going school",
    ],

    answer:
      "She did not go to school",

    explanation:
      "After 'did not', use base verb.",
  },

  {
    id: 18,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "Neither of the boys are absent.",

    options: [
      "Neither of the boys is absent",
      "Neither boys are absent",
      "Neither boys absent",
      "Neither of boys were absent",
    ],

    answer:
      "Neither of the boys is absent",

    explanation:
      "'Neither' is singular.",
  },

  {
    id: 19,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "The teacher gave us many advices.",

    options: [
      "The teacher gave us much advice",
      "The teacher gave us many advice",
      "The teacher gave advice us",
      "The teacher advices us many",
    ],

    answer:
      "The teacher gave us much advice",

    explanation:
      "'Advice' is uncountable.",
  },

  {
    id: 20,
    topic: "Sentence Correction",
    difficulty: "easy",

    question:
      "This book is differ from that.",

    options: [
      "This book is different from that",
      "This book differ from that",
      "This book different than that",
      "This book differing from that",
    ],

    answer:
      "This book is different from that",

    explanation:
      "Correct phrase is 'different from'.",
  },
];

export default sentenceCorrectionEasy;