import { ChevronDown } from "lucide-react";

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-[3px] border-black bg-[#f8c6b3] px-4 py-3 shadow-[4px_4px_0_#000] transition-all duration-300 ease-in-out mb-3 will-change-auto">
      <button
        className="w-full flex justify-between items-center gap-2 font-mono font-bold text-xs md:text-base"
        onClick={onToggle}
      >
        <span className="text-left">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-xs md:text-base font-mono bg-white border-2 border-black px-3 py-2">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
