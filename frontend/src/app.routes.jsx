/* router.jsx */

import { createBrowserRouter } from "react-router-dom";

/* =========================
   AUTH PAGES
========================= */

import Register from "./features/auth/pages/register.jsx";

import Login from "./features/auth/pages/login.jsx";

/* =========================
   MAIN PAGES
========================= */

import Home from "./features/interview/pages/home.jsx";

import ResumeAnalyzer from "./features/interview/pages/resumeAnalyzer.jsx";

/* =========================
   APTITUDE PAGES
========================= */

import AptitudeHome from "./features/aptitude/pages/aptitudehome.jsx";

import QuantitativePage from "./features/aptitude/pages/quantitativetopic.jsx";

import LogicalReasoning from "./features/aptitude/pages/logicalReasoning.jsx";

import VerbalAbility from "./features/aptitude/pages/verbalAbility.jsx";

import DataInterpretation from "./features/aptitude/pages/dataInterpretation.jsx";




import PuzzleSolving from "./features/aptitude/pages/puzzleSolving.jsx";

import SpeedMath from "./features/aptitude/pages/speedMath.jsx";

import AptitudeLevels from "./features/aptitude/pages/aptitudeLevel.jsx";

import QuizPage from "./features/aptitude/pages/quizpage.jsx";

import ProfileDashboard from "./features/profile/pages/profileDashboard.jsx";
import QuizHistory from "./features/profile/pages/quizHistory.jsx";

/* =========================
   ROUTER
========================= */

const router = createBrowserRouter([
  /* =========================
     HOME PAGE
  ========================= */

  {
    path: "/",

    element: <Home />,
  },

  /* =========================
     AUTH PAGES
  ========================= */

  {
    path: "/login",

    element: <Login />,
  },

  {
    path: "/register",

    element: <Register />,
  },

  /* =========================
     RESUME ANALYZER
  ========================= */

  {
    path: "/resume",

    element: <ResumeAnalyzer />,
  },

  /* =========================
     APTITUDE HOME
  ========================= */

  {
    path: "/aptitude",

    element: <AptitudeHome />,
  },

  /* =========================
     QUANTITATIVE PAGE
  ========================= */

  {
    path: "/aptitude/quantitative",

    element: <QuantitativePage />,
  },

  /* =========================
     LOGICAL REASONING PAGE
  ========================= */

  {
    path: "/aptitude/logical",

    element: <LogicalReasoning />,
  },

  /* =========================
     VERBAL ABILITY PAGE
  ========================= */

  {
    path: "/aptitude/verbal",

    element: <VerbalAbility />,
  },

  /* =========================
     DATA INTERPRETATION PAGE
  ========================= */

  {
    path: "/aptitude/datainterpretation",

    element: <DataInterpretation />,
  },

  /*puzzle solving*/

  {   
    path: "/aptitude/puzzlesolving",

    element: <PuzzleSolving />,
  },


  /* speed math */
  {
    path: "/aptitude/speedmath",

    element: <SpeedMath />,
  },
  /* =========================
  

  /* =========================
     DYNAMIC LEVEL PAGE
  ========================= */

  {
    path: "/aptitude/:topic",

    element: <AptitudeLevels />,
  },

  /* =========================
     QUIZ PAGE
  ========================= */

  {
    path: "/aptitude/:topic/:level",

    element: <QuizPage />,
  },
  {
    path: "/profile/history",
    element: <QuizHistory />,
  },
  {
    path: "/profile/dashboard",
    element: <ProfileDashboard />,
  }
]);

export default router;