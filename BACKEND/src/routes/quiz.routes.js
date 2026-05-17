const express =
  require("express");

const router =
  express.Router();

const {
  generateQuiz,
} = require(
  "../services/quiz.ai"
);

router.post(
  "/generate-quiz",
  async (req, res) => {
    try {
      const {
        topic,
        difficulty,
      } = req.body;

      const quiz =
        await generateQuiz(
          topic,
          difficulty
        );

      res.json(quiz);
    }

    catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          "Quiz generation failed",
      });
    }
  }
);

module.exports = router;