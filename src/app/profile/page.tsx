"use client"

import { GraduationCap, Camera } from "lucide-react"
import marbleImage from "../marble_profile.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${marbleImage.src})` }}>
      {/* Header with fixed height to prevent overlap */}
      <div className="relative z-10 h-24 container mx-auto px-4 pt-4">
        {/* SOP.ai Branding */}
        <div className="absolute top-4 left-4 text-2xl font-bold text-sop-text">
          sop.ai
        </div>

        {/* Back to Dashboard Button */}
        <div className="absolute top-4 right-4">
          <button 
            onClick={() => router.push("/dashboard")}
            className="bg-sop-pink text-white px-4 py-2 rounded-md shadow-md hover:bg-opacity-80 transition duration-300"
          >
            Dashboard 👈
          </button>
        </div>
      </div>

      {/* Main content - starts after the header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {/* Profile Picture with hover animation */}
          <div 
            className="flex-shrink-0 bg-sop-white rounded-full flex items-center justify-center shadow-md p-4 relative cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
              title=""
            />
            <div className="w-32 h-32 md:w-40 md:h-40 bg-sop-white rounded-full flex items-center justify-center shadow-md relative overflow-hidden">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                <GraduationCap className="w-20 h-20 md:w-24 md:h-24 text-sop-text" strokeWidth={1.5} />
              )}
              
              {/* Hover overlay */}
              {isHovering && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <Camera className="w-8 h-8" />
                  <p className="text-sm mt-1">Update Photo</p>
                </div>
              )}
            </div>
          </div>

          {/* Basic Info Card */}
          <div className="flex flex-col gap-2 md:gap-3 bg-white bg-opacity-50 rounded-lg shadow-md p-4 w-full">
            <h1 className="text-4xl md:text-5xl font-semibold text-sop-text">Alice Bob</h1>
            <p className="text-lg md:text-xl text-sop-text">alice.bob@gmail.com</p>
            <div className="mt-2 space-y-1">
              <p className="text-lg text-sop-text">Senior at PES University</p>
              <p className="text-lg text-sop-text">Major: Computer Science</p>
              <p className="text-lg text-sop-text">Minor: Design</p>
            </div>
          </div>

          {/* SOPs Written Card */} 
          <div className="flex flex-col gap-2 md:gap-3 bg-white bg-opacity-50 rounded-lg shadow-md p-4 w-full">
            <h2 className="text-2xl font-semibold text-sop-text">SOPs Written</h2>
            <ul className="list-disc list-inside">
              <li>Harvard University</li>
              <li>Stanford University</li>
              <li>Massachusetts Institute of Technology</li>
              <li>California Institute of Technology</li>
              <li>University of California, Berkeley</li>
            </ul>
          </div>
        </div>

        {/* Tell Us About You Card */}
        <div className="mt-16 bg-white bg-opacity-50 rounded-lg shadow-md p-4 w-full flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-sop-text">Tell Us About You</h2>
            {/* Content for this section would go here */}
          </div>
          <button className="flex items-center bg-sop-pink text-white px-3 py-1 rounded-md shadow-md hover:bg-opacity-80 transition duration-300">
            <span className="material-icons">Edit 🖊️</span>
          </button>
        </div>
      </div>
    </div>
  )
}