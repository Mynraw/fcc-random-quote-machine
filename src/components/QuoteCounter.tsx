import { useSelector } from "react-redux";

const QuoteCounter = () => {
  const quoteCount = useSelector((state: any) => state.card.count);
  console.log(quoteCount);

  return (
    <div className="text-white flex flex-col items-center gap-y-2 mb-5">
      <p className="text-2xl">You&apos;ve got quoted </p>
      <span className="border-2 border-white rounded-full p-3 text-4xl font-bold">
        {quoteCount}
      </span>
      <p>times!</p>
    </div>
  );
};

export default QuoteCounter;
