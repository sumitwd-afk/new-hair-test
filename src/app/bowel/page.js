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
  { id: "normal", label: "No issues, or only once in a while" },
  { id: "infrequent", label: "Infrequent - fewer than 3 times a week" },
  { id: "unable", label: "Often unable to pass stool" },
  { id: "ibs", label: "Diagnosed with IBS (irritable bowel syndrome)" }
];

export default function BowelQuestion() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleSelect = (id, label) => {
    setSelected(id);
    window.sessionStorage.setItem("urootsBowelMovements", label);
    router.push("/gas");
  };

  return (
    <section className="screen-gradient-bg question-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={76.47}
            questionLabel="Question 13 of 17"
          />

          <div className="question-screen__hero">
            <h1 className="question-screen__title">
              How regular are your bowel movements?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />
          </div>

          <ul className="new-step-options" aria-label="Bowel movement options">
            {options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <li key={option.id} className="new-step-item">
                  <button
                    type="button"
                    className={`new-step-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelect(option.id, option.label)}
                  >
                    <span className="new-step-card__label">
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
