import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  Brain,
  Flame,
  Trophy,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

const levels = [
  {
    title: "Easy",

    description:
      "Beginner-friendly questions for building fundamentals.",

    icon: Brain,

    color:
      "from-emerald-500 to-teal-500",

    level: "easy",
  },

  {
    title: "Medium",

    description:
      "Moderate level company-based aptitude questions.",

    icon: Rocket,

    color:
      "from-blue-500 to-cyan-500",

    level: "medium",
  },

  {
    title: "Hard",

    description:
      "Advanced aptitude problems frequently asked in placements.",

    icon: Flame,

    color:
      "from-orange-500 to-red-500",

    level: "hard",
  },

  {
    title: "PYQ",

    description:
      "Previously asked company questions from real exams.",

    icon: Trophy,

    color:
      "from-violet-500 to-purple-500",

    level: "pyq",
  },
];

export default function AptitudeLevels() {
  const navigate = useNavigate();

  const { topic } = useParams();

  const formattedTopic = topic
    ?.split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  return (
    <div
      className="
      min-h-screen
      bg-[#F5F7FB]
      overflow-x-hidden
      "
    >
      <MainNavbar />

      <section
        className="
        px-4
        sm:px-6
        lg:px-10
        pt-32
        pb-24
        "
      >
        {/* TITLE */}
        <div className="max-w-4xl">
          <h1
            className="
            text-5xl
            sm:text-6xl
            font-black
            text-slate-900
            "
          >
            {formattedTopic}

            <span
              className="
              bg-gradient-to-r
              from-indigo-500
              to-violet-500
              bg-clip-text
              text-transparent
              "
            >
              {" "}
              Practice
            </span>
          </h1>

          <p
            className="
            mt-6
            text-slate-600
            text-lg
            "
          >
            Choose your difficulty level and
            practice company-level aptitude
            questions with detailed explanations.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
          mt-16
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          "
        >
          {levels.map((level, index) => {
            const Icon = level.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() =>
                  navigate(
                    `/aptitude/${topic}/${level.level}`
                  )
                }
                className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white
                border
                border-slate-200
                p-8
                shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]
                transition-all
                duration-500
                cursor-pointer
                "
              >
                {/* GLOW */}
                <div
                  className={`
                  absolute
                  top-[-50px]
                  right-[-50px]
                  h-[140px]
                  w-[140px]
                  rounded-full
                  blur-[90px]
                  opacity-20
                  bg-gradient-to-r
                  ${level.color}
                  `}
                />

                {/* ICON */}
                <div
                  className={`
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${level.color}
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  `}
                >
                  <Icon className="text-white" />
                </div>

                {/* CONTENT */}
                <h2
                  className="
                  mt-8
                  text-3xl
                  font-black
                  text-slate-900
                  "
                >
                  {level.title}
                </h2>

                <p
                  className="
                  mt-4
                  text-slate-600
                  leading-relaxed
                  "
                >
                  {level.description}
                </p>

                {/* BUTTON */}
                <button
                  className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  text-indigo-600
                  font-semibold
                  group-hover:gap-4
                  transition-all
                  "
                >
                  Start Practice

                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}