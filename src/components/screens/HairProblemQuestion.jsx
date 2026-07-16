"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";

// Male Stage images
import stage1Image from "@/images/Stage1.png";
import stage2Image from "@/images/Stage2.png";
import stage3Image from "@/images/Stage3.png";
import stage4Image from "@/images/Stage4.png";
import stage5Image from "@/images/Stage5.png";
import stage6Image from "@/images/Stage6.png";

// Female Stage images
import femaleStage1Image from "@/images/female Stage 1.png";
import femaleStage2Image from "@/images/female Stage 2.png";
import femaleStage3Image from "@/images/female Stage 3.png";

const concernOptionsByGender = {
  male: [
    { id: "stage-1", label: "Stage 1", image: stage1Image },
    { id: "stage-2", label: "Stage 2", image: stage2Image },
    { id: "stage-3", label: "Stage 3", image: stage3Image },
    { id: "stage-4", label: "Stage 4", image: stage4Image },
    { id: "stage-5", label: "Stage 5", image: stage5Image },
    { id: "stage-6", label: "Stage 6", image: stage6Image },
  ],
  female: [
    { id: "female-stage-1", label: "Stage 1", image: femaleStage1Image },
    { id: "female-stage-2", label: "Stage 2", image: femaleStage2Image },
    { id: "female-stage-3", label: "Stage 3", image: femaleStage3Image },
  ],
};

export default function HairProblemQuestion({ gender }) {
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const normalizedGender = gender === "female" ? "female" : "male";
  const options = concernOptionsByGender[normalizedGender];

  const handleSelectConcern = (id) => {
    // Single choice selection for both male and female
    setSelectedConcerns([id]);
    const matched = options.find((o) => o.id === id);
    if (matched) {
      window.sessionStorage.setItem("urootsPattern", matched.label);
    }
    
    const ageVal = searchParams.get("age");
    if (ageVal) window.sessionStorage.setItem("urootsAge", ageVal);
    window.sessionStorage.setItem("urootsGender", normalizedGender);
    
    // Auto redirect to family history step
    router.push("/family", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen hair-problem-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content hair-problem-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={35.3}
            questionLabel="Question 6 of 17"
          />

          <div className="question-screen__hero hair-problem-screen__hero">
            <h1 className="question-screen__title hair-problem-screen__title">
              Which of these stages looks closest to your current pattern?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus hair-problem-screen__lotus"
            />

            <p className="question-screen__copy hair-problem-screen__copy">
              This helps us understand your hair better.
            </p>
          </div>

          <ul className="hair-problem-options" aria-label="Hair concerns">
            {options.map((option) => {
              const isSelected = selectedConcerns.includes(option.id);

              return (
                <li key={option.id} className="hair-problem-options__item">
                  <button
                    type="button"
                    className={`hair-problem-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelectConcern(option.id)}
                    aria-pressed={isSelected}
                  >
                    <Image
                      src={option.image}
                      alt=""
                      aria-hidden="true"
                      className="hair-problem-card__image"
                    />
                    <span className="hair-problem-card__label">
                      {option.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="question-screen__privacy-note hair-problem-screen__privacy-note">
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
