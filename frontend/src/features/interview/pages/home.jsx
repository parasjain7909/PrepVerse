import DashboardLayout from "../../../components/layouts/DashboardLayout.jsx";
import Sidebar from "../../../components/layouts/sidebar.jsx";



import {
  Sparkles,
  ArrowRight,
  Bot,
  Brain,
  Code2,
  FileText,
  Briefcase,
  Trophy,
  Users,
  BarChart3,
  Star,
  Rocket,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Resume Analyzer",
    description:
      "Analyze resumes with ATS optimization and AI-powered suggestions.",
    icon: FileText,
  },

  {
    title: "Coding Practice",
    description:
      "Solve coding problems and prepare for technical interviews.",
    icon: Code2,
  },

  {
    title: "AI Assistant",
    description:
      "Your personal AI mentor for learning, guidance and preparation.",
    icon: Bot,
  },

  {
    title: "Aptitude Practice",
    description:
      "Sharpen quantitative aptitude and reasoning skills.",
    icon: Brain,
  },

  {
    title: "Placement Preparation",
    description:
      "Track placement readiness and improve interview skills.",
    icon: Briefcase,
  },

  {
    title: "Progress Analytics",
    description:
      "Visualize your performance with futuristic analytics.",
    icon: BarChart3,
  },
];

const stats = [
  {
    title: "Students",
    value: "25K+",
  },

  {
    title: "Coding Problems",
    value: "12K+",
  },

  {
    title: "Resumes Analyzed",
    value: "50K+",
  },

  {
    title: "Placement Rate",
    value: "96%",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    text:
      "This platform completely transformed my placement preparation journey.",
  },

  {
    name: "Priya Jain",
    role: "Frontend Developer",
    text:
      "The AI Resume Analyzer helped me improve my ATS score dramatically.",
  },

  {
    name: "Aman Verma",
    role: "Data Analyst",
    text:
      "Beautiful interface and futuristic experience with amazing tools.",
  },
];

export default function Home() {
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
        {/* GLOW */}
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
        {/* HERO */}
        <section
          className="
          relative
          overflow-hidden
          px-4
          sm:px-6
          lg:px-10
          pt-28
          pb-24
          "
        >
          {/* HERO GLOW */}
          <div
            className="
            absolute
            top-[10%]
            right-[10%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-500/20
            blur-[120px]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative z-10"
          >
            {/* BADGE */}
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

              Next Generation B.Tech Ecosystem
            </div>

            {/* HEADING */}
            <h1
              className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              leading-tight
              max-w-6xl
              "
            >
              Build Your
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
                Future Career
              </span>

              <br />

              With AI Powered Learning.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              text-slate-400
              text-base
              sm:text-lg
              leading-relaxed
              mt-8
              max-w-3xl
              "
            >
              A futuristic ecosystem designed for
              B.Tech students with coding practice,
              AI resume analysis, placement tracking,
              aptitude preparation and intelligent
              learning tools.
            </p>

            {/* BUTTONS */}
            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-5
              mt-10
              "
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-violet-500
                via-purple-500
                to-indigo-500
                font-semibold
                shadow-[0_0_40px_rgba(139,92,246,0.35)]
                "
              >
                Explore Platform

                <ArrowRight size={18} />
              </motion.button>

              <button
                className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                hover:bg-white/[0.06]
                transition-all
                "
              >
                Watch Demo
              </button>
            </div>
          </motion.div>
        </section>

        {/* STATS */}
        <section
          className="
          px-4
          sm:px-6
          lg:px-10
          pb-20
          "
        >
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            "
          >
            {stats.map((item, index) => (
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

                <div className="relative z-10">
                  <p className="text-slate-400">
                    {item.title}
                  </p>

                  <h1
                    className="
                    text-5xl
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
                    {item.value}
                  </h1>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section
          className="
          px-4
          sm:px-6
          lg:px-10
          pb-24
          "
        >
          <div className="mb-12">
            <h2
              className="
              text-4xl
              sm:text-5xl
              font-black
              "
            >
              Powerful Features
            </h2>

            <p
              className="
              text-slate-400
              mt-4
              max-w-2xl
              "
            >
              Everything you need to excel in your
              B.Tech journey and placement preparation.
            </p>
          </div>

          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            "
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  p-7
                  "
                >
                  {/* GLOW */}
                  <div
                    className="
                    absolute
                    top-[-50px]
                    right-[-50px]
                    h-[140px]
                    w-[140px]
                    rounded-full
                    bg-violet-500/10
                    blur-[80px]
                    "
                  />

                  <div className="relative z-10">
                    {/* ICON */}
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
                      mb-6
                      "
                    >
                      <Icon className="text-violet-300" />
                    </div>

                    <h3
                      className="
                      text-2xl
                      font-bold
                      mb-4
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-slate-400
                      leading-relaxed
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* AI SHOWCASE */}
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
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-violet-500/20
            bg-gradient-to-br
            from-violet-500/10
            via-purple-500/5
            to-indigo-500/10
            backdrop-blur-3xl
            p-8
            lg:p-12
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

            <div
              className="
              relative
              z-10
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10
              items-center
              "
            >
              {/* LEFT */}
              <div>
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
                  <Bot size={16} />

                  AI Assistant
                </div>

                <h2
                  className="
                  text-4xl
                  lg:text-5xl
                  font-black
                  leading-tight
                  "
                >
                  Your Personal
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
                    AI Career Mentor
                  </span>
                </h2>

                <p
                  className="
                  text-slate-300
                  leading-relaxed
                  mt-6
                  max-w-xl
                  "
                >
                  Generate roadmaps, analyze resumes,
                  prepare for interviews and get smart
                  career guidance using advanced AI.
                </p>

                <div className="space-y-4 mt-8">
                  {[
                    "AI Resume Review",
                    "Coding Interview Practice",
                    "Roadmap Generator",
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
                        className="
                        text-violet-300
                        "
                        size={18}
                      />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div
                className="
                rounded-[32px]
                border
                border-white/10
                bg-black/30
                backdrop-blur-2xl
                p-6
                "
              >
                <div className="space-y-4">
                  {[
                    "Analyze my resume",
                    "Generate DSA roadmap",
                    "How to crack placements?",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-5
                      "
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="
          px-4
          sm:px-6
          lg:px-10
          pb-24
          "
        >
          <div className="mb-12">
            <h2
              className="
              text-4xl
              sm:text-5xl
              font-black
              "
            >
              Student Success Stories
            </h2>

            <p className="text-slate-400 mt-4">
              Trusted by thousands of students.
            </p>
          </div>

          <div
            className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-6
            "
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-7
                "
              >
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="
                      text-yellow-400
                      fill-yellow-400
                      "
                    />
                  ))}
                </div>

                <p
                  className="
                  text-slate-300
                  leading-relaxed
                  "
                >
                  “{item.text}”
                </p>

                <div className="mt-6">
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}