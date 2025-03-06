"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import marbleImage from "../marble.jpg";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt with:", formData);
    // Add sign up logic here
    router.push("/tell-us-about-you");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-6"
      style={{
        backgroundImage: `url(${marbleImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        {/* Left side with logo and text */}
        <div className="mb-8 md:mb-0 text-center md:text-left md:max-w-md">
          <h1 className="text-[#606060] text-6xl md:text-8xl font-bold mb-6">sop.ai</h1>
          <p className="text-[#5a5a5a] text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Join us to create your perfect Statement of Purpose. Let&apos;s begin your academic journey together.
          </p>
        </div>

        {/* Right side with signup form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-[#606060] text-3xl font-semibold mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-full border border-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-[#8d77ff] text-[#606060] placeholder-[#8f79ff]/50"
                  required
                />
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-8 py-2 bg-white rounded-full text-[#606060] font-medium shadow-md hover:shadow-lg transition-shadow"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 text-center text-[#606060]">
            Already have an account?{" "}
            <Link href="/" className="underline font-medium">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}