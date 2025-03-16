"use client"

import { useState } from "react"
import marbleImage from "../marble_swish.jpg";
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
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Background Image with proper positioning */}
      <div className="fixed inset-0 z-0">
        <Image
          src={marbleImage}
          alt="Marble background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Header with Tab Navigation - Responsive design */}
      <header className="relative z-10 w-full bg-white bg-opacity-07 py-4 px-4 sm:px-6 shadow-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">sop.ai</div>

          {/* Tab Navigation - Centered and responsive */}
          <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
            <div className="py-2 px-3 sm:px-4 md:px-6 text-sop-gray-dark text-base sm:text-lg font-medium cursor-pointer hover:bg-gray-100 rounded-lg transition-colors">
              Explore SOPs
            </div>
            <div className="py-2 px-3 sm:px-4 md:px-6 text-sop-gray-dark text-base sm:text-lg font-medium bg-sop-active bg-opacity-70 rounded-lg cursor-pointer transition-colors">
              Your SOPs
            </div>
          </div>

          {/* Profile Button */}
          <Button className="bg-[#8d77ff] text-white hover:bg-[#7a66e6] w-full sm:w-auto">
            Your Profile
          </Button>
        </div>
      </header>

      {/* Main Content with proper spacing */}
      <main className="relative z-10 flex-1 container mx-auto mt-6 sm:mt-8 px-4 pb-12">        
        {/* Cards Grid with enhanced responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
          {/* College Cards */}
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-56 sm:h-64 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-gray-700 text-xl sm:text-2xl font-semibold line-clamp-2">{college.name}</h2>
              
              <div className="mt-2">
                <p
                  className={`text-base sm:text-lg ${getStatusColor(college.progress)} font-medium cursor-pointer`}
                  onClick={() => toggleStatus(college.id)}
                >
                  {getStatusText(college.progress)}
                </p>
              </div>
              
              <div className="mt-auto pt-4">
                <Link 
                  href={`/college/${college.id}`} 
                  className="inline-block px-3 sm:px-4 py-2 bg-[#8d77ff] text-white rounded-full shadow-sm hover:bg-[#7a66e6] transition-colors text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}

          {/* Add New College Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center h-56 sm:h-64 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-3 sm:mb-4">Add New College</h3>
            <Input
              placeholder="Enter college name"
              value={newCollegeName}
              onChange={(e) => setNewCollegeName(e.target.value)}
              className="mb-3 sm:mb-4 w-full"
            />
            <Button 
              onClick={addCollege} 
              className="w-full bg-[#8d77ff] hover:bg-[#7a66e6]"
              disabled={!newCollegeName.trim()}
            >
              + Add College
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}