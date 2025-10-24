import styles from "./Faq.module.css";

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}>
      <div className={styles.questionHeader} onClick={onToggle}>
        <h3 className={styles.question}>{faq.question}</h3>
        <span className={styles.icon}></span>
      </div>
      <div className={styles.answerContainer}>
        <p className={styles.answer}>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
