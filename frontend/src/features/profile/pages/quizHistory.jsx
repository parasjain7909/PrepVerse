/* quizHistory.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  getQuizAttempts,
  clearQuizHistory,
} from "../../aptitude/utils/saveQuizAttempt.js";

import {
  Trophy,
  Clock3,
  Brain,
  Trash2,
  History,
  ShieldCheck,
} from "lucide-react";

export default function QuizHistory() {
  /* =========================
     GET ATTEMPTS
  ========================= */

  const attempts =
    getQuizAttempts();

  /* =========================
     FORMAT TIME
  ========================= */

  const formatTime = (
    totalSeconds
  ) => {
    const mins = Math.floor(
      totalSeconds / 60
    );

    const secs =
      totalSeconds % 60;

    return `${mins}m ${secs}s`;
  };

  /* =========================
     CLEAR HISTORY
  ========================= */

  const handleClearHistory =
    () => {
      const confirmDelete =
        window.confirm(
          "Are you sure you want to clear all quiz history?"
        );

      if (
        confirmDelete
      ) {
        clearQuizHistory();

        window.location.reload();
      }
    };

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <MainNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* HEADER */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <h1 className="text-5xl font-black text-slate-900">
              Quiz History
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Track all your
              previous quiz
              attempts and
              performance.
            </p>
          </div>

          {attempts.length >
            0 && (
            <button
              onClick={
                handleClearHistory
              }
              className="
              flex
              items-center
              gap-3
              px-6
              py-4
              rounded-2xl
              bg-red-500
              text-white
              font-semibold
              shadow-lg
              "
            >
              <Trash2
                size={18}
              />

              Clear History
            </button>
          )}
        </div>

        {/* EMPTY STATE */}

        {attempts.length ===
        0 ? (
          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[36px]
            p-14
            text-center
            "
          >
            <div
              className="
              w-28
              h-28
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
              <History
                size={50}
                className="text-white"
              />
            </div>

            <h2 className="mt-10 text-4xl font-black text-slate-900">
              No Quiz History
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Your completed
              quizzes will appear
              here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
            {attempts.map(
              (
                attempt,
                index
              ) => (
                <div
                  key={
                    attempt.id
                  }
                  className="
                  bg-white
                  border
                  border-slate-200
                  rounded-[32px]
                  p-7
                  shadow-sm
                  "
                >
                  {/* TOP */}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2
                        className="
                        text-3xl
                        font-black
                        capitalize
                        text-slate-900
                        "
                      >
                        {
                          attempt.topic
                        }
                      </h2>

                      <p
                        className="
                        mt-2
                        text-slate-500
                        capitalize
                        "
                      >
                        {
                          attempt.level
                        }{" "}
                        Level
                      </p>
                    </div>

                    <div
                      className={`
                      px-4
                      py-2
                      rounded-2xl
                      text-sm
                      font-bold

                      ${
                        attempt.mode ===
                        "timed"
                          ? `
                            bg-violet-100
                            text-violet-700
                          `
                          : `
                            bg-indigo-100
                            text-indigo-700
                          `
                      }
                      `}
                    >
                      {attempt.mode ===
                      "timed"
                        ? "Exam Mode"
                        : "Practice"}
                    </div>
                  </div>

                  {/* STATS */}

                  <div className="grid grid-cols-2 gap-5 mt-8">
                    {/* SCORE */}

                    <div
                      className="
                      rounded-3xl
                      bg-indigo-50
                      border
                      border-indigo-100
                      p-5
                      "
                    >
                      <div className="flex items-center gap-3">
                        <Trophy
                          className="text-indigo-600"
                          size={22}
                        />

                        <p className="font-semibold text-slate-700">
                          Score
                        </p>
                      </div>

                      <h3
                        className="
                        mt-4
                        text-4xl
                        font-black
                        text-slate-900
                        "
                      >
                        {
                          attempt.score
                        }
                        /
                        {
                          attempt.totalQuestions
                        }
                      </h3>
                    </div>

                    {/* ACCURACY */}

                    <div
                      className="
                      rounded-3xl
                      bg-emerald-50
                      border
                      border-emerald-100
                      p-5
                      "
                    >
                      <div className="flex items-center gap-3">
                        <Brain
                          className="text-emerald-600"
                          size={22}
                        />

                        <p className="font-semibold text-slate-700">
                          Accuracy
                        </p>
                      </div>

                      <h3
                        className="
                        mt-4
                        text-4xl
                        font-black
                        text-slate-900
                        "
                      >
                        {
                          attempt.accuracy
                        }
                        %
                      </h3>
                    </div>
                  </div>

                  {/* BOTTOM INFO */}

                  <div className="flex flex-wrap gap-5 mt-8">
                    {/* TIME */}

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      px-5
                      py-3
                      rounded-2xl
                      bg-slate-100
                      "
                    >
                      <Clock3
                        size={18}
                        className="text-slate-600"
                      />

                      <span className="font-semibold text-slate-700">
                        {formatTime(
                          attempt.elapsedTime
                        )}
                      </span>
                    </div>

                    {/* MODE */}

                    <div
                      className="
                      flex
                      items-center
                      gap-3
                      px-5
                      py-3
                      rounded-2xl
                      bg-slate-100
                      "
                    >
                      <ShieldCheck
                        size={18}
                        className="text-slate-600"
                      />

                      <span className="font-semibold text-slate-700">
                        {attempt.mode ===
                        "timed"
                          ? "Exam Mode"
                          : "Practice"}
                      </span>
                    </div>
                  </div>

                  {/* DATE */}

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-slate-500">
                      {attempt.date} •{" "}
                      {
                        attempt.time
                      }
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </main>
    </div>
  );
}