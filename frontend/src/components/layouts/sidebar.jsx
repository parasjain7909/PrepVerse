import {
  Home,
  LayoutDashboard,
  FileText,
  Brain,
  Code2,
  Bot,
  BookOpen,
  Briefcase,
  BarChart3,
  User,
  Settings,
  Sparkles,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    icon: Home,
    path: "/",
  },

  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    title: "Resume Analyzer",
    icon: FileText,
    path: "/resume",
  },

  {
    title: "Aptitude Practice",
    icon: Brain,
    path: "/aptitude",
  },

  {
    title: "Coding Practice",
    icon: Code2,
    path: "/coding",
  },

  {
    title: "AI Chatbot",
    icon: Bot,
    path: "/chatbot",
  },

  {
    title: "Resources",
    icon: BookOpen,
    path: "/resources",
  },

  {
    title: "Mock Interviews",
    icon: Briefcase,
    path: "/interviews",
  },

  {
    title: "Progress Tracking",
    icon: BarChart3,
    path: "/progress",
  },

  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },

  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        onClick={() => setOpen(true)}
        className="
        lg:hidden
        fixed
        top-5
        left-5
        z-[100]
        w-12
        h-12
        rounded-2xl
        bg-[#0A0A0F]/90
        backdrop-blur-2xl
        border
        border-white/10
        flex
        items-center
        justify-center
        text-white
        shadow-[0_0_35px_rgba(139,92,246,0.15)]
        "
      >
        <Menu size={20} />
      </motion.button>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-40
              lg:hidden
              "
            />

            {/* SIDEBAR */}
            <motion.aside
              initial={{
                x: -400,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: -400,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="
              fixed
              top-0
              left-0
              z-50
              h-screen
              w-[85%]
              max-w-[330px]
              bg-[#0A0A0F]/95
              backdrop-blur-3xl
              border-r
              border-white/10
              overflow-hidden
              "
            >
              <SidebarContent setOpen={setOpen} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* DESKTOP SIDEBAR */}
      <aside
        className="
        hidden
        lg:flex
        fixed
        left-0
        top-0
        z-50
        h-screen
        w-[300px]
        bg-[#0A0A0F]/85
        backdrop-blur-3xl
        border-r
        border-white/10
        overflow-hidden
        "
      >
        <SidebarContent />
      </aside>
    </>
  );
}

function SidebarContent({ setOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className="
      relative
      flex
      flex-col
      h-full
      "
    >
      {/* PURPLE GLOW */}
      <div
        className="
        absolute
        top-[-120px]
        left-[-120px]
        h-[260px]
        w-[260px]
        rounded-full
        bg-violet-500/10
        blur-[130px]
        "
      />

      <div
        className="
        absolute
        bottom-[-120px]
        right-[-120px]
        h-[260px]
        w-[260px]
        rounded-full
        bg-indigo-500/10
        blur-[130px]
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

      {/* HEADER */}
      <div
        className="
        relative
        z-10
        p-6
        border-b
        border-white/10
        "
      >
        {/* CLOSE BUTTON */}
        {setOpen && (
          <button
            onClick={() => setOpen(false)}
            className="
            lg:hidden
            absolute
            top-5
            right-5
            w-10
            h-10
            rounded-xl
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            text-white
            "
          >
            <X size={18} />
          </button>
        )}

        {/* LOGO */}
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="
          flex
          items-center
          gap-4
          "
        >
          <div
            className="
            relative
            w-14
            h-14
            rounded-3xl
            bg-gradient-to-br
            from-violet-500
            via-purple-500
            to-indigo-500
            flex
            items-center
            justify-center
            shadow-[0_0_50px_rgba(139,92,246,0.35)]
            "
          >
            <div
              className="
              absolute
              inset-0
              rounded-3xl
              bg-white/10
              blur-xl
              "
            />

            <Sparkles
              className="
              relative
              z-10
              text-white
              "
            />
          </div>

          <div>
            <h1
              className="
              text-3xl
              font-black
              bg-gradient-to-r
              from-violet-300
              via-purple-400
              to-indigo-400
              bg-clip-text
              text-transparent
              "
            >
              BTechVerse
            </h1>

            <p
              className="
              text-slate-400
              text-sm
              mt-1
              "
            >
              AI Ecosystem Platform
            </p>
          </div>
        </motion.div>
      </div>

      {/* NAVIGATION */}
      <div
        className="
        relative
        z-10
        flex-1
        overflow-y-auto
        px-4
        py-5
        scrollbar-thin
        scrollbar-thumb-violet-500/20
        scrollbar-track-transparent
        "
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                whileHover={{
                  x: 6,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <button
                  onClick={() => {
                    if (item.path) {
                      navigate(item.path);

                      if (setOpen) {
                        setOpen(false);
                      }
                    }
                  }}
                  className="
                  group
                  relative
                  overflow-hidden
                  w-full
                  flex
                  items-center
                  justify-between
                  px-4
                  py-4
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  hover:border-violet-500/20
                  hover:bg-gradient-to-r
                  hover:from-violet-500/[0.08]
                  hover:to-indigo-500/[0.08]
                  transition-all
                  duration-500
                  "
                >
                  {/* HOVER GLOW */}
                  <div
                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-700
                    bg-gradient-to-r
                    from-violet-500/5
                    via-purple-500/5
                    to-indigo-500/5
                    "
                  />

                  {/* ACTIVE BAR */}
                  <div
                    className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    h-8
                    w-[3px]
                    rounded-full
                    bg-gradient-to-b
                    from-violet-400
                    to-indigo-500
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    shadow-[0_0_20px_rgba(139,92,246,0.7)]
                    "
                  />

                  {/* LEFT */}
                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    relative
                    z-10
                    "
                  >
                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="
                      relative
                      w-11
                      h-11
                      rounded-2xl
                      bg-white/[0.04]
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      "
                    >
                      <div
                        className="
                        absolute
                        inset-0
                        rounded-2xl
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                        bg-violet-500/10
                        blur-xl
                        "
                      />

                      <Icon
                        size={20}
                        className="
                        relative
                        z-10
                        text-violet-300
                        group-hover:text-white
                        transition-all
                        duration-300
                        "
                      />
                    </motion.div>

                    {/* TEXT */}
                    <div className="text-left">
                      <span
                        className="
                        block
                        font-semibold
                        text-slate-200
                        group-hover:text-white
                        transition-all
                        duration-300
                        "
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                        text-xs
                        text-slate-500
                        group-hover:text-violet-300
                        transition-all
                        duration-300
                        "
                      >
                        Open module
                      </span>
                    </div>
                  </div>

                  {/* RIGHT ICON */}
                  <ChevronRight
                    size={18}
                    className="
                    relative
                    z-10
                    text-violet-300
                    opacity-0
                    translate-x-2
                    group-hover:opacity-100
                    group-hover:translate-x-0
                    transition-all
                    duration-500
                    "
                  />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}