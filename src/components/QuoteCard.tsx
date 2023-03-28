import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { countQuotes, themePalette } from "../redux/quoteSlice";
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from "react-icons/fa";
import { colorPalette } from "../pages/api/colorPalette";

const api = "https://type.fit/api/quotes";

const QuoteCard = () => {
  const dispatch = useDispatch();
  const palette = useSelector((state: any) => state.card.palette);
  const [randomQuote, setRandomQuote] = useState({ text: "", author: "" });

  const handleClick = async () => {
    dispatch(themePalette(colorPalette[Math.floor(Math.random() * 10)]));
    dispatch(countQuotes());

    getRandomQuote();
  };

  const getQuotes = async () => {
    const res = await fetch(api);
    const quotes = await res.json();

    return quotes;
  };

  const getRandomQuote = async () => {
    const tempQuoteArray = await getQuotes().then((res) => res);
    setRandomQuote(
      tempQuoteArray[Math.floor(Math.random() * tempQuoteArray.length)]
    );
  };

  useEffect(() => {
    getQuotes();

    // for init as well
    getRandomQuote();
  }, []);

  return (
    <section className="w-fit rounded-lg bg-white">
      <div
        className="px-14 py-8 flex flex-col gap-y-10 transition-all"
        style={{
          color: palette,
        }}
      >
        <>
          <div className="flex w-[500px]">
            <FaQuoteLeft className="w-16 h-9" />
            <p className="text-3xl inline whitespace-normal pl-2">
              {randomQuote.text}
            </p>
          </div>
          <p className="text-right my-2">
            - {randomQuote.author ? randomQuote.author : "Anonymous"}
          </p>
        </>
        <div className="flex items-center justify-between">
          <div className="flex">
            <Link
              className="twitter-share-button"
              target={"_blank"}
              href={"https://twitter.com/intent/tweet?text=Hello%20world"}
            >
              <FaTwitterSquare className="w-10 h-10" />
            </Link>
            <FaTumblrSquare className="w-10 h-10" />
          </div>
          <>
            <button
              onClick={handleClick}
              type="button"
              className="capitalize px-4 py-1.5 bg-white rounded-[4px] border-2 shadow-xl text-white hover:opacity-90"
              style={{
                backgroundColor: palette,
                borderColor: palette,
              }}
            >
              new quote
            </button>
          </>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;
