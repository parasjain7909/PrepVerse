/* puzzleSolving.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  Puzzle,
  Users,
  Clock3,
  Shapes,
  Brain,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const puzzleTopics = [
  {
    title: "Seating Puzzles",

    description:
      "Practice linear and circular seating arrangement based logical puzzles.",

    icon: Users,

    path:
      "/aptitude/seatingpuzzles",

    color:
      "from-indigo-500 to-violet-500",

    glow:
      "shadow-[0_20px_60px_rgba(99,102,241,0.25)]",
  },

  {
    title: "Clock Puzzles",

    description:
      "Solve clock angle, time and mirror image based reasoning questions.",

    icon: Clock3,

    path:
      "/aptitude/clockpuzzles",

    color:
      "from-cyan-500 to-blue-500",

    glow:
      "shadow-[0_20px_60px_rgba(14,165,233,0.25)]",
  },

  {
    title: "Figure Puzzles",

    description:
      "Improve visual reasoning with shape and pattern based puzzles.",

    icon: Shapes,

    path:
      "/aptitude/figurepuzzles",

    color:
      "from-pink-500 to-rose-500",

    glow:
      "shadow-[0_20px_60px_rgba(244,63,94,0.25)]",
  },

  {
    title: "Logical Puzzles",

    description:
      "Solve company-level analytical and logical thinking puzzles.",

    icon: Brain,

    path:
      "/aptitude/logicalpuzzles",

    color:
      "from-emerald-500 to-green-500",

    glow:
      "shadow-[0_20px_60px_rgba(16,185,129,0.25)]",
  },
];

export default function PuzzleSolving() {
  const navigate = useNavigate();

  return (
    <div
      className="
      min-h-screen
      bg-[#F5F7FB]
      overflow-x-hidden
      "
    >
      <MainNavbar />

      {/* HERO SECTION */}

      <section
        className="
        relative
        px-4
        sm:px-6
        lg:px-10
        pt-32
        pb-24
        "
      >
        {/* BACKGROUND BLUR */}

        <div
          className="
          absolute
          top-10
          left-10
          w-72
          h-72
          bg-violet-500/10
          rounded-full
          blur-3xl
          "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          w-72
          h-72
          bg-cyan-500/10
          rounded-full
          blur-3xl
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10"
        >
          <div
            className="
            inline-flex
            items-center
            gap-3
            bg-white
            border
            border-slate-200
            rounded-full
            px-5
            py-2
            shadow-md
            "
          >
            <Puzzle
              className="
              text-violet-600
              "
              size={18}
            />

            <span
              className="
              text-sm
              font-semibold
              text-slate-700
              "
            >
              Puzzle Solving Practice
            </span>
          </div>

          <h1
            className="
            mt-8
            text-5xl
            sm:text-6xl
            lg:text-8xl
            font-black
            leading-[0.95]
            text-slate-900
            "
          >
            Puzzle
            <br />

            <span
              className="
              bg-gradient-to-r
              from-violet-500
              via-purple-500
              to-indigo-500
              bg-clip-text
              text-transparent
              "
            >
              Solving
            </span>
          </h1>

          <p
            className="
            mt-8
            text-lg
            sm:text-xl
            text-slate-600
            leading-relaxed
            max-w-3xl
            "
          >
            Master company-level puzzle
            solving questions including
            seating arrangements,
            clock puzzles, logical
            reasoning and visual
            analytical puzzles.
          </p>
        </motion.div>
      </section>

      {/* TOPICS SECTION */}

      <section
        className="
        px-4
        sm:px-6
        lg:px-10
        pb-28
        "
      >
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-2
          gap-7
          "
        >
          {puzzleTopics.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() =>
                    navigate(
                      item.path
                    )
                  }
                  className={`
                  relative
                  overflow-hidden
                  group
                  cursor-pointer
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:${item.glow}
                  `}
                >
                  {/* GRADIENT BG */}

                  <div
                    className={`
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    ${item.color}
                    `}
                    style={{
                      mixBlendMode:
                        "soft-light",
                    }}
                  />

                  {/* ICON */}

                  <div
                    className={`
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    ${item.color}
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
                    relative
                    z-10
                    mt-8
                    text-3xl
                    font-black
                    text-slate-900
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                    relative
                    z-10
                    mt-5
                    text-slate-600
                    leading-relaxed
                    text-[16px]
                    "
                  >
                    {
                      item.description
                    }
                  </p>

                  {/* BUTTON */}

                  <button
                    className="
                    relative
                    z-10
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-violet-600
                    font-bold
                    group-hover:gap-4
                    transition-all
                    "
                  >
                    Start Practice

                    <ArrowRight
                      size={18}
                    />
                  </button>
                </motion.div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
}