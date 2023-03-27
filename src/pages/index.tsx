import React from "react";
import { useSelector } from "react-redux";
import QuoteCard from "@component/components/QuoteCard";
import Footer from "@component/components/Footer";

export default function Home() {
  const theme = useSelector((state: any) => state.card.palette);

  return (
    <main
      id="quote-box"
      className="grid place-items-center w-screen h-screen transition-all"
      style={{ backgroundColor: theme }}
    >
      <div className="container m-auto grid place-items-center">
        <QuoteCard />
        <Footer />
      </div>
    </main>
  );
}
