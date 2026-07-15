"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";

const options = [
  { id: "none", label: "None" },
  { id: "asthma", label: "Asthma" },
  { id: "sinus", label: "Sinus issues" }
];

export default function ConditionsQuestion() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    if (id === "none") {
      setSelected(["none"]);
      return;
    }
    setSelected((prev) => {
      const clean = prev.filter((item) => item !== "none");
      if (clean.includes(id)) {
        return clean.filter((item) => item !== id);
      }
      return [...clean, id];
    });
  };

  const handleNext = () => {
    if (selected.length === 0) return;
    const labels = selected.map((id) => options.find((o) => o.id === id).label);
    window.sessionStorage.setItem("urootsHealthConditions", labels.join(", "));
    router.push("/bowel", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={62.5}
            questionLabel="Question 11 of 16"
          />

          <div className="question-screen__hero">
            <h1 className="question-screen__title">
              Are you managing any of these right now?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />
            <p className="question-screen__copy">Select all that apply</p>
          </div>

          <ul className="gender-options" aria-label="Health condition options">
            {options.map((option) => {
              const isSelected = selected.includes(option.id);
              return (
                <li key={option.id} className="gender-options__item">
                  <button
                    type="button"
                    className={`gender-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelect(option.id)}
                    style={{ minHeight: "10rem" }}
                  >
                    <span className="gender-card__label" style={{ fontSize: "1.8rem", textAlign: "center", lineHeight: "1.3" }}>
                      {option.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="question-screen__next-wrap">
            <button
              type="button"
              className="question-screen__next-btn"
              onClick={handleNext}
              disabled={selected.length === 0}
            >
              Next
            </button>
          </div>

          <p className="question-screen__privacy-note">
            <Image
              src={badgeIcon}
              alt=""
              aria-hidden="true"
              className="question-screen__privacy-icon"
            />
            Your answers are private and secure.
          </p>
        </div>

        <div className="question-screen__footer">
          <DoctorCapsule />
        </div>
      </div>
    </section>
  );
}
