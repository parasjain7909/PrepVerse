/* profileDashboard.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  getQuizAttempts,
} from "../../aptitude/utils/saveQuizAttempt.js";

import {
  Trophy,
  Brain,
  Clock3,
  Target,
  TrendingUp,
  History,
} from "lucide-react";

export default function ProfileDashboard() {
  /* =========================
     GET ATTEMPTS
  ========================= */

  const attempts =
    getQuizAttempts();

  /* =========================
     TOTAL QUIZZES
  ========================= */

  const totalQuizzes =
    attempts.length;

  /* =========================
     AVERAGE ACCURACY
  ========================= */

  const averageAccuracy =
    totalQuizzes > 0
      ? Math.round(
          attempts.reduce(
            (
              total,
              attempt
            ) =>
              total +
              attempt.accuracy,
            0
          ) / totalQuizzes
        )
      : 0;

  /* =========================
     TOTAL PRACTICE TIME
  ========================= */

  const totalPracticeTime =
    attempts.reduce(
      (
        total,
        attempt
      ) =>
        total +
        attempt.elapsedTime,
      0
    );

  /* =========================
     BEST SCORE
  ========================= */

  const bestScore =
    attempts.length > 0
      ? Math.max(
          ...attempts.map(
            (
              attempt
            ) =>
              attempt.score
          )
        )
      : 0;

  /* =========================
     FORMAT TIME
  ========================= */

  const formatTime = (
    totalSeconds
  ) => {
    const hours =
      Math.floor(
        totalSeconds / 3600
      );

    const mins =
      Math.floor(
        (totalSeconds %
          3600) /
          60
      );

    return `${hours}h ${mins}m`;
  };

  /* =========================
     TOPIC ANALYTICS
  ========================= */

  const topicStats = {};

  attempts.forEach(
    (attempt) => {
      if (
        !topicStats[
          attempt.topic
        ]
      ) {
        topicStats[
          attempt.topic
        ] = {
          total: 0,
          count: 0,
        };
      }

      topicStats[
        attempt.topic
      ].total +=
        attempt.accuracy;

      topicStats[
        attempt.topic
      ].count += 1;
    }
  );

  let strongestTopic =
    "N/A";

  let weakestTopic =
    "N/A";

  let highestAccuracy = 0;

  let lowestAccuracy = 100;

  Object.keys(
    topicStats
  ).forEach((topic) => {
    const avg =
      topicStats[topic]
        .total /
      topicStats[topic]
        .count;

    if (
      avg >
      highestAccuracy
    ) {
      highestAccuracy = avg;

      strongestTopic =
        topic;
    }

    if (
      avg <
      lowestAccuracy
    ) {
      lowestAccuracy = avg;

      weakestTopic =
        topic;
    }
  });

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <MainNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* HEADER */}

        <div className="mb-14">
          <h1 className="text-5xl font-black text-slate-900">
            Profile Dashboard
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Track your aptitude
            performance and
            progress.
          </p>
        </div>

        {/* STATS GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {/* TOTAL QUIZZES */}

          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-7
            "
          >
            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-indigo-100
              flex
              items-center
              justify-center
              "
            >
              <History
                size={30}
                className="text-indigo-600"
              />
            </div>

            <p className="mt-7 text-slate-500 font-semibold">
              Total Quizzes
            </p>

            <h2 className="mt-2 text-5xl font-black text-slate-900">
              {totalQuizzes}
            </h2>
          </div>

          {/* ACCURACY */}

          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-7
            "
          >
            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-emerald-100
              flex
              items-center
              justify-center
              "
            >
              <Brain
                size={30}
                className="text-emerald-600"
              />
            </div>

            <p className="mt-7 text-slate-500 font-semibold">
              Avg Accuracy
            </p>

            <h2 className="mt-2 text-5xl font-black text-slate-900">
              {
                averageAccuracy
              }
              %
            </h2>
          </div>

          {/* PRACTICE TIME */}

          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-7
            "
          >
            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-violet-100
              flex
              items-center
              justify-center
              "
            >
              <Clock3
                size={30}
                className="text-violet-600"
              />
            </div>

            <p className="mt-7 text-slate-500 font-semibold">
              Practice Time
            </p>

            <h2 className="mt-2 text-5xl font-black text-slate-900">
              {formatTime(
                totalPracticeTime
              )}
            </h2>
          </div>

          {/* BEST SCORE */}

          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-7
            "
          >
            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-amber-100
              flex
              items-center
              justify-center
              "
            >
              <Trophy
                size={30}
                className="text-amber-600"
              />
            </div>

            <p className="mt-7 text-slate-500 font-semibold">
              Best Score
            </p>

            <h2 className="mt-2 text-5xl font-black text-slate-900">
              {bestScore}
            </h2>
          </div>
        </div>

        {/* ANALYTICS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 mt-10">
          {/* STRONGEST */}

          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-8
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-emerald-100
                flex
                items-center
                justify-center
                "
              >
                <TrendingUp
                  size={28}
                  className="text-emerald-600"
                />
              </div>

              <div>
                <p className="text-slate-500 font-semibold">
                  Strongest Topic
                </p>

                <h2 className="text-3xl font-black capitalize text-slate-900 mt-1">
                  {
                    strongestTopic
                  }
                </h2>
              </div>
            </div>
          </div>

          {/* WEAKEST */}

          <div
            className="
            bg-white
            border
            border-slate-200
            rounded-[32px]
            p-8
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-red-100
                flex
                items-center
                justify-center
                "
              >
                <Target
                  size={28}
                  className="text-red-600"
                />
              </div>

              <div>
                <p className="text-slate-500 font-semibold">
                  Weakest Topic
                </p>

                <h2 className="text-3xl font-black capitalize text-slate-900 mt-1">
                  {
                    weakestTopic
                  }
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}

        <div className="mt-12">
          <h2 className="text-4xl font-black text-slate-900">
            Recent Activity
          </h2>

          <div className="mt-8 space-y-5">
            {attempts
              .slice(0, 5)
              .map(
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
                    rounded-[28px]
                    p-6
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-5
                    "
                  >
                    <div>
                      <h3
                        className="
                        text-2xl
                        font-black
                        capitalize
                        text-slate-900
                        "
                      >
                        {
                          attempt.topic
                        }
                      </h3>

                      <p className="mt-2 text-slate-500 capitalize">
                        {
                          attempt.level
                        }{" "}
                        Level •{" "}
                        {
                          attempt.mode
                        }
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div
                        className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-indigo-100
                        text-indigo-700
                        font-bold
                        "
                      >
                        {
                          attempt.score
                        }
                        /
                        {
                          attempt.totalQuestions
                        }
                      </div>

                      <div
                        className="
                        px-5
                        py-3
                        rounded-2xl
                        bg-emerald-100
                        text-emerald-700
                        font-bold
                        "
                      >
                        {
                          attempt.accuracy
                        }
                        %
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </main>
    </div>
  );
}