"use client";

import { useState } from "react";
import Link from "next/link";
import marbleImage from "./marble.jpg"; // Import image

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", email, password);
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-6"
      style={{
        backgroundImage: `url(${marbleImage.src})`, // Use imported image dynamically
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        {/* Left side with logo and text */}
        <div className="mb-8 md:mb-0 text-center md:text-left md:max-w-md">
          <h1 className="text-[#606060] text-6xl md:text-8xl font-bold mb-6">sop.ai</h1>
          <p className="text-[#5a5a5a] text-lg md:text-xl max-w-md mx-auto md:mx-0">
          Craft your perfect Statement of Purpose with AI assistance. Stand out in your graduate school applications with personalized, compelling narratives.
          </p>
        </div>

        {/* Right side with login form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-[#606060] text-3xl font-semibold mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-2 bg-white rounded-full text-[#606060] font-medium shadow-md hover:shadow-lg transition-shadow"
                >
                  Go!
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 text-center text-[#606060]">
            Don't have an account?{" "}
            <Link href="/sign-up" className="underline font-medium">
              Get started!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
