"use client"

import { useState } from "react"
import marbleImage from "../marble_swish.jpg";
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

// Define college type with progress status
interface College {
  id: string
  name: string
  progress: "not-started" | "in-progress" | "completed"
  progressPercentage: number
}

// Define the status progression
const statusProgression = {
  "not-started": "in-progress",
  "in-progress": "completed",
  "completed": "not-started",
};

export default function SOPTrackerPage() {
  // State to track added colleges
  const [colleges, setColleges] = useState<College[]>([])
  const [newCollegeName, setNewCollegeName] = useState("")

  // Function to add a new college
  const addCollege = () => {
    if (newCollegeName.trim()) {
      const newCollege: College = {
        id: Date.now().toString(),
        name: newCollegeName.trim(),
        progress: "not-started",
        progressPercentage: 0,
      }
      setColleges([...colleges, newCollege])
      setNewCollegeName("")
    }
  }

  // Function to handle status toggle
  const toggleStatus = (collegeId: string) => {
    setColleges((prevColleges) =>
      prevColleges.map((college) => {
        // Destructure the college object for better readability
        const { id, progress } = college;

        // Check if the current college is the one being updated
        if (id === collegeId) {
          // Return a new college object with the updated progress
          return { 
            ...college, 
            progress: statusProgression[progress as keyof typeof statusProgression] as "not-started" | "in-progress" | "completed" 
          };
        }

        // Return the unchanged college object
        return college;
      })
    );
  };

  // Helper function to get status color
  const getStatusColor = (progress: string) => {
    switch (progress) {
      case "completed":
        return "text-sop-completed"
      case "in-progress":
        return "text-sop-progress"
      default:
        return "text-sop-gray-dark"
    }
  }

  // Helper function to get status text
  const getStatusText = (progress: string) => {
    switch (progress) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In progress"
      default:
        return "Not started"
    }
  }

  return (
    <div className="min-h-screen w-full relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={marbleImage}
          alt="Marble background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Header with logo and profile button */}
      <div className="absolute top-4 left-4 text-2xl font-bold text-white">
        sop.ai
      </div>
      <div className="absolute top-4 right-4">
        <Button className="bg-[#8d77ff] text-white hover:bg-[#7a66e6]">
          Your Profile
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-16">
        {/* Tab Navigation */}
        <div className="flex w-full mt-12">
          <div className="w-1/2 py-6 text-center text-sop-gray-dark text-2xl font-medium">Explore SOPs</div>
          <div className="w-1/2 py-6 text-center text-sop-gray-dark text-2xl font-medium bg-sop-active bg-opacity-70">
            Your SOPs
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* College Cards */}
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white bg-opacity-50 rounded-3xl p-6 flex flex-col justify-between h-64 cursor-pointer shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-[#606060] text-4xl font-semibold">{college.name}</h2>
              <p
                className={`text-2xl ${getStatusColor(college.progress)}`}
                onClick={() => toggleStatus(college.id)}
              >
                {getStatusText(college.progress)}
              </p>
              <div className="mt-4">
                <Link href={`/college/${college.id}`} className="px-4 py-2 bg-[#8d77ff] text-white rounded-full shadow-md hover:bg-[#7a66e6] transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}

          {/* Add New College Input */}
          <div className="bg-white bg-opacity-70 rounded-3xl flex flex-col items-center justify-center h-64 cursor-pointer shadow-lg transition-transform transform hover:scale-105 p-6">
            <Input
              placeholder="Enter college name"
              value={newCollegeName}
              onChange={(e) => setNewCollegeName(e.target.value)}
              className="mb-4"
            />
            <Button onClick={addCollege} className="w-full">
              + Add College
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}