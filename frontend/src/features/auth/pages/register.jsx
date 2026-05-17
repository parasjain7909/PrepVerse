import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";

export default function Register() {
  const navigate = useNavigate();

  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await handleRegister({
      username,
      email,
      password,
    });

   
      navigate("/");
    
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="relative z-10 w-[380px] p-8 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-xl border border-gray-800 shadow-[0_0_50px_rgba(99,102,241,0.25)]">

        <h1 className="text-3xl font-bold text-white text-center mb-2 tracking-wide">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Enter your details to continue 🚀
        </p>

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >

          <input
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            type="text"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            type="password"
            required
            placeholder="Create Password"
            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-semibold tracking-wide hover:scale-[1.03] active:scale-[0.98] transition duration-300"
          >
            {loading ? "Loading..." : "Register"}
          </button>

          <p className="text-center text-sm text-gray-400 mt-3">
            Already have an account?
            <Link
              to="/login"
              className="text-purple-400 hover:underline ml-1"
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </main>
  );
}