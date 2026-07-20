"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";
import antiHairfallImage from "@/images/anti-hairfall.png";
import hairOilImage from "@/images/hair-oil.png";
import ayuvedicImage from "@/images/ayuvedic.png";
import supplementsImage from "@/images/supplements.png";
import minoxidilImage from "@/images/minoxidil.png";
import dermatologistImage from "@/images/dermatologist.png";
import nothingYetImage from "@/images/nothing-yet.png";

const triedOptions = [
  {
    id: "anti-hairfall",
    label: "Anti-hairfall shampoos",
    image: antiHairfallImage,
  },
  {
    id: "hair-oil",
    label: "Hair oils / home remedies",
    image: hairOilImage,
  },
  {
    id: "ayuvedic",
    label: "Ayurvedic products",
    image: ayuvedicImage,
  },
  {
    id: "supplements",
    label: "Supplements (biotin etc.)",
    image: supplementsImage,
  },
  {
    id: "minoxidil",
    label: "Minoxidil / Finasteride",
    image: minoxidilImage,
  },
  {
    id: "dermatologist",
    label: "Dermatologist consult",
    image: dermatologistImage,
  },
  {
    id: "nothing-yet",
    label: "Nothing yet",
    image: nothingYetImage,
  },
];

export default function TriedQuestion() {
  const [selectedTreatments, setSelectedTreatments] = useState([]);
  const router = useRouter();

  const handleSelectTreatment = (id) => {
    setSelectedTreatments((prev) => {
      // "Nothing yet" is exclusive
      if (id === "nothing-yet") {
        return prev.includes("nothing-yet") ? [] : ["nothing-yet"];
      }
      const withoutNothing = prev.filter((o) => o !== "nothing-yet");
      if (withoutNothing.includes(id)) {
        return withoutNothing.filter((o) => o !== id);
      }
      return [...withoutNothing, id];
    });
  };

  const handleNext = () => {
    if (selectedTreatments.length === 0) return;
    const labels = selectedTreatments
      .map((id) => triedOptions.find((o) => o.id === id)?.label)
      .filter(Boolean);
    window.sessionStorage.setItem("urootsTried", labels.join(", "));
    router.push("/expectation");
  };

  return (
    <section className="screen-gradient-bg question-screen tried-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content tried-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={80}
            questionLabel="Question 8 of 10"
          />

          <div className="question-screen__hero tried-screen__hero">
            <h1 className="question-screen__title">
              What have you tried so far?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />
          </div>

          <ul className="tried-options" aria-label="Treatments tried">
            {triedOptions.map((option) => {
              const isSelected = selectedTreatments.includes(option.id);

              return (
                <li key={option.id} className="tried-options__item">
                  <button
                    type="button"
                    className={`tried-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelectTreatment(option.id)}
                    aria-pressed={isSelected}
                  >
                    <Image
                      src={option.image}
                      alt=""
                      aria-hidden="true"
                      className="tried-card__icon"
                    />
                    <span className="tried-card__label">
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
              disabled={selectedTreatments.length === 0}
            >
              Next
            </button>
          </div>

          <p className="question-screen__privacy-note tried-screen__privacy-note">
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
