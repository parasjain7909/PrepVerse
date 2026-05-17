/* src/services/quiz.ai.js */

const Groq =
  require("groq-sdk");

const groq =
  new Groq({
    apiKey:
      process.env.GROQ_API_KEY,
  });

const generateQuiz =
  async (
    topic,
    difficulty
  ) => {
    const prompt = `
You are an expert aptitude and placement test creator.

Generate 10 HIGH-QUALITY aptitude MCQ questions.

Topic: ${topic}

Difficulty: ${difficulty}

VERY IMPORTANT RULES:
- Questions must be logically correct
- Answers must be 100% accurate
- Only ONE option should be correct
- Options must be realistic and meaningful
- Avoid repeated questions
- Avoid vague wording
- Questions should look like real placement aptitude tests
- Use professional aptitude reasoning
- Ensure answer matches the question correctly
- Keep language clear and concise

For logical reasoning topics:
- Make relationship logic accurate
- Make analogy logic meaningful
- Make coding-decoding patterns valid

For quantitative aptitude:
- Use mathematically correct calculations
- Verify percentages, averages, ratios, profit-loss carefully

Return ONLY valid JSON array.

FORMAT:
[
  {
    "question": "Question here",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "answer": "Correct Option",
    "explanation": "Short explanation"
  }
]

DO NOT:
- Return markdown
- Return extra text
- Return invalid JSON
- Return duplicate questions
`;

    const completion =
      await groq.chat.completions.create({
        model:
          "llama-3.1-8b-instant",

        messages: [
          {
            role: "user",

            content:
              prompt,
          },
        ],

        temperature:
          0.4,
      });

    const raw =
      completion.choices[0]
        .message.content;

    const cleaned =
      raw
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    try {
      const parsed =
        JSON.parse(cleaned);

      const validQuiz =
        parsed.filter(
          q =>
            q.question &&
            q.options &&
            Array.isArray(
              q.options
            ) &&
            q.options.length ===
              4 &&
            q.answer
        );

      return validQuiz;
    }

    catch (error) {
      console.log(
        "Invalid JSON:",
        cleaned
      );

      return [];
    }
  };

module.exports = {
  generateQuiz,
};