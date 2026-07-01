"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";

const durationOptions = [
  { id: "less-than-3-months", label: "Less than 3 months" },
  { id: "3-12-months", label: "3-12 months" },
  { id: "1-3-years", label: "1-3 years" },
  { id: "more-than-3-years", label: "More than 3 years" },
];

export default function DurationQuestion() {
  const [selectedDuration, setSelectedDuration] = useState("");
  const router = useRouter();

  const handleSelectDuration = (id) => {
    const storedGender = window.sessionStorage.getItem("urootsGender");
    const gender = storedGender === "female" ? "female" : "male";

    setSelectedDuration(id);
    const option = durationOptions.find((o) => o.id === id);
    if (option) {
      window.sessionStorage.setItem("urootsDuration", option.label);
    }
    router.push(`/lifestyle/${gender}`, { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen duration-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content duration-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={60}
            questionLabel="Question 6 of 10"
          />

          <div className="question-screen__hero duration-screen__hero">
            <h1 className="question-screen__title duration-screen__title">
              How long has this been going on?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus duration-screen__lotus"
            />

            <p className="question-screen__copy duration-screen__copy">
              This helps us understand your hair better.
            </p>
          </div>

          <ul className="duration-options" aria-label="Duration options">
            {durationOptions.map((option) => {
              const isSelected = selectedDuration === option.id;

              return (
                <li key={option.id} className="duration-options__item">
                  <button
                    type="button"
                    className={`duration-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelectDuration(option.id)}
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

          <p className="question-screen__privacy-note duration-screen__privacy-note">
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
