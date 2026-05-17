import Sidebar from "./sidebar.jsx";

import {
  Bell,
  Search,
  Sparkles,
  Trophy,
  Brain,
  Code2,
  Bot,
  Briefcase,
  Flame,
  FileText,
  Upload,
  ArrowUpRight,
  CalendarDays,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Resume Score",
    value: "92%",
    icon: FileText,
  },

  {
    title: "Aptitude Accuracy",
    value: "88%",
    icon: Brain,
  },

  {
    title: "Coding Streak",
    value: "28 Days",
    icon: Flame,
  },

  {
    title: "Problems Solved",
    value: "540+",
    icon: Code2,
  },
];

const resources = [
  "DBMS Notes",
  "Operating System PDF",
  "DSA Roadmap",
  "Aptitude Cheatsheet",
];

const activities = [
  "Resume analyzed successfully",
  "Solved 12 coding questions",
  "Completed aptitude test",
  "AI Chatbot session completed",
];

export default function Dashboard() {
  return (
    <div
      className="
      min-h-screen
      bg-[#07070B]
      text-white
      overflow-x-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* PURPLE GLOW */}
        <div
          className="
          absolute
          top-[-250px]
          left-[-250px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/10
          blur-[140px]
          "
        />

        <div
          className="
          absolute
          bottom-[-250px]
          right-[-250px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/10
          blur-[140px]
          "
        />

        {/* GRID */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:50px_50px]
          "
        />
      </div>

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main
        className="
        lg:ml-[300px]
        min-h-screen
        "
      >
        {/* NAVBAR */}
        <header
          className="
          sticky
          top-0
          z-40
          border-b
          border-white/10
          bg-[#07070B]/70
          backdrop-blur-3xl
          px-4
          sm:px-6
          lg:px-10
          py-4
          "
        >
          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
            "
          >
            {/* LEFT */}
            <div className="pl-14 lg:pl-0">
              <h1
                className="
                text-3xl
                sm:text-4xl
                font-black
                "
              >
                Student Dashboard
              </h1>

              <p
                className="
                text-slate-400
                mt-2
                "
              >
                AI-powered analytics and learning
                ecosystem.
              </p>
            </div>

            {/* RIGHT */}
            <div
              className="
              flex
              items-center
              gap-3
              w-full
              lg:w-auto
              "
            >
              {/* SEARCH */}
              <div
                className="
                flex
                items-center
                gap-3
                flex-1
                lg:w-[340px]
                px-4
                py-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                "
              >
                <Search
                  size={18}
                  className="text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search resources..."
                  className="
                  bg-transparent
                  outline-none
                  w-full
                  placeholder:text-slate-500
                  "
                />
              </div>

              {/* NOTIFICATION */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                w-12
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                flex
                items-center
                justify-center
                "
              >
                <Bell size={18} />
              </motion.button>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div
          className="
          px-4
          sm:px-6
          lg:px-10
          py-8
          "
        >
          {/* HERO */}
          <section
            className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            p-6
            sm:p-8
            lg:p-10
            "
          >
            {/* GLOW */}
            <div
              className="
              absolute
              top-[-100px]
              right-[-100px]
              h-[250px]
              w-[250px]
              rounded-full
              bg-violet-500/20
              blur-[120px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                inline-flex
                items-center
                gap-3
                px-5
                py-3
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                text-violet-200
                text-sm
                font-medium
                mb-8
                "
              >
                <Sparkles size={16} />

                AI Powered Student Analytics
              </div>

              <h1
                className="
                text-3xl
                sm:text-5xl
                lg:text-6xl
                font-black
                leading-tight
                max-w-5xl
                "
              >
                Your Complete
                <br />

                <span
                  className="
                  bg-gradient-to-r
                  from-violet-300
                  via-purple-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                  "
                >
                  B.Tech Ecosystem
                </span>
              </h1>

              <p
                className="
                text-slate-400
                text-base
                sm:text-lg
                leading-relaxed
                mt-6
                max-w-3xl
                "
              >
                Analyze resumes, solve coding
                challenges, practice aptitude and
                accelerate placement preparation using
                AI-powered tools.
              </p>
            </div>
          </section>

          {/* STATS */}
          <section
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            mt-8
            "
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  p-6
                  "
                >
                  {/* GLOW */}
                  <div
                    className="
                    absolute
                    top-[-40px]
                    right-[-40px]
                    h-[120px]
                    w-[120px]
                    rounded-full
                    bg-violet-500/10
                    blur-[80px]
                    "
                  />

                  <div
                    className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    "
                  >
                    <div>
                      <p className="text-slate-400">
                        {item.title}
                      </p>

                      <h1
                        className="
                        text-4xl
                        font-black
                        mt-3
                        "
                      >
                        {item.value}
                      </h1>
                    </div>

                    <div
                      className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-violet-500/20
                      to-indigo-500/20
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      "
                    >
                      <Icon className="text-violet-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </section>

          {/* MAIN GRID */}
          <section
            className="
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
            mt-8
            "
          >
            {/* RESUME PANEL */}
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
              xl:col-span-2
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6
              "
            >
              <div
                className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
                mb-8
                "
              >
                <div>
                  <h2
                    className="
                    text-2xl
                    font-bold
                    "
                  >
                    Resume Analyzer
                  </h2>

                  <p className="text-slate-400 mt-1">
                    AI powered ATS resume analysis
                  </p>
                </div>

                <button
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-500
                  to-indigo-500
                  font-semibold
                  shadow-[0_0_35px_rgba(139,92,246,0.3)]
                  "
                >
                  <Upload size={18} />

                  Upload Resume
                </button>
              </div>

              {/* SCORE */}
              <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
                "
              >
                <div
                  className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  "
                >
                  <p className="text-slate-400">
                    ATS Score
                  </p>

                  <h1
                    className="
                    text-7xl
                    font-black
                    mt-4
                    bg-gradient-to-r
                    from-violet-300
                    via-purple-400
                    to-indigo-400
                    bg-clip-text
                    text-transparent
                    "
                  >
                    92
                  </h1>
                </div>

                <div
                  className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  "
                >
                  <p className="text-slate-400 mb-5">
                    Suggestions
                  </p>

                  <div className="space-y-4">
                    {[
                      "Add more project metrics",
                      "Improve technical keywords",
                      "Optimize resume summary",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="
                        flex
                        items-center
                        gap-3
                        "
                      >
                        <CheckCircle2
                          size={18}
                          className="
                          text-violet-300
                          "
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI CHATBOT */}
            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-violet-500/20
              bg-gradient-to-br
              from-violet-500/10
              to-indigo-500/10
              backdrop-blur-2xl
              p-6
              "
            >
              {/* GLOW */}
              <div
                className="
                absolute
                top-[-50px]
                right-[-50px]
                h-[180px]
                w-[180px]
                rounded-full
                bg-violet-500/20
                blur-[100px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                  w-16
                  h-16
                  rounded-3xl
                  bg-gradient-to-br
                  from-violet-500
                  to-indigo-500
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_40px_rgba(139,92,246,0.35)]
                  "
                >
                  <Bot className="text-white" />
                </div>

                <h2
                  className="
                  text-2xl
                  font-bold
                  mt-6
                  "
                >
                  AI Assistant
                </h2>

                <p
                  className="
                  text-slate-300
                  mt-4
                  leading-relaxed
                  "
                >
                  Get instant AI help for coding,
                  placements, resumes and aptitude
                  preparation.
                </p>

                <div className="space-y-3 mt-8">
                  {[
                    "Analyze Resume",
                    "Generate Roadmap",
                    "Mock Interview",
                  ].map((item, index) => (
                    <button
                      key={index}
                      className="
                      w-full
                      flex
                      items-center
                      justify-between
                      px-5
                      py-4
                      rounded-2xl
                      bg-white/[0.05]
                      border
                      border-white/10
                      hover:bg-white/[0.08]
                      transition-all
                      "
                    >
                      {item}

                      <ArrowUpRight size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* LOWER GRID */}
          <section
            className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
            mt-8
            "
          >
            {/* RESOURCES */}
            <div
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6
              "
            >
              <div
                className="
                flex
                items-center
                justify-between
                mb-6
                "
              >
                <h2
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Learning Resources
                </h2>

                <BookOpen className="text-violet-300" />
              </div>

              <div className="space-y-4">
                {resources.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 5,
                    }}
                    className="
                    flex
                    items-center
                    justify-between
                    p-5
                    rounded-2xl
                    bg-white/[0.03]
                    border
                    border-white/10
                    "
                  >
                    <div>
                      <h3 className="font-semibold">
                        {item}
                      </h3>

                      <p className="text-slate-400 text-sm mt-1">
                        Updated recently
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="
                      text-violet-300
                      "
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RECENT ACTIVITY */}
            <div
              className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6
              "
            >
              <div
                className="
                flex
                items-center
                justify-between
                mb-6
                "
              >
                <h2
                  className="
                  text-2xl
                  font-bold
                  "
                >
                  Recent Activity
                </h2>

                <CalendarDays className="text-violet-300" />
              </div>

              <div className="space-y-5">
                {activities.map((item, index) => (
                  <div
                    key={index}
                    className="
                    flex
                    gap-4
                    "
                  >
                    <div
                      className="
                      mt-1
                      w-3
                      h-3
                      rounded-full
                      bg-violet-400
                      shadow-[0_0_15px_#8b5cf6]
                      "
                    />

                    <div>
                      <h3 className="font-medium">
                        {item}
                      </h3>

                      <p className="text-slate-400 text-sm mt-1">
                        Just now
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}