/* saveQuizAttempt.js */

const STORAGE_KEY =
  "quiz_attempts";

/* =========================
   SAVE QUIZ ATTEMPT
========================= */

export const saveQuizAttempt = ({
  topic,
  level,
  score,
  totalQuestions,
  elapsedTime,
  mode,
}) => {
  try {
    /* GET OLD ATTEMPTS */

    const existingAttempts =
      JSON.parse(
        localStorage.getItem(
          STORAGE_KEY
        )
      ) || [];

    /* CREATE NEW ATTEMPT */

    const newAttempt = {
      id: Date.now(),

      topic,

      level,

      score,

      totalQuestions,

      elapsedTime,

      mode,

      accuracy: Math.round(
        (score /
          totalQuestions) *
          100
      ),

      date:
        new Date().toLocaleDateString(),

      time:
        new Date().toLocaleTimeString(),
    };

    /* SAVE UPDATED ARRAY */

    const updatedAttempts =
      [
        newAttempt,
        ...existingAttempts,
      ];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        updatedAttempts
      )
    );

    return true;
  } catch (error) {
    console.error(
      "Failed to save quiz attempt:",
      error
    );

    return false;
  }
};

/* =========================
   GET ALL ATTEMPTS
========================= */

export const getQuizAttempts =
  () => {
    try {
      return (
        JSON.parse(
          localStorage.getItem(
            STORAGE_KEY
          )
        ) || []
      );
    } catch (error) {
      console.error(
        "Failed to fetch quiz attempts:",
        error
      );

      return [];
    }
  };

/* =========================
   CLEAR HISTORY
========================= */

export const clearQuizHistory =
  () => {
    try {
      localStorage.removeItem(
        STORAGE_KEY
      );

      return true;
    } catch (error) {
      console.error(
        "Failed to clear quiz history:",
        error
      );

      return false;
    }
  };