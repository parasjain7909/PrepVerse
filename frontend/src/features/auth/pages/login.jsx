import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { useState } from "react";

export default function Login() {
  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await handleLogin({
      email,
      password,
    });

  
      navigate("/");
    
  };

  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center bg-black text-white">
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>

      <div className="relative z-10 bg-[#0b0f19]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(99,102,241,0.25)] rounded-2xl p-8 w-[350px] border border-gray-800">

        <h1 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Welcome Back
        </h1>

        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >

          <div>
            <label
              htmlFor="email"
              className="text-gray-400 text-sm mb-1 block"
            >
              Email
            </label>

            <input
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-gray-400 text-sm mb-1 block"
            >
              Password
            </label>

            <input
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white font-semibold tracking-wide hover:scale-[1.03] active:scale-[0.98] transition duration-300"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400 mt-3">
            Don’t have an account?
            <Link
              to="/register"
              className="text-purple-400 underline ml-1"
            >
              Register
            </Link>
          </p>

        </form>
      </div>
    </main>
  );
}