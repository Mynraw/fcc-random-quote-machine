import { useDispatch, useSelector } from "react-redux";
import { countQuotes, themePalette } from "../redux/quoteSlice";
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from "react-icons/fa";
import { colorPalette } from "../styles/colorPalette";

const QuoteCard = () => {
  const dispatch = useDispatch();
  const palette = useSelector((state: any) => state.card.palette);

  const handleClick = () => {
    dispatch(themePalette(colorPalette[Math.floor(Math.random() * 10)]));
  };

  return (
    <section className="w-fit rounded-lg bg-white">
      <div
        className="px-14 py-8 flex flex-col gap-y-10 text-[${palette}] transition-all"
        style={{
          color: palette,
        }}
      >
        <div>
          <div className="flex w-[500px">
            <FaQuoteLeft className="w-16 h-9" />
            <p className="text-3xl inline whitespace-normal pl-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
              quasi?
            </p>
          </div>
          <p className="text-right">- Lorem, ipsum.</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <FaTwitterSquare className="w-10 h-10" />
            <FaTumblrSquare className="w-10 h-10" />
          </div>
          <div>
            <button
              onClick={handleClick}
              type="button"
              className="capitalize px-4 py-1.5 bg-white rounded-[4px] border-2"
              style={{
                borderColor: palette,
              }}
            >
              new quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCard;
