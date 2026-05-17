import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  Percent,
  IndianRupee,
  Clock3,
  Ratio,
  Calculator,
  Sigma,
  TrendingUp,
  PieChart,
  ArrowRight,
  Sparkles,
  Target,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const quantitativeTopics = [
  {
    title: "Percentage",

    description:
      "Solve percentage increase, decrease and comparison problems.",

    icon: Percent,

    questions: "100+ Questions",

    companies: [
      "TCS NQT",
      "Infosys",
      "Wipro",
    ],

    color:
      "from-indigo-500 to-violet-500",

    path:
      "/aptitude/percentage",
  },

  {
    title: "Profit & Loss",

    description:
      "Practice profit, loss, discount and marked price questions.",

    icon: IndianRupee,

    questions: "100+ Questions",

    companies: [
      "Accenture",
      "Capgemini",
    ],

    color:
      "from-purple-500 to-fuchsia-500",

    path:
      "/aptitude/profitloss",
  },

  {
    title: "Time & Work",

    description:
      "Master work efficiency and work completion problems.",

    icon: Clock3,

    questions: "100+ Questions",

    companies: [
      "Infosys",
      "TCS NQT",
    ],

    color:
      "from-blue-500 to-cyan-500",

    path:
      "/aptitude/timework",
  },

  {
    title: "Ratio & Proportion",

    description:
      "Understand ratios, proportions and partnership problems.",

    icon: Ratio,

    questions: "100+ Questions",

    companies: [
      "Cognizant",
      "Wipro",
    ],

    color:
      "from-emerald-500 to-teal-500",

    path:
      "/aptitude/ratioproportion",
  },

  {
    title: "Simple Interest",

    description:
      "Practice simple interest, principal, rate and time questions.",

    icon: Calculator,

    questions: "100+ Questions",

    companies: [
      "TCS NQT",
      "Accenture",
    ],

    color:
      "from-orange-500 to-amber-500",

    path:
      "/aptitude/simpleinterest",
  },

  {
    title: "Compound Interest",

    description:
      "Practice annual growth, CI formula and banking compound interest problems.",

    icon: Calculator,

    questions: "100+ Questions",

    companies: [
      "TCS Digital",
      "Infosys",
      "Wipro",
    ],

    color:
      "from-yellow-500 to-orange-500",

    path:
      "/aptitude/compoundinterest",
  },

  {
    title: "Average",

    description:
      "Average calculations and weighted average questions.",

    icon: Sigma,

    questions: "100+ Questions",

    companies: [
      "Infosys",
      "Capgemini",
    ],

    color:
      "from-pink-500 to-rose-500",

    path:
      "/aptitude/average",
  },

  {
    title: "Time Speed Distance",

    description:
      "Train, boat and speed-distance-time concepts.",

    icon: TrendingUp,

    questions: "100+ Questions",

    companies: [
      "Amazon",
      "Infosys",
    ],

    color:
      "from-sky-500 to-blue-500",

    path:
      "/aptitude/timespeeddistance",
  },

  {
    title: "Probability",

    description:
      "Probability concepts and event based questions.",

    icon: PieChart,

    questions: "100+ Questions",

    companies: [
      "Amazon",
      "TCS NQT",
    ],

    color:
      "from-violet-500 to-indigo-500",

    path:
      "/aptitude/probability",
  },
];

export default function QuantitativePage() {
  const navigate = useNavigate();

  return (
    <div
      className="
      min-h-screen
      bg-[#F5F7FB]
      overflow-x-hidden
      "
    >
      {/* NAVBAR */}
      <MainNavbar />

      {/* HERO */}
      <section
        className="
        relative
        overflow-hidden
        px-4
        sm:px-6
        lg:px-10
        pt-32
        pb-20
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          className="
          absolute
          top-[-150px]
          right-[-150px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-indigo-200
          blur-[120px]
          opacity-50
          "
        />

        <div
          className="
          absolute
          bottom-[-150px]
          left-[-150px]
          h-[300px]
          w-[300px]
          rounded-full
          bg-violet-200
          blur-[120px]
          opacity-50
          "
        />

        {/* CONTENT */}
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
            duration: 0.8,
          }}
          className="relative z-10"
        >
          {/* BADGE */}
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-white/80
            backdrop-blur-xl
            border
            border-indigo-100
            shadow-sm
            text-indigo-600
            font-semibold
            text-sm
            "
          >
            <Sparkles size={16} />

            Quantitative Aptitude
          </div>

          {/* HEADING */}
          <h1
            className="
            mt-8
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-black
            leading-tight
            text-slate-900
            max-w-6xl
            "
          >
            Master
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
              {" "}
              Quantitative{" "}
            </span>
            Aptitude
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
            mt-8
            text-slate-600
            text-lg
            leading-relaxed
            max-w-3xl
            "
          >
            Practice company-level quantitative
            aptitude questions frequently asked in
            TCS NQT, Infosys, Wipro, Capgemini,
            Accenture and other placement exams.
          </p>
        </motion.div>
      </section>

      {/* TOPICS */}
      <section
        className="
        px-4
        sm:px-6
        lg:px-10
        pb-24
        "
      >
        {/* TITLE */}
        <div className="mb-12">
          <div
            className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-indigo-50
            border
            border-indigo-100
            text-indigo-600
            font-semibold
            text-sm
            "
          >
            <Target size={16} />

            Quantitative Topics
          </div>

          <h2
            className="
            mt-6
            text-4xl
            sm:text-5xl
            font-black
            text-slate-900
            "
          >
            Choose Your Topic
          </h2>

          <p
            className="
            mt-4
            text-slate-600
            max-w-2xl
            text-lg
            "
          >
            Practice topic-wise aptitude questions
            with detailed explanations and company
            tags.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          "
        >
          {quantitativeTopics.map(
            (item, index) => {
              const Icon = item.icon;

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
                    navigate(item.path)
                  }
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-white/80
                  backdrop-blur-xl
                  border
                  border-slate-200
                  p-7
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
                    top-[-40px]
                    right-[-40px]
                    h-[140px]
                    w-[140px]
                    rounded-full
                    blur-[80px]
                    opacity-20
                    bg-gradient-to-r
                    ${item.color}
                    `}
                  />

                  {/* ICON */}
                  <div
                    className={`
                    relative
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
                  <div className="relative z-10">
                    <h3
                      className="
                      mt-7
                      text-2xl
                      font-bold
                      text-slate-900
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-4
                      text-slate-600
                      leading-relaxed
                      "
                    >
                      {item.description}
                    </p>

                    {/* QUESTIONS */}
                    <div
                      className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-slate-100
                      text-slate-700
                      text-sm
                      font-semibold
                      "
                    >
                      {item.questions}
                    </div>

                    {/* COMPANY TAGS */}
                    <div
                      className="
                      flex
                      flex-wrap
                      gap-2
                      mt-5
                      "
                    >
                      {item.companies.map(
                        (company, i) => (
                          <span
                            key={i}
                            className="
                            px-3
                            py-1.5
                            rounded-full
                            bg-indigo-50
                            border
                            border-indigo-100
                            text-indigo-600
                            text-xs
                            font-semibold
                            "
                          >
                            {company}
                          </span>
                        )
                      )}
                    </div>

                    {/* BUTTON */}
                    <button
                      className="
                      mt-8
                      flex
                      items-center
                      gap-3
                      font-semibold
                      text-indigo-600
                      group-hover:gap-4
                      transition-all
                      "
                    >
                      Start Practice

                      <ArrowRight size={18} />
                    </button>
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