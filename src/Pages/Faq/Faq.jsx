import { useState } from "react";
import FaqItem from "./FaqItem";
import styles from "./Faq.module.css";
import FAQs from "../../assets/faq.json";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[url('/images/faqBG.png')] bg-cover bg-center bg-fixed py-10 px-4 md:py-20 overflow-x-hidden">
      <div className="flex flex-col items-center max-w-4xl md:max-w-5xl mx-auto px-4">
        <h1 className={styles.title}>FAQs</h1>

        <div className="w-full flex flex-col gap-2">
          {FAQs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
