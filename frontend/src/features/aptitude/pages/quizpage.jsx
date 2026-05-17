import {
  useState,
  useEffect,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import questionBank from "../data/QuestionBank.js";

import {
  saveQuizAttempt,
} from "../utils/saveQuizAttempt.js";

import QuizTimer from "../components/QuizTimer.jsx";

import ExamModeModal from "../components/ExamModeModal.jsx";

import {
  ChevronRight,
  ChevronLeft,
  Trophy,
  RotateCcw,
  Layers3,
  Zap,
  ChevronDown,
} from "lucide-react";

import { motion } from "framer-motion";

export default function QuizPage() {
  const navigate = useNavigate();

  const { topic, level } =
    useParams();

  /* =========================
     SPEED MATH CHECK
  ========================= */

  const speedMathTopics = [
    "fastcalculation",
    "squarescubes",
    "simplification",
    "vedicmaths",
    "percentagetricks",
    "divisiontricks",
  ];

  const isSpeedMath =
    speedMathTopics.includes(
      topic
    );

  /* =========================
     QUIZ SETTINGS
  ========================= */

  const QUESTIONS_PER_QUIZ =
    10;

  /* =========================
     STATES
  ========================= */

  const [
    currentQuestion,
    setCurrentQuestion,
  ] = useState(0);

  const [
    selectedAnswers,
    setSelectedAnswers,
  ] = useState({});

  const [
    showResult,
    setShowResult,
  ] = useState(false);

  const [
    quizIndex,
    setQuizIndex,
  ] = useState(0);

  const [
    showTrick,
    setShowTrick,
  ] = useState(false);

  /* =========================
     TIMER STATES
  ========================= */

  const [
    quizMode,
    setQuizMode,
  ] = useState("practice");

  const [
    elapsedTime,
    setElapsedTime,
  ] = useState(0);

  const [
    totalTime,
    setTotalTime,
  ] = useState(20 * 60);

  const [timeUp, setTimeUp] =
    useState(false);

  const [
    showExamSetup,
    setShowExamSetup,
  ] = useState(false);

  /* =========================
     ALL QUESTIONS
  ========================= */

  const allQuestions =
    questionBank?.[topic]?.[
      level
    ] || [];

  /* =========================
     SLICE QUESTIONS
  ========================= */

  const startIndex =
    quizIndex *
    QUESTIONS_PER_QUIZ;

  const endIndex =
    startIndex +
    QUESTIONS_PER_QUIZ;

  const quizQuestions =
    allQuestions.slice(
      startIndex,
      endIndex
    );

  /* =========================
     EMPTY STATE
  ========================= */

  if (
    !Array.isArray(
      quizQuestions
    ) ||
    quizQuestions.length ===
      0
  ) {
    return (
      <div className="min-h-screen bg-[#F5F7FB]">
        <MainNavbar />

        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center pt-[110px]">
          <div
            className="
            w-28
            h-28
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            to-violet-500
            flex
            items-center
            justify-center
            shadow-xl
            "
          >
            <Layers3
              size={50}
              className="text-white"
            />
          </div>

          <h1 className="mt-10 text-5xl font-black text-slate-900">
            No Questions Found
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600 leading-relaxed">
            Questions for this
            topic or level are
            not added yet.
          </p>

          <button
            onClick={() =>
              navigate(
                "/aptitude"
              )
            }
            className="
            mt-10
            px-8 py-4
            rounded-2xl
            bg-gradient-to-r
            from-indigo-500
            to-violet-500
            text-white
            font-semibold
            "
          >
            Back To Home
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     CURRENT QUESTION
  ========================= */

  const question =
    quizQuestions[
      currentQuestion
    ];

  /* =========================
     TIMER LOGIC
  ========================= */

  useEffect(() => {
    if (
      showResult ||
      timeUp
    )
      return;

    const timer =
      setInterval(() => {
        setElapsedTime(
          (prev) => {
            const updated =
              prev + 1;

            if (
              quizMode ===
                "timed" &&
              updated >=
                totalTime
            ) {
              clearInterval(
                timer);

              saveQuizAttempt({
                topic,
                level,
                score,
                totalQuestions:
                  quizQuestions.length,
                elapsedTime:
                  totalTime,
                mode: quizMode,
              });

              setTimeUp(true);

              setShowResult(
                true
              );

              return totalTime;
            }

            return updated;
          }
        );
      }, 1000);

    return () =>
      clearInterval(timer);
  }, [
    showResult,
    quizMode,
    totalTime,
    timeUp,
  ]);

  /* =========================
     SELECT ANSWER
  ========================= */

  const handleSelect =
    (option) => {
      setSelectedAnswers({
        ...selectedAnswers,

        [currentQuestion]:
          option,
      });
    };

  /* =========================
     SCORE
  ========================= */

  const score =
    quizQuestions.filter(
      (q, index) =>
        selectedAnswers[
          index
        ] === q.answer
    ).length;

  /* =========================
     PROGRESS
  ========================= */

  const progress =
    ((currentQuestion + 1) /
      quizQuestions.length) *
    100;

  /* =========================
     RESTART QUIZ
  ========================= */

  const restartQuiz = () => {
    setCurrentQuestion(0);

    setSelectedAnswers({});

    setShowResult(false);

    setShowTrick(false);

    setElapsedTime(0);

    setTimeUp(false);

    setQuizMode(
      "practice"
    );
  };

  /* =========================
     RESULT PAGE
  ========================= */

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#F5F7FB]">
        <MainNavbar />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-[110px] pb-10">
          <div
            className="
            max-w-3xl
            mx-auto
            rounded-[40px]
            bg-white
            border
            border-slate-200
            p-10
            text-center
            shadow-sm
            "
          >
            <div
              className="
              w-32
              h-32
              mx-auto
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              to-violet-500
              flex
              items-center
              justify-center
              "
            >
              <Trophy
                size={55}
                className="text-white"
              />
            </div>

            <h1 className="mt-10 text-7xl font-black text-slate-900">
              {score}/
              {
                quizQuestions.length
              }
            </h1>

            <p className="mt-4 text-xl text-slate-600">
              {timeUp
                ? "Time Up!"
                : "Quiz Completed"}
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-14">
              <button
                onClick={
                  restartQuiz
                }
                className="
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                to-violet-500
                text-white
                font-semibold
                "
              >
                <RotateCcw
                  size={18}
                />

                Restart Quiz
              </button>

              <button
                onClick={() =>
                  navigate(
                    `/aptitude/${topic}`
                  )
                }
                className="
                px-8
                py-4
                rounded-2xl
                border
                border-slate-300
                bg-white
                text-slate-700
                font-semibold
                shadow-sm
                hover:bg-slate-100
                "
              >
                Change Level
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     MAIN PAGE
  ========================= */

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <MainNavbar />

      {showExamSetup && (
        <ExamModeModal
          elapsedTime={
            elapsedTime
          }
          setQuizMode={
            setQuizMode
          }
          setTotalTime={
            setTotalTime
          }
          setShowExamSetup={
            setShowExamSetup
          }
        />
      )}

            <main
        className="
        w-full
        px-0
        pt-[95px]
        pb-6
        "
      >
        {/* FULL WIDTH CONTAINER */}

        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* HEADER */}

          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-start
            lg:justify-between
            gap-4
            mb-6
            "
          >
            {/* LEFT */}

            <div>
              <h1
                className="
                text-5xl
                font-black
                capitalize
                text-slate-900
                "
              >
                {level} Level
              </h1>

              <p
                className="
                mt-2
                text-lg
                text-slate-600
                "
              >
                Quiz Batch{" "}
                {quizIndex + 1}
              </p>
            </div>

            {/* TIMER */}

            <div className="flex flex-col gap-4">
              <QuizTimer
                quizMode={
                  quizMode
                }
                elapsedTime={
                  elapsedTime
                }
                totalTime={
                  totalTime
                }
                timeUp={timeUp}
                setShowExamSetup={
                  setShowExamSetup
                }
              />
            </div>
          </div>

          {/* PROGRESS */}

          <div className="mb-6">
            <div
              className="
              flex
              items-center
              justify-between
              mb-4
              "
            >
              <p
                className="
                text-sm
                font-semibold
                text-indigo-600
                "
              >
                Question{" "}
                {currentQuestion +
                  1}{" "}
                of{" "}
                {
                  quizQuestions.length
                }
              </p>

              <p
                className="
                text-sm
                text-slate-500
                "
              >
                {Math.round(
                  progress
                )}
                %
              </p>
            </div>

            <div
              className="
              h-3
              rounded-full
              bg-slate-200
              overflow-hidden
              "
            >
              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                className="
                h-full
                bg-gradient-to-r
                from-indigo-500
                to-violet-500
                "
              />
            </div>
          </div>

          {/* QUESTION CARD */}

          <motion.div
            key={
              currentQuestion
            }
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
            rounded-[32px]
            bg-white
            border
            border-slate-200
            p-7
            sm:p-10
            shadow-sm
            "
          >
            {/* TRICK BUTTON */}

            {isSpeedMath &&
              question?.trick && (
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() =>
                      setShowTrick(
                        !showTrick
                      )
                    }
                    className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500
                    text-white
                    font-semibold
                    shadow-lg
                    "
                  >
                    <Zap
                      size={16}
                    />

                    Quick Trick

                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        showTrick
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                </div>
              )}

            {/* TRICK BOX */}

            {isSpeedMath &&
              showTrick &&
              question?.trick && (
                <div
                  className="
                  mb-8
                  rounded-3xl
                  border
                  border-violet-200
                  bg-violet-50
                  p-6
                  "
                >
                  <h3
                    className="
                    text-xl
                    font-bold
                    text-violet-700
                    "
                  >
                    Shortcut Trick
                  </h3>

                  <p
                    className="
                    mt-3
                    text-slate-700
                    leading-relaxed
                    "
                  >
                    {
                      question.trick
                    }
                  </p>
                </div>
              )}

            {/* QUESTION */}

            <h1
              className="
              text-3xl
              font-bold
              leading-relaxed
              text-slate-900
              "
            >
              {
                question.question
              }
            </h1>

            {/* OPTIONS */}

            <div className="mt-10 space-y-5">
              {question.options?.map(
                (
                  option,
                  index
                ) => (
                  <button
                    key={index}
                    disabled={
                      timeUp
                    }
                    onClick={() =>
                      !timeUp &&
                      handleSelect(
                        option
                      )
                    }
                    className={`
                    w-full
                    text-left
                    flex
                    items-center
                    gap-5
                    px-6
                    py-5
                    rounded-2xl
                    border
                    transition-all

                    ${
                      selectedAnswers[
                        currentQuestion
                      ] === option
                        ? `
                          border-indigo-500
                          bg-indigo-50
                        `
                        : `
                          border-slate-200
                          hover:border-indigo-300
                        `
                    }

                    ${
                      timeUp
                        ? `
                          opacity-60
                          cursor-not-allowed
                        `
                        : ``
                    }
                    `}
                  >
                    <div
                      className={`
                      min-w-[24px]
                      h-6
                      w-6
                      rounded-full
                      border-2

                      ${
                        selectedAnswers[
                          currentQuestion
                        ] === option
                          ? `
                            border-indigo-500
                            bg-indigo-500
                          `
                          : `
                            border-slate-300
                          `
                      }
                      `}
                    />

                    <span
                      className="
                      text-lg
                      font-medium
                      text-slate-800
                      "
                    >
                      {option}
                    </span>
                  </button>
                )
              )}
            </div>

            {/* NAVIGATION */}

            <div
              className="
              flex
              justify-between
              gap-4
              mt-12
              "
            >
              {/* PREVIOUS */}

              <button
                disabled={
                  currentQuestion ===
                    0 ||
                  timeUp
                }
                onClick={() =>
                  setCurrentQuestion(
                    currentQuestion -
                      1
                  )
                }
                className="
                flex
                items-center
                gap-2
                px-6
                py-4
                rounded-2xl
                border
                border-slate-300
                bg-white
                text-slate-700
                font-semibold
                shadow-sm
                hover:bg-slate-100
                disabled:opacity-50
                disabled:text-slate-400
                "
              >
                <ChevronLeft
                  size={18}
                />

                Previous
              </button>

              {/* NEXT / SUBMIT */}

              {currentQuestion !==
              quizQuestions.length -
                1 ? (
                <button
                  disabled={
                    timeUp
                  }
                  onClick={() => {
                    setCurrentQuestion(
                      currentQuestion +
                        1
                    );

                    setShowTrick(
                      false
                    );
                  }}
                  className="
                  flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-500
                  to-violet-500
                  text-white
                  font-semibold
                  disabled:opacity-50
                  "
                >
                  Next Question

                  <ChevronRight
                    size={18}
                  />
                </button>
              ) : (
                <button
                  disabled={
                    timeUp
                  }
                  onClick={() => {
                    saveQuizAttempt(
                      {
                        topic,
                        level,
                        score,
                        totalQuestions:
                          quizQuestions.length,
                        elapsedTime,
                        mode: quizMode,
                      }
                    );

                    setShowResult(
                      true
                    );
                  }}
                  className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  text-white
                  font-semibold
                  disabled:opacity-50
                  "
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      </div>
    );
}