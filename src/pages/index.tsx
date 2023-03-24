import React from "react"
import QuoteCard from "@component/components/QuoteCard"

export default function Home() {
  return (
    <main id="quote-box" className="grid place-items-center w-screen h-screen">
      <div className="container m-auto grid place-items-center">
        <section className="bg-orange-500 w-fit rounded-lg">
          <QuoteCard />
        </section>
        <footer className="text-center">asd</footer>
      </div>
    </main>
  )
}
