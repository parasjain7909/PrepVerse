/* speedMath.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  Calculator,
  Sigma,
  Timer,
  Brain,
  Hash,
  Divide,
  ArrowRight,
  Zap,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const speedTopics = [
  {
    title: "Fast Calculation",

    description:
      "Learn ultra-fast arithmetic tricks and mental calculations.",

    icon: Calculator,

    path:
      "/aptitude/fastcalculation",

    color:
      "from-indigo-500 to-violet-500",

    glow:
      "shadow-[0_20px_60px_rgba(99,102,241,0.25)]",
  },

  {
    title: "Squares & Cubes",

    description:
      "Master quick square and cube solving shortcuts for placements.",

    icon: Sigma,

    path:
      "/aptitude/squarescubes",

    color:
      "from-pink-500 to-rose-500",

    glow:
      "shadow-[0_20px_60px_rgba(244,63,94,0.25)]",
  },

  {
    title: "Simplification",

    description:
      "Practice BODMAS and fast simplification techniques.",

    icon: Timer,

    path:
      "/aptitude/simplification",

    color:
      "from-blue-500 to-cyan-500",

    glow:
      "shadow-[0_20px_60px_rgba(6,182,212,0.25)]",
  },

  {
    title: "Vedic Maths",

    description:
      "Solve calculations rapidly using Vedic mathematics tricks.",

    icon: Brain,

    path:
      "/aptitude/vedicmaths",

    color:
      "from-emerald-500 to-green-500",

    glow:
      "shadow-[0_20px_60px_rgba(16,185,129,0.25)]",
  },

  {
    title: "Percentage Tricks",

    description:
      "Learn shortcut techniques for percentage calculations.",

    icon: Hash,

    path:
      "/aptitude/percentagetricks",

    color:
      "from-orange-500 to-amber-500",

    glow:
      "shadow-[0_20px_60px_rgba(249,115,22,0.25)]",
  },

  {
    title: "Division Tricks",

    description:
      "Master quick division methods for aptitude exams.",

    icon: Divide,

    path:
      "/aptitude/divisiontricks",

    color:
      "from-fuchsia-500 to-purple-500",

    glow:
      "shadow-[0_20px_60px_rgba(217,70,239,0.25)]",
  },
];

export default function SpeedMath() {
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
        {/* BLUR BACKGROUND */}

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
            <Zap
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
              Speed Mathematics
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
            Speed
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
              Mathematics
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
            Learn shortcut tricks,
            mental calculations,
            approximation methods and
            ultra-fast solving
            techniques for placement
            aptitude exams.
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
          xl:grid-cols-3
          gap-7
          "
        >
          {speedTopics.map(
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
                  {/* HOVER BG */}

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

                  {/* TITLE */}

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

                  {/* DESCRIPTION */}

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