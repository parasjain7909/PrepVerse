/* ExamModeModal.jsx */

import {
  X,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function ExamModeModal({
  elapsedTime,
  setQuizMode,
  setTotalTime,
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

  /* =========================
     AVAILABLE EXAM TIMES
  ========================= */

  const examTimes = [
    5,
    10,
    15,
    20,
    30,
    45,
    60,
  ];

  /* =========================
     FILTER INVALID TIMES
  ========================= */

  const availableTimes =
    examTimes.filter(
      (time) =>
        time * 60 >
        elapsedTime
    );

  /* =========================
     START EXAM MODE
  ========================= */

  const startExamMode = (
    minutes
  ) => {
    setQuizMode("timed");

    setTotalTime(
      minutes * 60
    );

    setShowExamSetup(
      false
    );
  };

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      bg-black/40
      backdrop-blur-sm
      flex
      items-center
      justify-center
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-2xl
        rounded-[36px]
        bg-white
        border
        border-slate-200
        shadow-2xl
        overflow-hidden
        "
      >
        {/* HEADER */}

        <div
          className="
          flex
          items-center
          justify-between
          px-8
          py-6
          border-b
          border-slate-200
          "
        >
          <div>
            <h1
              className="
              text-3xl
              font-black
              text-slate-900
              "
            >
              Exam Mode
            </h1>

            <p
              className="
              mt-2
              text-slate-500
              "
            >
              Select your exam
              duration
            </p>
          </div>

          <button
            onClick={() =>
              setShowExamSetup(
                false
              )
            }
            className="
            w-12
            h-12
            rounded-2xl
            bg-slate-100
            flex
            items-center
            justify-center
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY */}

        <div className="p-8">
          {/* CURRENT TIMER */}

          <div
            className="
            rounded-3xl
            border
            border-indigo-200
            bg-indigo-50
            p-6
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-indigo-100
                flex
                items-center
                justify-center
                "
              >
                <Clock3
                  size={24}
                  className="text-indigo-600"
                />
              </div>

              <div>
                <p
                  className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-indigo-600
                  "
                >
                  Current Timer
                </p>

                <h2
                  className="
                  text-4xl
                  font-black
                  text-slate-900
                  mt-1
                  "
                >
                  {formatTime(
                    elapsedTime
                  )}
                </h2>
              </div>
            </div>
          </div>

          {/* INFO */}

          <div
            className="
            mt-8
            rounded-3xl
            border
            border-amber-200
            bg-amber-50
            p-5
            "
          >
            <div className="flex gap-4">
              <ShieldCheck
                className="text-amber-600 mt-1"
                size={22}
              />

              <div>
                <h3
                  className="
                  font-bold
                  text-slate-900
                  "
                >
                  Exam Rules
                </h3>

                <p
                  className="
                  mt-2
                  text-slate-600
                  leading-relaxed
                  "
                >
                  The current timer
                  will continue.
                  You can only
                  select a duration
                  greater than your
                  current elapsed
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* SELECT TIME */}

          <div className="mt-10">
            <h3
              className="
              text-xl
              font-bold
              text-slate-900
              mb-5
              "
            >
              Select Exam Time
            </h3>

            <div
              className="
              grid
              grid-cols-2
              sm:grid-cols-3
              gap-4
              "
            >
              {examTimes.map(
                (time, index) => {
                  const isValid =
                    time * 60 >
                    elapsedTime;

                  return (
                    <button
                      key={index}
                      disabled={
                        !isValid
                      }
                      onClick={() =>
                        startExamMode(
                          time
                        )
                      }
                      className={`
                      h-20
                      rounded-3xl
                      border
                      text-lg
                      font-bold
                      transition-all

                      ${
                        isValid
                          ? `
                            border-indigo-200
                            bg-white
                            text-slate-900
                            hover:bg-indigo-50
                            hover:border-indigo-400
                          `
                          : `
                            border-slate-200
                            bg-slate-100
                            text-slate-400
                            cursor-not-allowed
                          `
                      }
                      `}
                    >
                      {time} Min
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}