"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SOPForm() {
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
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-sop p-4 md:p-8 relative overflow-auto">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-semibold text-sop-gray-dark mb-2">Tell us about you.</h1>
          <p className="text-sm text-sop-gray-dark/80 italic">
            P.S. Be as detailed and accurate as you can with these, because this is the info we use to help you write
            your SOP - no pressure, though, just answer whatever feels right!
          </p>
          <p className="text-sm text-sop-gray-dark/80 italic mt-2">
            P.P.S Don&apos;t worry, your data is safe with us!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* About You Section */}
          <section>
            <h2 className="text-xl font-medium text-sop-gray-dark mb-4">About You</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sop-gray-dark mb-1">
                  1. What is your full name? What do you like to be called?
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sop-gray-dark mb-1">
                  2. Where are you from?
                </label>
                <Input
                  id="location"
                  name="location"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="education" className="block text-sop-gray-dark mb-1">
                  3. What&apos;s your educational background? (Schools/colleges you&apos;ve attended, major subjects,
                  favorite classes, etc.)
                </label>
                <Textarea
                  id="education"
                  name="education"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="achievements" className="block text-sop-gray-dark mb-1">
                  4. Any cool academic achievements you&apos;re proud of? (Top grades, awards, scholarships, research,
                  etc.)
                </label>
                <Textarea
                  id="achievements"
                  name="achievements"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>

          {/* Your Interests & Goals Section */}
          <section>
            <h2 className="text-xl font-medium text-sop-gray-dark mb-4">Your Interests & Goals</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="subjects" className="block text-sop-gray-dark mb-1">
                  5. What subjects or fields excite you the most? Why?
                </label>
                <Textarea
                  id="subjects"
                  name="subjects"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="futureGoals" className="block text-sop-gray-dark mb-1">
                  6. What do you see yourself doing in the future? (Short-term goals in the next 5 years, long-term
                  dreams for 10-20 years down the line.)
                </label>
                <Textarea
                  id="futureGoals"
                  name="futureGoals"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="impact" className="block text-sop-gray-dark mb-1">
                  7. If you could make an impact in your field or community, what would it be?
                </label>
                <Textarea
                  id="impact"
                  name="impact"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>

          {/* Projects, Work & Experience Section */}
          <section>
            <h2 className="text-xl font-medium text-sop-gray-dark mb-4">Projects, Work & Experience</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="projects" className="block text-sop-gray-dark mb-1">
                  8. Have you worked on any interesting projects or research? What was it about?
                </label>
                <Textarea
                  id="projects"
                  name="projects"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="workExperience" className="block text-sop-gray-dark mb-1">
                  9. Any internships, jobs, or volunteer work? What did you do, and what did you learn?
                </label>
                <Textarea
                  id="workExperience"
                  name="workExperience"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>

          {/* Beyond Academics Section */}
          <section>
            <h2 className="text-xl font-medium text-sop-gray-dark mb-4">Beyond Academics</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="hobbies" className="block text-sop-gray-dark mb-1">
                  10. What do you do for fun outside of studies? (hobbies, clubs, sports, music, gaming, anything!)
                </label>
                <Textarea
                  id="hobbies"
                  name="hobbies"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="leadership" className="block text-sop-gray-dark mb-1">
                  11. Have you taken on any leadership roles (club leader, event organizer, team captain)? What was that
                  experience like?
                </label>
                <Textarea
                  id="leadership"
                  name="leadership"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="competitions" className="block text-sop-gray-dark mb-1">
                  12. Any competitions or events you&apos;ve participated in that meant something to you?
                </label>
                <Textarea
                  id="competitions"
                  name="competitions"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>

          {/* Life Experiences & Personal Growth Section */}
          <section>
            <h2 className="text-xl font-medium text-sop-gray-dark mb-4">Life Experiences & Personal Growth</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="challenges" className="block text-sop-gray-dark mb-1">
                  13. Have you faced any big challenges or setbacks? How did you deal with them?
                </label>
                <Textarea
                  id="challenges"
                  name="challenges"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="values" className="block text-sop-gray-dark mb-1">
                  14. What values or beliefs are really important to you?
                </label>
                <Textarea
                  id="values"
                  name="values"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="uniqueTraits" className="block text-sop-gray-dark mb-1">
                  15. What&apos;s something unique or unexpected about you that people might not know?
                </label>
                <Textarea
                  id="uniqueTraits"
                  name="uniqueTraits"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>

          {/* Family & Inspirations Section */}
          <section>
            <h2 className="text-xl font-medium text-sop-gray-dark mb-4">Family & Inspirations</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="family" className="block text-sop-gray-dark mb-1">
                  16. Can you tell me a little about your family? (Who you live with, any siblings, etc.)
                </label>
                <Textarea
                  id="family"
                  name="family"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="familyInfluence" className="block text-sop-gray-dark mb-1">
                  17. Has your family influenced your academic or career choices in any way?
                </label>
                <Textarea
                  id="familyInfluence"
                  name="familyInfluence"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="inspiration" className="block text-sop-gray-dark mb-1">
                  18. Is there a family member who inspires you? What have you learned from them?
                </label>
                <Textarea
                  id="inspiration"
                  name="inspiration"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="traditions" className="block text-sop-gray-dark mb-1">
                  19. Do you have any special family traditions or experiences that shaped who you are today?
                </label>
                <Textarea
                  id="traditions"
                  name="traditions"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="colleges" className="block text-sop-gray-dark mb-1">
                  20. Which colleges/universities are you most interested in? Why?
                </label>
                <Textarea
                  id="colleges"
                  name="colleges"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>

              <div>
                <label htmlFor="goodFit" className="block text-sop-gray-dark mb-1">
                  21. Why do you think you&apos;d be a great fit for them?
                </label>
                <Textarea
                  id="goodFit"
                  name="goodFit"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>

          {/* Final Question */}
          <div>
            <label htmlFor="additional" className="block text-sop-gray-dark mb-1">
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
          <div className="text-center">
            <Button
              type="submit"
              className="bg-sop-pink hover:bg-sop-pink/90 text-sop-gray-dark px-8 py-2 rounded-full"
            >
              Start writing
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

