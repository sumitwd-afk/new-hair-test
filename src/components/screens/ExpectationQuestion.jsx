"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";

const expectationOptions = [
  { id: "stop-hair-fall", label: "Stop my hair fall" },
  { id: "regrow-thinning", label: "Regrow thinning areas" },
  { id: "maintain", label: "Maintain what I have" },
  { id: "stronger-hair", label: "Overall stronger, healthier hair" },
];

export default function ExpectationQuestion() {
  const [selectedExpectation, setSelectedExpectation] = useState("");
  const router = useRouter();

  const handleSelectExpectation = (id) => {
    setSelectedExpectation(id);
    const option = expectationOptions.find((o) => o.id === id);
    if (option) {
      window.sessionStorage.setItem("urootsExpectation", option.label);
    }
    router.push("/upload-picture");
  };

  return (
    <section className="screen-gradient-bg question-screen expectation-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content expectation-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={90}
            questionLabel="Question 9 of 10"
          />

          <div className="question-screen__hero expectation-screen__hero">
            <h1 className="question-screen__title">
              What would you love to see in 3 months?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />
          </div>

          <ul className="expectation-options" aria-label="Expectation options">
            {expectationOptions.map((option) => {
              const isSelected = selectedExpectation === option.id;

              return (
                <li key={option.id} className="expectation-options__item">
                  <button
                    type="button"
                    className={`duration-card expectation-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelectExpectation(option.id)}
                    aria-pressed={isSelected}
                  >
                    <span className="duration-card__check" aria-hidden="true" />
                    <span className="duration-card__label">
                      {option.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="question-screen__privacy-note expectation-screen__privacy-note">
            <Image
              src={badgeIcon}
              alt=""
              aria-hidden="true"
              className="question-screen__privacy-icon"
            />
            Your answer are private and secure.
          </p>
        </div>

        <div className="question-screen__footer">
          <DoctorCapsule />
        </div>
      </div>
    </section>
  );
}
