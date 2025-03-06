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
          {/* About You Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">About You</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="location" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="education" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="achievements" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">Your Interests & Goals</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="subjects" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="futureGoals" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="impact" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">Projects, Work & Experience</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="projects" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="workExperience" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">Beyond Academics</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="hobbies" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="leadership" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="competitions" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">Life Experiences & Personal Growth</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="challenges" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="values" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="uniqueTraits" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">Family & Inspirations</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="family" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="familyInfluence" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="inspiration" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="traditions" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
                  19. Do you have any special family traditions or experiences that shaped who you are today?
                </label>
                <Textarea
                  id="traditions"
                  name="traditions"
                  onChange={handleChange}
                  className="w-full bg-white border-sop-pink"
                />
              </div>
            </div>
          </section>
                    {/* Other Details Section */}
                    <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-sop-gray-dark mb-6">Other Details</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="colleges" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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
                <label htmlFor="goodFit" className="block text-lg md:text-xl font-bold text-sop-gray-dark mb-2">
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