import { ChevronDown } from "lucide-react";

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-[3px] border-black bg-[#f8c6b3] px-4 py-3 shadow-[4px_4px_0_#000] transform-all duration-300 ease-linear mb-3">
      <button
        className="w-full flex justify-between items-center font-mono font-bold text-xs md:text-base"
        onClick={onToggle}
      >
        <span>{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 md:w-10 md:h-10  transition-transform duration-300 ease-linear ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3 text-xs md:text-base font-mono bg-white border-2 border-black px-3 py-2">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
