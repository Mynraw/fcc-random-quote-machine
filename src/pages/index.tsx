import React from "react"
import QuoteCard from "@component/components/QuoteCard"

export default function Home() {
  return (
    <main id="quote-box" className="w-full h-full">
      <div className="container mx-auto">
        <section>
          <QuoteCard />
        </section>
      </div>
    </main>
  )
}
