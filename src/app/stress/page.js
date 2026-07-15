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
  { id: "barely", label: "Barely any" },
  { id: "low", label: "Low" },
  { id: "moderate", label: "Moderate (work, family, etc.)" },
  { id: "high", label: "High" }
];

export default function StressQuestion() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleSelect = (id, label) => {
    setSelected(id);
    window.sessionStorage.setItem("urootsStressLevel", label);
    router.push("/conditions", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={56.25}
            questionLabel="Question 10 of 16"
          />

          <div className="question-screen__hero">
            <h1 className="question-screen__title">
              What&apos;s your typical stress level these days?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />
          </div>

          <ul className="gender-options" aria-label="Stress options">
            {options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <li key={option.id} className="gender-options__item">
                  <button
                    type="button"
                    className={`gender-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelect(option.id, option.label)}
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
