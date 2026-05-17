import {
  GraduationCap,
  Menu,
  X,
  Home,
  Brain,
  FileText,
  Code2,
  Bot,
  BookOpen,
  Bell,
  Search,
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
    title: "Aptitude",
    icon: Brain,
    path: "/aptitude",
  },

  {
    title: "Resume",
    icon: FileText,
    path: "/resume",
  },

  {
    title: "Coding",
    icon: Code2,
    path: "/coding",
  },

  {
    title: "AI Assistant",
    icon: Bot,
    path: "/chatbot",
  },

  {
    title: "Resources",
    icon: BookOpen,
    path: "/resources",
  },
];

export default function MainNavbar() {
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  return (
    <>
      {/* NAVBAR */}

      <header
        className="
        sticky
        top-0
        left-0
        z-50
        w-full
        bg-white
        border-b
        border-slate-200
        "
      >
        <div
          className="
          max-w-[1500px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-[85px]
          flex
          items-center
          justify-between
          "
        >
          {/* LEFT */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            onClick={() =>
              navigate("/")
            }
            className="
            flex
            items-center
            gap-4
            cursor-pointer
            "
          >
            {/* LOGO */}

            <div
              className="
              relative
              w-14
              h-14
              rounded-3xl
              bg-gradient-to-r
              from-indigo-500
              via-violet-500
              to-purple-500
              flex
              items-center
              justify-center
              shadow-[0_12px_30px_rgba(99,102,241,0.25)]
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

              <GraduationCap
                className="
                relative
                z-10
                text-white
                "
              />
            </div>

            {/* BRAND */}

            <div>
              <h1
                className="
                text-2xl
                font-black
                bg-gradient-to-r
                from-indigo-500
                via-violet-500
                to-purple-500
                bg-clip-text
                text-transparent
                "
              >
                BTechVerse
              </h1>

              <p
                className="
                text-xs
                text-slate-500
                mt-1
                "
              >
                AI Ecosystem Platform
              </p>
            </div>
          </motion.div>

          {/* CENTER NAV */}

          <div
            className="
            hidden
            lg:flex
            items-center
            gap-2
            "
          >
            {navItems.map(
              (
                item,
                index
              ) => {
                const Icon =
                  item.icon;

                return (
                  <motion.button
                    key={index}
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() =>
                      navigate(
                        item.path
                      )
                    }
                    className="
                    flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-2xl
                    text-slate-700
                    font-semibold
                    hover:text-indigo-600
                    hover:bg-indigo-50
                    transition-all
                    duration-300
                    "
                  >
                    <Icon
                      size={18}
                    />

                    <span>
                      {
                        item.title
                      }
                    </span>
                  </motion.button>
                );
              }
            )}
          </div>

          {/* RIGHT */}

          <div
            className="
            flex
            items-center
            gap-3
            "
          >
            {/* SEARCH */}

            <div
              className="
              hidden
              md:flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              bg-slate-100
              border
              border-slate-200
              "
            >
              <Search
                size={18}
                className="text-slate-500"
              />

              <input
                type="text"
                placeholder="Search..."
                className="
                bg-transparent
                outline-none
                text-sm
                placeholder:text-slate-400
                w-[140px]
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
              hidden
              sm:flex
              w-12
              h-12
              rounded-2xl
              bg-white
              border
              border-slate-200
              items-center
              justify-center
              shadow-sm
              "
            >
              <Bell
                size={18}
                className="text-slate-700"
              />
            </motion.button>

            {/* DASHBOARD */}

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                navigate(
                  "/profile/dashboard"
                )
              }
              className="
              hidden
              lg:flex
              items-center
              justify-center
              px-6
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              via-violet-500
              to-purple-500
              text-white
              font-semibold
              shadow-[0_12px_30px_rgba(99,102,241,0.25)]
              "
            >
              Dashboard
            </motion.button>

            {/* MOBILE MENU */}

            <button
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
              className="
              lg:hidden
              w-12
              h-12
              rounded-2xl
              bg-white
              border
              border-slate-200
              flex
              items-center
              justify-center
              shadow-sm
              "
            >
              {mobileMenu ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
              lg:hidden
              border-t
              border-slate-200
              bg-white
              "
            >
              <div className="p-5 space-y-3">
                {navItems.map(
                  (
                    item,
                    index
                  ) => {
                    const Icon =
                      item.icon;

                    return (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(
                            item.path
                          );

                          setMobileMenu(
                            false
                          );
                        }}
                        className="
                        w-full
                        flex
                        items-center
                        gap-4
                        px-5
                        py-4
                        rounded-2xl
                        text-slate-700
                        font-semibold
                        hover:bg-indigo-50
                        hover:text-indigo-600
                        transition-all
                        "
                      >
                        <Icon
                          size={20}
                        />

                        {
                          item.title
                        }
                      </button>
                    );
                  }
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}