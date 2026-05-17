/* verbalAbility.jsx */

import MainNavbar from "../../../components/layouts/MainNavbar.jsx";

import {
  BookOpen,
  Type,
  SpellCheck,
  Languages,
  FileText,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const verbalTopics = [
  {
    title: "Reading Comprehension",

    description:
      "Practice passage reading and comprehension based questions.",

    icon: BookOpen,

    path: "/aptitude/readingcomprehension",

    color:
      "from-indigo-500 to-violet-500",
  },

  {
    title: "Sentence Correction",

    description:
      "Improve grammar and sentence correction solving skills.",

    icon: SpellCheck,

    path: "/aptitude/sentencecorrection",

    color:
      "from-blue-500 to-cyan-500",
  },

  {
    title: "Error Detection",

    description:
      "Identify grammatical and sentence structure errors quickly.",

    icon: Type,

    path: "/aptitude/errordetection",

    color:
      "from-pink-500 to-rose-500",
  },

  {
    title: "Synonyms & Antonyms",

    description:
      "Strengthen vocabulary and word relationship concepts.",

    icon: Languages,

    path: "/aptitude/synonyms",

    color:
      "from-emerald-500 to-green-500",
  },

  {
    title: "Para Jumbles",

    description:
      "Arrange sentences logically and improve comprehension ability.",

    icon: FileText,

    path: "/aptitude/parajumbles",

    color:
      "from-orange-500 to-amber-500",
  },
];

export default function VerbalAbility() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FB] overflow-x-hidden">
      <MainNavbar />

      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-10 pt-32 pb-20">
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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
            Master
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Verbal Ability
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg max-w-3xl leading-relaxed">
            Practice placement-level verbal ability questions
            frequently asked in TCS, Infosys, Wipro,
            Accenture and Capgemini exams.
          </p>
        </motion.div>
      </section>

      {/* TOPICS */}
      <section className="px-4 sm:px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {verbalTopics.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[30px] bg-white border border-slate-200 p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.12)] transition-all duration-500 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="text-white" />
                </div>

                <h2 className="mt-7 text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <button className="mt-7 flex items-center gap-3 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
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