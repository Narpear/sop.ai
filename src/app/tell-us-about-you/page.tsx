"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import marbleImage from "@/app/pastel_marble_swirls.jpg"

export default function TellUsAboutYouPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    router.push("/dashboard")
  }

  // Define sections and questions
  const sections = [
    {
      title: "About You",
      questions: [
        { id: "fullName", label: "1. What is your full name? What do you like to be called?", type: "input" },
        { id: "location", label: "2. Where are you from?", type: "input" },
        { id: "education", label: "3. What's your educational background?", type: "textarea" },
        { id: "achievements", label: "4. Any cool academic achievements you're proud of?", type: "textarea" },
      ],
    },
    {
      title: "Your Interests & Goals",
      questions: [
        { id: "subjects", label: "5. What subjects or fields excite you the most? Why?", type: "textarea" },
        { id: "futureGoals", label: "6. What do you see yourself doing in the future?", type: "textarea" },
        { id: "impact", label: "7. If you could make an impact in your field or community, what would it be?", type: "textarea" },
      ],
    },
    {
      title: "Projects, Work & Experience",
      questions: [
        { id: "projects", label: "8. Have you worked on any interesting projects or research? What was it about?", type: "textarea" },
        { id: "workExperience", label: "9. Any internships, jobs, or volunteer work? What did you do, and what did you learn?", type: "textarea" },
      ],
    },
    {
      title: "Beyond Academics",
      questions: [
        { id: "hobbies", label: "10. What do you do for fun outside of studies?", type: "textarea" },
        { id: "leadership", label: "11. Have you taken on any leadership roles? What was that experience like?", type: "textarea" },
        { id: "competitions", label: "12. Any competitions or events you've participated in that meant something to you?", type: "textarea" },
      ],
    },
    {
      title: "Life Experiences & Personal Growth",
      questions: [
        { id: "challenges", label: "13. Have you faced any big challenges or setbacks? How did you deal with them?", type: "textarea" },
        { id: "values", label: "14. What values or beliefs are really important to you?", type: "textarea" },
        { id: "uniqueTraits", label: "15. What's something unique or unexpected about you that people might not know?", type: "textarea" },
      ],
    },
    {
      title: "Family & Inspirations",
      questions: [
        { id: "family", label: "16. Can you tell me a little about your family?", type: "textarea" },
        { id: "familyInfluence", label: "17. Has your family influenced your academic or career choices in any way?", type: "textarea" },
        { id: "inspiration", label: "18. Is there a family member who inspires you? What have you learned from them?", type: "textarea" },
        { id: "traditions", label: "19. Do you have any special family traditions or experiences that shaped who you are today?", type: "textarea" },
      ],
    },
    {
      title: "Other Details",
      questions: [
        { id: "colleges", label: "20. Which colleges/universities are you most interested in? Why?", type: "textarea" },
        { id: "goodFit", label: "21. Why do you think you'd be a great fit for them?", type: "textarea" },
      ],
    },
  ];

  return (
    <div 
      className="min-h-screen bg-gradient-sop p-4 md:p-8 relative overflow-auto"
      style={{
        backgroundImage: `url(${marbleImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-sop-gray-dark mb-4">Tell us about you.</h1>
          <p className="text-base md:text-lg text-sop-gray-dark/80 italic font-medium">
            P.S. Be as detailed and accurate as you can with these, because this is the info we use to help you write
            your SOP - no pressure, though, just answer whatever feels right!
          </p>
          <p className="text-base md:text-lg text-sop-gray-dark/80 italic font-medium mt-2">
            P.P.S Don&apos;t worry, your data is safe with us!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">{section.title}</h2>
              <div className="space-y-6">
                {section.questions.map((question) => (
                  <div key={question.id}>
                    <label htmlFor={question.id} className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
                      {question.label}
                    </label>
                    {question.type === "input" ? (
                      <Input
                        id={question.id}
                        name={question.id}
                        onChange={handleChange}
                        className="w-full bg-white border-sop-pink"
                      />
                    ) : (
                      <Textarea
                        id={question.id}
                        name={question.id}
                        onChange={handleChange}
                        className="w-full bg-white border-sop-pink"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
          {/* Final Question */}
          <div>
            <label htmlFor="additional" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
              22. Anything else you&apos;d like to share? (Random fun facts totally welcome!)
            </label>
            <Textarea
              id="additional"
              name="additional"
              onChange={handleChange}
              className="w-full bg-white border-sop-pink"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <Button
              type="submit"
              variant="default"
              className="px-8 py-2 rounded-full"
            >
              Start writing
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}