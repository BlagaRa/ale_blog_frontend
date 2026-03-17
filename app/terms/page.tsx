import React from "react"

export default function TermsConditions() {
  return (
    <div className="mt-20">

      <h1 className="font-serif bg-bfirst text-4xl text-center py-5 border-t-2 border-b-2">
        Terms and Conditions
      </h1>

      <div className="bg-bsecond flex justify-center">
        <div className="max-w-4xl p-10 font-lora leading-relaxed flex flex-col gap-6">

          <p>
            By accessing and using this website you agree to comply with the
            following terms and conditions.
          </p>

          <h2 className="font-serif text-2xl">Content Ownership</h2>

          <p>
            All content on this website including reviews, articles, images,
            and design elements belongs to the website owner unless otherwise
            stated.
          </p>

          <p>
            Content may not be copied, reproduced, or distributed without
            permission.
          </p>

          <h2 className="font-serif text-2xl">Book Reviews</h2>

          <p>
            Reviews published on this website represent personal opinions and
            experiences.
          </p>

          <p>
            Submitting a book for review does not guarantee that the book will
            be reviewed or featured.
          </p>

          <h2 className="font-serif text-2xl">External Links</h2>

          <p>
            This website may contain links to external websites. We are not
            responsible for the content or privacy policies of those websites.
          </p>

          <h2 className="font-serif text-2xl">Changes to Terms</h2>

          <p>
            These terms may be updated at any time. Continued use of the
            website indicates acceptance of the updated terms.
          </p>

        </div>
      </div>

    </div>
  )
}