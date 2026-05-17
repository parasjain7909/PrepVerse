/* logicalReasoning.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  Brain,
  Binary,
  Users,
  Compass,
  Puzzle,
  ArrowRight,
  Shapes,
  Network,
  Scale,
  Boxes,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const logicalTopics = [
  {
    title: "Analogy",

    description:
      "Practice word relationship and comparison based reasoning questions.",

    icon: Brain,

    path: "/aptitude/analogy",

    color:
      "from-indigo-500 to-violet-500",
  },

  {
    title: "Coding Decoding",

    description:
      "Solve coding pattern and decoding logic questions asked in placements.",

    icon: Binary,

    path: "/aptitude/codingdecoding",

    color:
      "from-cyan-500 to-blue-500",
  },

  {
    title: "Blood Relation",

    description:
      "Family tree and relationship based reasoning questions.",

    icon: Users,

    path: "/aptitude/bloodrelation",

    color:
      "from-pink-500 to-rose-500",
  },

  {
    title: "Direction Sense",

    description:
      "Practice directions, turns and distance based problems.",

    icon: Compass,

    path: "/aptitude/directionsense",

    color:
      "from-emerald-500 to-green-500",
  },

  {
    title: "Series",

    description:
      "Number series and alphabet pattern reasoning questions.",

    icon: Shapes,

    path: "/aptitude/series",

    color:
      "from-orange-500 to-amber-500",
  },

  {
    title: "Odd One Out",

    description:
      "Identify the different pattern or object from given options.",

    icon: Boxes,

    path: "/aptitude/oddoneout",

    color:
      "from-purple-500 to-fuchsia-500",
  },

  {
    title: "Seating Arrangement",

    description:
      "Linear and circular arrangement reasoning problems.",

    icon: Network,

    path: "/aptitude/seatingarrangement",

    color:
      "from-sky-500 to-blue-500",
  },

  {
    title: "Syllogism",

    description:
      "Logical statement and conclusion based reasoning practice.",

    icon: Scale,

    path: "/aptitude/syllogism",

    color:
      "from-teal-500 to-cyan-500",
  },

  {
    title: "Puzzles",

    description:
      "Advanced placement reasoning puzzles and logical scenarios.",

    icon: Puzzle,

    path: "/aptitude/puzzles",

    color:
      "from-red-500 to-orange-500",
  },
];

export default function LogicalReasoning() {
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

      {/* HERO */}
      <section
        className="
        px-4
        sm:px-6
        lg:px-10
        pt-32
        pb-20
        "
      >
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
        >
          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-7xl
            font-black
            text-slate-900
            leading-tight
            "
          >
            Master
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
              Logical Reasoning
            </span>
          </h1>

          <p
            className="
            mt-6
            text-slate-600
            text-lg
            max-w-3xl
            leading-relaxed
            "
          >
            Practice company-level reasoning questions frequently
            asked in TCS NQT, Infosys, Wipro, Capgemini,
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
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          "
        >
          {logicalTopics.map((item, index) => {
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
                rounded-[30px]
                bg-white
                border
                border-slate-200
                p-7
                shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)]
                transition-all
                duration-500
                cursor-pointer
                "
              >
                {/* ICON */}
                <div
                  className={`
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
                  mt-7
                  text-2xl
                  font-bold
                  text-slate-900
                  "
                >
                  {item.title}
                </h2>

                <p
                  className="
                  mt-4
                  text-slate-600
                  leading-relaxed
                  "
                >
                  {item.description}
                </p>

                {/* BUTTON */}
                <button
                  className="
                  mt-7
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