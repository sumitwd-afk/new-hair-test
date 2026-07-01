"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";
import hairTypeMildImage from "@/images/hair-type-mild.png";
import hairTypeModerateImage from "@/images/hair-type-moderate.png";
import hairTypeSignificantImage from "@/images/hair-type-significant.png";
import hairTypeSevereImage from "@/images/hair-type-severe.png";

const hairTypeOptions = [
  {
    id: "mild",
    label: "Mild",
    description: "A few strands than usual",
    image: hairTypeMildImage,
  },
  {
    id: "moderate",
    label: "Moderate",
    description: "Visible thinning or fall",
    image: hairTypeModerateImage,
  },
  {
    id: "significant",
    label: "Significant",
    description: "Noticeable bald areas fall",
    image: hairTypeSignificantImage,
  },
  {
    id: "severe",
    label: "Severe",
    description: "Extensive thinning",
    image: hairTypeSevereImage,
  },
];

export default function HairTypeQuestion() {
  const [selectedHairType, setSelectedHairType] = useState("");
  const router = useRouter();

  const handleSelectHairType = (id) => {
    setSelectedHairType(id);
    window.sessionStorage.setItem("urootsHairType", id);
    router.push("/duration", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen hair-type-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content hair-type-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={50}
            questionLabel="Question 5 of 10"
          />

          <div className="question-screen__hero hair-type-screen__hero">
            <h1 className="question-screen__title hair-type-screen__title">
              Which one looks closest to your hair today?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus hair-type-screen__lotus"
            />

            <p className="question-screen__copy hair-type-screen__copy">
              This helps us understand your hair stage.
            </p>
          </div>

          <ul className="hair-type-options" aria-label="Hair type options">
            {hairTypeOptions.map((option) => {
              const isSelected = selectedHairType === option.id;

              return (
                <li key={option.id} className="hair-type-options__item">
                  <button
                    type="button"
                    className={`hair-type-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelectHairType(option.id)}
                    aria-pressed={isSelected}
                  >
                    <Image
                      src={option.image}
                      alt=""
                      aria-hidden="true"
                      className="hair-type-card__image"
                    />
                    <span className="hair-type-card__copy">
                      <span className="hair-type-card__label">
                        {option.label}
                      </span>
                      <span className="hair-type-card__description">
                        {option.description}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="question-screen__privacy-note hair-type-screen__privacy-note">
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
