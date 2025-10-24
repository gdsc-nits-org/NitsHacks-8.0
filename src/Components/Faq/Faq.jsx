import { useState } from "react";
import FaqItem from "./FaqItem";
import styles from "./Faq.module.css";

const faqsData = [
  {
    id: 1,
    question: "Q. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit?",
    answer:
      "A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "Q. Lorem Ipsum Dolor Sit Amet, Consectetuer Adipiscing Elit?",
    answer:
      "A. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      {/* Side Decorations - Pokeballs */}
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.sideDecoration} ${styles.sideLeft}`}
      />
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.sideDecoration} ${styles.sideRight}`}
      />

      {/* Middle Decorations - Pokeballs */}
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.middleDecoration} ${styles.middleTop}`}
      />
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.middleDecoration} ${styles.middleBottom}`}
      />

      {/* Static pokeballs */}
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.funkyElement} ${styles.funky1}`}
      />
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.funkyElement} ${styles.funky2}`}
      />
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.funkyElement} ${styles.funky3}`}
      />
      <img
        src="/images/Group.png"
        alt="Pokeball"
        className={`${styles.funkyElement} ${styles.funky4}`}
      />

      <div className={styles.container}>
        <h1 className={styles.title}>FAQs</h1>

        <div className={styles.faqList}>
          {faqsData.map((faq) => (
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
