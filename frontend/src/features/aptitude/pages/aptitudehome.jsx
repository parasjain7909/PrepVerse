/* AptitudeHome.jsx */

import {
  Calculator,
  Brain,
  BookOpen,
  BarChart3,
  Puzzle,
  Clock3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

export default function AptitudeHome() {
  const navigate = useNavigate();

  /* =========================
     CATEGORIES
  ========================= */

  const categories = [
    {
      title:
        "Quantitative Aptitude",

      description:
        "Percentages, Profit & Loss, Time & Work, Probability and more.",

      icon: Calculator,

      questions:
        "200+ Questions",

      color:
        "from-indigo-500 to-violet-500",

      path:
        "/aptitude/quantitative",
    },

    {
      title:
        "Logical Reasoning",

      description:
        "Puzzles, Coding-Decoding, Blood Relations and critical reasoning.",

      icon: Brain,

      questions:
        "150+ Questions",

      color:
        "from-purple-500 to-fuchsia-500",

      path:
        "/aptitude/logical",
    },

    {
      title:
        "Verbal Ability",

      description:
        "Grammar, Reading Comprehension, Vocabulary and sentence correction.",

      icon: BookOpen,

      questions:
        "100+ Questions",

      color:
        "from-blue-500 to-cyan-500",

      path:
        "/aptitude/verbal",
    },

    {
      title:
        "Data Interpretation",

      description:
        "Pie Charts, Tables, Graphs and data analysis problems.",

      icon: BarChart3,

      questions:
        "50+ Questions",

      color:
        "from-emerald-500 to-teal-500",

      path:
        "/aptitude/datainterpretation",
    },

    {
      title:
        "Puzzle Solving",

      description:
        "Advanced logical puzzles and analytical thinking questions.",

      icon: Puzzle,

      questions:
        "80+ Questions",

      color:
        "from-orange-500 to-amber-500",

      path:
        "/aptitude/puzzleSolving",
    },

    {
      title:
        "Speed Mathematics",

      description:
        "Fast calculations, shortcuts and quick solving techniques.",

      icon: Clock3,

      questions:
        "70+ Questions",

      color:
        "from-pink-500 to-rose-500",

      path:
        "/aptitude/speedmath",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* NAVBAR */}

      <MainNavbar />

      {/* HERO SECTION */}

      <section className="relative overflow-hidden">
        {/* BACKGROUND */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-indigo-50
          via-white
          to-violet-50
          "
        />

        {/* GLOW */}

        <div
          className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-indigo-400/20
          blur-[140px]
          rounded-full
          "
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-white
            border
            border-indigo-100
            shadow-sm
            text-indigo-600
            font-semibold
            text-sm
            "
          >
            <Sparkles
              size={16}
            />

            AI Powered Practice
            Platform
          </motion.div>

          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
            mt-8
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            text-slate-900
            "
          >
            Master Aptitude
            <br />

            <span
              className="
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-fuchsia-600
              bg-clip-text
              text-transparent
              "
            >
              Crack Placements
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            mt-8
            max-w-3xl
            text-lg
            sm:text-xl
            leading-relaxed
            text-slate-600
            "
          >
            Practice verified
            aptitude questions,
            company-wise PYQs,
            logical reasoning,
            verbal ability and
            more with a modern
            interactive learning
            experience.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <button
              onClick={() =>
                navigate(
                  "/aptitude/logical"
                )
              }
              className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              to-violet-500
              text-white
              font-semibold
              shadow-xl
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Start Practice
            </button>

            <button
              onClick={() =>
                navigate(
                  "/dashboard"
                )
              }
              className="
              px-8
              py-4
              rounded-2xl
              bg-white
              border
              border-slate-300
              text-slate-700
              font-semibold
              hover:border-indigo-300
              hover:text-indigo-600
              transition-all
              duration-300
              "
            >
              Back To Dashboard
            </button>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY SECTION */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        {/* TITLE */}

        <div className="text-center">
          <h2
            className="
            text-4xl
            sm:text-5xl
            font-black
            text-slate-900
            "
          >
            Explore Categories
          </h2>

          <p
            className="
            mt-5
            text-lg
            text-slate-600
            max-w-2xl
            mx-auto
            "
          >
            Choose your
            preparation category
            and start solving
            verified questions.
          </p>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {categories.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      index *
                      0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  onClick={() => {
                    if (
                      item.path
                    ) {
                      navigate(
                        item.path
                      );
                    }
                  }}
                  className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  border
                  border-slate-200
                  p-8
                  shadow-[0_10px_50px_rgba(15,23,42,0.06)]
                  cursor-pointer
                  group
                  transition-all
                  duration-300
                  "
                >
                  {/* GLOW */}

                  <div
                    className={`
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    ${item.color}
                    `}
                    style={{
                      filter:
                        "blur(120px)",
                    }}
                  />

                  {/* CONTENT */}

                  <div className="relative z-10">
                    {/* ICON */}

                    <div
                      className={`
                      w-20
                      h-20
                      rounded-3xl
                      flex
                      items-center
                      justify-center
                      bg-gradient-to-r
                      ${item.color}
                      shadow-xl
                      `}
                    >
                      <Icon
                        size={36}
                        className="text-white"
                      />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                      mt-8
                      text-2xl
                      font-black
                      text-slate-900
                      "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                      mt-4
                      text-slate-600
                      leading-relaxed
                      "
                    >
                      {
                        item.description
                      }
                    </p>

                    {/* QUESTIONS */}

                    <div className="mt-6 flex items-center justify-between">
                      <span
                        className="
                        text-sm
                        font-semibold
                        text-indigo-600
                        "
                      >
                        {
                          item.questions
                        }
                      </span>

                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        text-slate-400
                        group-hover:text-indigo-600
                        transition-colors
                        duration-300
                        "
                      >
                        <span className="font-semibold">
                          Explore
                        </span>

                        <ArrowRight
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}