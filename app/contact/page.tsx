'use client'

import { useState } from "react"

const GEN_TYPES = [
  "ROMANCE",
  "ACTION",
  "FICTION",
  "THRILLER",
  "PERSONAL_DEVELOPMENT",
  "FOR_KIDS",
  "HISTORICAL",
  "HORROR"
]

const CONTACT_REASONS = [
  "BOOK_REVIEW",
  "MERCH_REVIEW",
  "BLOG_TOUR",
  "GENERAL_QUESTION",
  "NEW_BLOGGER",
  "NOT_LISTED"
]

export default function ContactPage() {

  const [form, setForm] = useState({
    bookTitle: "",
    bookDescription: "",
    gen: "ROMANCE",
    personName: "",
    email: "",
    phoneNumber: "",
    message: "",
    reasonOfContact: "GENERAL_QUESTION",
    reviewPolicyCheck: false
  })

  const [isLoading,setIsLoading] = useState(false)
  const [success,setSuccess] = useState(false)
  const [error,setError] = useState("")

  const handleChange = (e:any) => {
    const {name,value,type,checked} = e.target

    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    setError("")
    setSuccess(false)

    if(!form.reviewPolicyCheck){
      setError("You must accept the review policy.")
      return
    }

    try{
      setIsLoading(true)


      const res = await fetch("http://localhost:5000/api/collaboration",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(form)
      })


      const data = await res.json()

      if(!res.ok){
        throw new Error(data.message || "Something went wrong")
      }

      setSuccess(true)

      setForm({
        bookTitle: "",
        bookDescription: "",
        gen: "ROMANCE",
        personName: "",
        email: "",
        phoneNumber: "",
        message: "",
        reasonOfContact: "GENERAL_QUESTION",
        reviewPolicyCheck: false
      })

    }catch(err:any){

      setError(err.message)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-20">

      <h1 className="font-serif bg-bfirst text-4xl text-center py-5 border-t-2 border-b-2">
        Contact & Collaboration
      </h1>

      <div className="bg-bsecond flex flex-col lg:flex-row">

        {/* LEFT INFO PANEL */}

        <div className="flex flex-col lg:w-1/3 bg-accent text-white p-10 gap-6 border-r-2 border-first">

          <h2 className="font-serif text-2xl">
            Work With Me
          </h2>

          <p className="font-lora text-md leading-relaxed">
            If you are an author, blogger or brand and want to collaborate
            with me, feel free to send a request. I review books, host blog
            tours and support new bloggers.
          </p>

          <p className="font-lora text-md leading-relaxed">
            Every request is carefully reviewed. Please provide as much
            information as possible about your book or project.
          </p>

          <div className="font-lora text-sm opacity-80">
            Typical response time: 24-72 hours
          </div>

        </div>

        {/* FORM */}

        <div className="flex-1 p-8 lg:p-14">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 max-w-3xl"
          >

            {/* PERSON NAME */}

            <input
              name="personName"
              value={form.personName}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="border-2 border-first bg-bfirst p-3 font-lora"
            />

            {/* EMAIL */}

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="border-2 border-first bg-bfirst p-3 font-lora"
            />

            {/* PHONE */}

            <input
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
              className="border-2 border-first bg-bfirst p-3 font-lora"
            />

            {/* REASON */}

            <select
              name="reasonOfContact"
              value={form.reasonOfContact}
              onChange={handleChange}
              className="border-2 border-first bg-bfirst p-3 font-lora"
            >
              {CONTACT_REASONS.map(reason => (
                <option key={reason} value={reason}>
                  {reason.replace("_"," ")}
                </option>
              ))}
            </select>

            {/* BOOK TITLE */}

            <input
              name="bookTitle"
              value={form.bookTitle}
              onChange={handleChange}
              placeholder="Book Title"
              required
              className="border-2 border-first bg-bfirst p-3 font-lora"
            />

            {/* GEN */}

            <select
              name="gen"
              value={form.gen}
              onChange={handleChange}
              className="border-2 border-first bg-bfirst p-3 font-lora"
            >
              {GEN_TYPES.map(gen => (
                <option key={gen} value={gen}>
                  {gen.replace("_"," ")}
                </option>
              ))}
            </select>

            {/* BOOK DESCRIPTION */}

            <textarea
              name="bookDescription"
              value={form.bookDescription}
              onChange={handleChange}
              placeholder="Describe the book..."
              required
              rows={5}
              className="border-2 border-first bg-bfirst p-3 font-lora"
            />

            {/* MESSAGE */}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Additional message (optional)"
              rows={4}
              className="border-2 border-first bg-bfirst p-3 font-lora"
            />

            {/* CHECKBOX */}

            <label className="flex gap-3 items-center font-lora text-sm">

              <input
                type="checkbox"
                name="reviewPolicyCheck"
                checked={form.reviewPolicyCheck}
                onChange={handleChange}
              />

              I confirm I read the review policy

            </label>

            {/* ERROR */}

            {error && (
              <div className="text-red-600 font-lora">
                {error}
              </div>
            )}

            {/* SUCCESS */}

            {success && (
              <div className="text-green-700 font-lora">
                Request sent successfully!
              </div>
            )}

            {/* BUTTON */}

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-fit"
            >
              {isLoading ? "Sending..." : "Send Request"}
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}