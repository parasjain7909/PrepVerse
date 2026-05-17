/* QuizTimer.jsx */

import {
  Clock3,
  TimerReset,
  ShieldCheck,
} from "lucide-react";

export default function QuizTimer({
  quizMode,
  elapsedTime,
  totalTime,
  timeUp,
  setShowExamSetup,
}) {
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

    return `${String(
      mins
    ).padStart(
      2,
      "0"
    )}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex flex-col items-end gap-3">
      {/* TIMER CARD */}

      <div
        className={`
        flex
        items-center
        gap-3
        px-5
        py-3
        rounded-2xl
        border
        shadow-sm

        ${
          timeUp
            ? `
              bg-red-50
              border-red-200
            `
            : `
              bg-white
              border-slate-200
            `
        }
        `}
      >
        {/* ICON */}

        <div
          className={`
          w-11
          h-11
          rounded-xl
          flex
          items-center
          justify-center

          ${
            quizMode ===
            "practice"
              ? `
                bg-indigo-100
              `
              : `
                bg-violet-100
              `
          }
          `}
        >
          {quizMode ===
          "practice" ? (
            <Clock3
              size={20}
              className="text-indigo-600"
            />
          ) : (
            <TimerReset
              size={20}
              className="text-violet-600"
            />
          )}
        </div>

        {/* TIMER INFO */}

        <div>
          {/* MODE */}

          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-slate-500
            "
          >
            {quizMode ===
            "practice"
              ? "Practice Mode"
              : "Timed Quiz"}
          </p>

          {/* TIMER */}

          <h2
            className={`
            text-xl
            font-black

            ${
              timeUp
                ? `
                  text-red-600
                `
                : `
                  text-slate-900
                `
            }
            `}
          >
            {quizMode ===
            "practice"
              ? formatTime(
                  elapsedTime
                )
              : `${formatTime(
                  elapsedTime
                )} / ${formatTime(
                  totalTime
                )}`}
          </h2>
        </div>
      </div>

      {/* SWITCH TO EXAM MODE BUTTON */}

      {quizMode ===
        "practice" &&
        !timeUp && (
          <button
            onClick={() =>
              setShowExamSetup(
                true
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
            hover:scale-[1.02]
            transition-all
            "
          >
            <ShieldCheck
              size={18}
            />

            Switch To Exam
          </button>
        )}
    </div>
  );
}