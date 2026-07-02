"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";
import stressImage from "@/images/stress.png";
import sleepImage from "@/images/sleep.png";
import proteinImage from "@/images/protein.png";
import hardWaterImage from "@/images/hard-water.png";
import irregularDietImage from "@/images/irregular-deit.png";
import heatStylingImage from "@/images/heat-styling.png";
import digestiveIssuesImage from "@/images/digestive-issues.png";
import pregnancyImage from "@/images/pregnancy.png";
import pcosImage from "@/images/pcos.png";
import thyroidImage from "@/images/thyroid.png";

const sharedOptions = [
  {
    id: "stress",
    label: "High stress / anxiety",
    image: stressImage,
  },
  {
    id: "sleep",
    label: "Poor sleep (< 6 hrs)",
    image: sleepImage,
  },
  {
    id: "protein",
    label: "Mostly vegetarian / low protein",
    image: proteinImage,
  },
  {
    id: "hard-water",
    label: "Hard or borewell water",
    image: hardWaterImage,
  },
  {
    id: "irregular-diet",
    label: "Irregular diet / outside food",
    image: irregularDietImage,
  },
  {
    id: "heat-styling",
    label: "Frequent heat styling or chemicals",
    image: heatStylingImage,
  },
  {
    id: "digestive-issues",
    label: "Digestive issues",
    image: digestiveIssuesImage,
  },
];

const femaleOnlyOptions = [
  {
    id: "pregnancy",
    label: "Post-pregnancy (within 12 months)",
    image: pregnancyImage,
  },
  {
    id: "pcos",
    label: "PCOS / irregular periods",
    image: pcosImage,
  },
  {
    id: "thyroid",
    label: "Thyroid issues",
    image: thyroidImage,
  },
];

const noneOption = {
  id: "none",
  label: "None of these",
};

const optionsByGender = {
  male: [...sharedOptions, noneOption],
  female: [...sharedOptions, ...femaleOnlyOptions, noneOption],
};

export default function LifestyleQuestion({ gender }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const router = useRouter();
  const normalizedGender = gender === "female" ? "female" : "male";
  const options = optionsByGender[normalizedGender];

  const handleSelectOption = (id) => {
    setSelectedOptions((prev) => {
      // "None of these" is exclusive
      if (id === "none") {
        return prev.includes("none") ? [] : ["none"];
      }
      // Deselect none if another option picked
      const withoutNone = prev.filter((o) => o !== "none");
      if (withoutNone.includes(id)) {
        return withoutNone.filter((o) => o !== id);
      }
      return [...withoutNone, id];
    });
  };

  const handleNext = () => {
    if (selectedOptions.length === 0) return;
    window.sessionStorage.setItem("urootsLifestyle", JSON.stringify(selectedOptions));
    router.push("/tried", { scroll: false });
  };

  return (
    <section
      className={`screen-gradient-bg question-screen lifestyle-screen lifestyle-screen--${normalizedGender}`}
    >
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content lifestyle-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={70}
            questionLabel="Question 7 of 10"
          />

          <div className="question-screen__hero lifestyle-screen__hero">
            <h1 className="question-screen__title lifestyle-screen__title">
              Which of these apply to you?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus lifestyle-screen__lotus"
            />

            <p className="question-screen__copy lifestyle-screen__copy">
              <strong>(Pick all that apply)</strong>
            </p>
          </div>

          <ul className="lifestyle-options" aria-label="Lifestyle options">
            {options.map((option) => {
              const isSelected = selectedOptions.includes(option.id);

              return (
                <li key={option.id} className="lifestyle-options__item">
                  <button
                    type="button"
                    className={`lifestyle-card${isSelected ? " is-selected" : ""}${option.image ? "" : " lifestyle-card--text-only"}`}
                    onClick={() => handleSelectOption(option.id)}
                    aria-pressed={isSelected}
                  >
                    {option.image ? (
                      <Image
                        src={option.image}
                        alt=""
                        aria-hidden="true"
                        className="lifestyle-card__icon"
                      />
                    ) : null}
                    <span className="lifestyle-card__label">
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
              disabled={selectedOptions.length === 0}
            >
              Next
            </button>
          </div>

          <p className="question-screen__privacy-note lifestyle-screen__privacy-note">
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
