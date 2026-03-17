import React from "react"

export default function CookiePolicy() {
  return (
    <div className="mt-20">

      <h1 className="font-serif bg-bfirst text-4xl text-center py-5 border-t-2 border-b-2">
        Cookie Policy
      </h1>

      <div className="bg-bsecond flex justify-center">
        <div className="max-w-4xl p-10 font-lora leading-relaxed flex flex-col gap-6">

          <p>
            This website uses cookies to improve user experience and analyze
            how visitors interact with the website.
          </p>

          <h2 className="font-serif text-2xl">What Are Cookies</h2>

          <p>
            Cookies are small text files stored on your device that help the
            website remember user preferences and improve functionality.
          </p>

          <h2 className="font-serif text-2xl">Types of Cookies We Use</h2>

          <ul className="list-disc pl-6">
            <li>Essential cookies required for the website to function</li>
            <li>Performance cookies used to understand website traffic</li>
            <li>Preference cookies that store user settings</li>
          </ul>

          <h2 className="font-serif text-2xl">Managing Cookies</h2>

          <p>
            You can control or disable cookies through your browser settings.
            Please note that disabling cookies may affect some functionality of
            the website.
          </p>

        </div>
      </div>

    </div>
  )
}