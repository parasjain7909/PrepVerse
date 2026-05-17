/* dataInterpretation.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  PieChart,
  BarChart3,
  LineChart,
  Table,
  ArrowRight,
  Activity,
  TrendingUp,
  Database,
  ChartColumnBig,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const diTopics = [
  {
    title: "Pie Charts",

    description:
      "Practice percentage distribution and sector-based chart interpretation questions frequently asked in placement exams.",

    icon: PieChart,

    path:
      "/aptitude/piecharts",

    color:
      "from-indigo-500 to-violet-500",

    glow:
      "shadow-[0_20px_60px_rgba(99,102,241,0.25)]",
  },

  {
    title: "Bar Graphs",

    description:
      "Solve company-level bar graph comparison and analytical aptitude problems.",

    icon: BarChart3,

    path:
      "/aptitude/bargraphs",

    color:
      "from-cyan-500 to-blue-500",

    glow:
      "shadow-[0_20px_60px_rgba(14,165,233,0.25)]",
  },

  {
    title: "Line Charts",

    description:
      "Practice trend analysis and growth comparison questions using line graphs.",

    icon: LineChart,

    path:
      "/aptitude/linecharts",

    color:
      "from-pink-500 to-rose-500",

    glow:
      "shadow-[0_20px_60px_rgba(244,63,94,0.25)]",
  },

  {
    title: "Tables",

    description:
      "Interpret tabular data and solve calculation-intensive placement questions quickly.",

    icon: Table,

    path:
      "/aptitude/tables",

    color:
      "from-emerald-500 to-green-500",

    glow:
      "shadow-[0_20px_60px_rgba(16,185,129,0.25)]",
  },

  {
    title: "Caselet DI",

    description:
      "Read paragraph-based datasets and solve logical analytical interpretation problems.",

    icon: Database,

    path:
      "/aptitude/caseletdi",

    color:
      "from-orange-500 to-red-500",

    glow:
      "shadow-[0_20px_60px_rgba(249,115,22,0.25)]",
  },

  {
    title: "Mixed Graphs",

    description:
      "Solve advanced placement sets containing multiple charts and combined datasets.",

    icon: ChartColumnBig,

    path:
      "/aptitude/mixedgraphs",

    color:
      "from-purple-500 to-fuchsia-500",

    glow:
      "shadow-[0_20px_60px_rgba(168,85,247,0.25)]",
  },
];

const stats = [
  {
    title: "500+",

    subtitle:
      "Placement DI Questions",

    icon: Activity,
  },

  {
    title: "50+",

    subtitle:
      "Company PYQ Sets",

    icon: TrendingUp,
  },

  {
    title: "6",

    subtitle:
      "DI Categories",

    icon: Database,
  },
];

export default function DataInterpretation() {
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
          bg-indigo-500/10
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
          bg-pink-500/10
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
            <BarChart3
              className="
              text-indigo-600
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
              Company Level DI Practice
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
            Data
            <br />

            <span
              className="
              bg-gradient-to-r
              from-indigo-500
              via-violet-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Interpretation
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
            Master placement level
            graph, chart and analytical
            aptitude problems asked in
            TCS, Infosys, Wipro,
            Accenture, Capgemini,
            Deloitte and other company
            exams.
          </p>
        </motion.div>

        {/* STATS */}

        <div
          className="
          mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          relative
          z-10
          "
        >
          {stats.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.1,
                  }}
                  className="
                  bg-white
                  rounded-[28px]
                  border
                  border-slate-200
                  p-7
                  shadow-lg
                  "
                >
                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon className="text-white" />
                  </div>

                  <h2
                    className="
                    mt-6
                    text-4xl
                    font-black
                    text-slate-900
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                    mt-2
                    text-slate-600
                    "
                  >
                    {item.subtitle}
                  </p>
                </motion.div>
              );
            }
          )}
        </div>
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
          flex
          items-center
          justify-between
          mb-12
          "
        >
          <div>
            <h2
              className="
              text-4xl
              font-black
              text-slate-900
              "
            >
              DI Categories
            </h2>

            <p
              className="
              mt-3
              text-slate-600
              text-lg
              "
            >
              Select a category and
              start practicing.
            </p>
          </div>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-7
          "
        >
          {diTopics.map(
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
                    text-indigo-600
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