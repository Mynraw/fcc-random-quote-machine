import React from "react"
import QuoteCard from "@component/components/QuoteCard"
import Footer from "@component/components/Footer"

export default function Home() {
  return (
    <main id="quote-box" className="grid place-items-center w-screen h-screen">
      <div className="container m-auto grid place-items-center">
          <QuoteCard />
          <Footer />
      </div>
    </main>
  )
}
