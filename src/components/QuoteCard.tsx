import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from "react-icons/fa"

const QuoteCard = () => {
  
  return (
    <div className="px-14 py-8 flex flex-col gap-y-10">
      <div>
        <div className="flex w-[500px]">
        
        <FaQuoteLeft className="w-16 h-9" /> <p className="text-3xl inline whitespace-normal pl-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, quasi?</p>
        </div>
        <p className="text-right">- Lorem, ipsum.</p>
      </div>
      <div className="flex items-center justify-between">
      <div className="flex">
      <FaTwitterSquare className="w-10 h-10" />
      <FaTumblrSquare className="w-10 h-10" />
      </div>
      <div>
        <button className="capitalize px-4 py-1.5 bg-white rounded-[4px]">new quote</button>
      </div>
      </div>
    </div>
  )
}

export default QuoteCard