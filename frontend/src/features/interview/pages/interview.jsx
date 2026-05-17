import React, { useEffect, useState } from "react";
import { useInterview } from "../hooks/useInterview.js";
import { useParams } from "react-router";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "technical", label: "Technical" },
  { id: "behavioral", label: "Behavioral" },
  { id: "roadmap", label: "Roadmap" },
];

const QuestionCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all">
      <div
        onClick={() => setOpen(!open)}
        className="p-6 cursor-pointer flex justify-between items-center"
      >
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400">
            {index + 1}
          </div>

          <h3 className="font-medium text-slate-200">
            {item.question}
          </h3>
        </div>

        <span className="text-slate-400">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <div className="px-6 pb-6 border-t border-white/10">
          <div className="mt-5">
            <span className="text-cyan-400 text-sm font-semibold">
              Intention
            </span>

            <p className="text-slate-300 mt-2">
              {item.intention}
            </p>
          </div>

          <div className="mt-6">
            <span className="text-fuchsia-400 text-sm font-semibold">
              Model Answer
            </span>

            <p className="text-slate-300 mt-2">
              {item.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const Interview = () => {
  const [activeNav, setActiveNav] = useState("technical");

  const {
    report,
    getReportById,
    loading,
    getResumePdf,
  } = useInterview();

  const { interviewId } = useParams();

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    }
  }, [interviewId]);

  if (loading || !report) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold animate-pulse">
          Loading Report...
        </h1>
      </div>
    );
  }

  const questions =
    activeNav === "technical"
      ? report.technicalQuestions
      : activeNav === "behavioral"
      ? report.behavioralQuestions
      : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-[250px_1fr_320px] gap-6 p-6">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-5 h-fit sticky top-6 backdrop-blur-xl"
        >
          <h2 className="text-xl font-bold mb-6">
            Interview Sections
          </h2>

          <div className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full text-left px-5 py-4 rounded-2xl transition-all ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => getResumePdf(interviewId)}
            className="w-full mt-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
          >
            Download Resume
          </button>
        </motion.div>

        {/* CENTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >
          {activeNav !== "roadmap" ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-black">
                  {activeNav === "technical"
                    ? "Technical Questions"
                    : "Behavioral Questions"}
                </h1>

                <span className="text-slate-400">
                  {questions.length} Questions
                </span>
              </div>

              <div className="space-y-5">
                {questions.map((q, i) => (
                  <QuestionCard
                    key={i}
                    item={q}
                    index={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-black mb-8">
                Preparation Roadmap
              </h1>

              <div className="space-y-5">
                {report.preparationPlan.map((day) => (
                  <div
                    key={day.day}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400">
                        {day.day}
                      </div>

                      <h2 className="text-xl font-bold">
                        {day.focus}
                      </h2>
                    </div>

                    <ul className="space-y-3">
                      {day.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="text-slate-300 flex gap-3"
                        >
                          <span className="text-cyan-400">
                            •
                          </span>

                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 h-fit sticky top-6 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold mb-8">
            Match Analysis
          </h2>

          {/* Score */}
          <div className="relative w-44 h-44 mx-auto mb-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 blur-3xl opacity-30" />

            <div className="relative w-full h-full rounded-full border-[12px] border-slate-800 flex items-center justify-center bg-slate-950">
              <span className="text-5xl font-black">
                {report.matchScore}%
              </span>
            </div>
          </div>

          {/* Gaps */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Skill Gaps
            </h3>

            <div className="flex flex-wrap gap-3">
              {report.skillGaps.map((gap, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm"
                >
                  {gap.skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Interview;