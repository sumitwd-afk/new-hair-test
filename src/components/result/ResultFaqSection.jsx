"use client";

import { useState } from "react";

export default function ResultFaqSection({ faqs }) {
  const [activeFaqId, setActiveFaqId] = useState(faqs[0]?.id ?? null);

  const handleToggleFaq = (faqId) => {
    setActiveFaqId((currentFaqId) =>
      currentFaqId === faqId ? null : faqId,
    );
  };

  return (
    <section className="result-faq-wrap">
      <h3>Frequently Asked Questions</h3>

      <ul className="result-faq-list">
        {faqs.map((faq) => {
          const isActive = activeFaqId === faq.id;

          return (
            <li key={faq.id} className={isActive ? "active" : ""}>
              <button
                type="button"
                className="faq-question"
                onClick={() => handleToggleFaq(faq.id)}
                aria-expanded={isActive}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="faq-question__text">{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isActive ? "−" : "+"}
                </span>
              </button>

              {isActive ? (
                <div className="faq-answer" id={`faq-answer-${faq.id}`}>
                  <p>{faq.answer}</p>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
