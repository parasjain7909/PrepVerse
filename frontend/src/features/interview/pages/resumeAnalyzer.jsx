import React, { useRef, useState } from "react";
import { useInterview } from "../hooks/useInterview.js";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const resumeAnalyzer = () => {
  const { loading, generateReport, reports } = useInterview();

  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");

  const resumeInputRef = useRef();
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0];

    const data = await generateReport({
      jobDescription,
      selfDescription,
      resumeFile,
    });

    navigate(`/interview/${data._id}`);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-bold animate-pulse">
          Generating Strategy...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black tracking-tight">
            AI Interview
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}
              Strategy
            </span>
          </h1>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
            Generate premium interview preparation plans using AI-powered
            analysis of your resume and target role.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-8 border-r border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
                  💼
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Target Job Description
                  </h2>

                  <p className="text-slate-400 text-sm">
                    Paste the complete job description
                  </p>
                </div>
              </div>

              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full h-[500px] bg-slate-950/70 border border-slate-800 rounded-3xl p-6 outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition-all"
                placeholder="Paste the target job description here..."
              />
            </div>

            {/* RIGHT */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center text-2xl">
                  👤
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Your Profile</h2>

                  <p className="text-slate-400 text-sm">
                    Upload resume or describe yourself
                  </p>
                </div>
              </div>

              {/* Upload */}
              <label className="group border-2 border-dashed border-slate-700 hover:border-cyan-400 transition-all rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer bg-slate-950/40 hover:bg-slate-950/70">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-all">
                  ☁️
                </div>

                <h3 className="font-semibold text-xl">
                  Upload Resume
                </h3>

                <p className="text-slate-400 mt-2 text-sm">
                  PDF or DOCX
                </p>

                <input
                  ref={resumeInputRef}
                  hidden
                  type="file"
                  accept=".pdf,.docx"
                />
              </label>

              {/* Divider */}
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px bg-slate-700" />
                <span className="text-slate-500 text-sm">OR</span>
                <div className="flex-1 h-px bg-slate-700" />
              </div>

              {/* Description */}
              <textarea
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
                className="w-full h-52 bg-slate-950/70 border border-slate-800 rounded-3xl p-6 outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none transition-all"
                placeholder="Describe your skills, projects and experience..."
              />

              {/* Button */}
              <button
                onClick={handleGenerateReport}
                className="w-full mt-8 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-cyan-500/20"
              >
                Generate Interview Strategy
              </button>
            </div>
          </div>
        </motion.div>

        {/* Reports */}
        {reports.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-14"
          >
            <h2 className="text-3xl font-bold mb-8">
              Recent Reports
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((report) => (
                <div
                  key={report._id}
                  onClick={() =>
                    navigate(`/interview/${report._id}`)
                  }
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 cursor-pointer hover:scale-[1.03] hover:border-cyan-500/40 transition-all"
                >
                  <h3 className="font-bold text-xl mb-2">
                    {report.title || "Untitled Position"}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4">
                    {new Date(
                      report.createdAt
                    ).toLocaleDateString()}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">
                      Match Score
                    </span>

                    <span className="text-cyan-400 font-bold text-xl">
                      {report.matchScore}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default resumeAnalyzer;