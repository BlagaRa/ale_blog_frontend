import React from "react"

export default function PrivacyPolicy() {
  return (
    <div className="mt-20">

      <h1 className="font-serif bg-bfirst text-4xl text-center py-5 border-t-2 border-b-2">
        Privacy Policy
      </h1>

      <div className="bg-bsecond flex justify-center">
        <div className="max-w-4xl p-10 font-lora leading-relaxed flex flex-col gap-6">

          <p>
            Your privacy is important to us. This website collects limited
            personal information only when you voluntarily submit it through
            the contact or collaboration forms.
          </p>

          <h2 className="font-serif text-2xl">Information We Collect</h2>

          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Book details submitted for review</li>
            <li>Any additional message you provide</li>
          </ul>

          <h2 className="font-serif text-2xl">How We Use Your Information</h2>

          <p>
            The information provided is used only for communication regarding
            collaboration requests, book reviews, or inquiries sent through
            this website.
          </p>

          <p>
            Your data will never be sold or shared with third parties unless
            required by law.
          </p>

          <h2 className="font-serif text-2xl">Data Security</h2>

          <p>
            We take reasonable measures to protect your personal data and
            restrict access only to authorized administrators.
          </p>

          <h2 className="font-serif text-2xl">Your Rights</h2>

          <p>
            You have the right to request access, correction, or deletion of
            your personal data at any time by contacting us through the contact
            page.
          </p>

        </div>
      </div>

    </div>
  )
}