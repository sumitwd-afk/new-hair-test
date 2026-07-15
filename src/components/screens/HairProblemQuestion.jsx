"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";
import hairFallImage from "@/images/hair-fall.png";
import thinningImage from "@/images/thinning.png";
import hairlineImage from "@/images/hairline.png";
import dandruffImage from "@/images/dandruff.png";
import dullImage from "@/images/dull.png";
import slowGrowthImage from "@/images/slow-growth.png";
import greyingImage from "@/images/greying.png";
import femaleHairThinningImage from "@/images/female-hair-thinning.png";
import partumHairLossImage from "@/images/partum-hair-loss.png";

const concernOptionsByGender = {
  male: [
    { id: "hair-fall", label: "Hair fall", image: hairFallImage },
    { id: "thinning", label: "Thinning", image: thinningImage },
    { id: "hairline", label: "Receding hairline", image: hairlineImage },
    { id: "dandruff", label: "Dandruff", image: dandruffImage },
    { id: "dull", label: "Dull, lifeless hair", image: dullImage },
    { id: "slow-growth", label: "Slow growth", image: slowGrowthImage },
    { id: "greying", label: "Premature greying", image: greyingImage },
  ],
  female: [
    { id: "hair-fall", label: "Hair fall", image: hairFallImage },
    {
      id: "female-hair-thinning",
      label: "Thinning / widening partition",
      image: femaleHairThinningImage,
    },
    {
      id: "partum-hair-loss",
      label: "Post-partum hair loss",
      image: partumHairLossImage,
    },
    { id: "dandruff", label: "Dandruff", image: dandruffImage },
    { id: "dull", label: "Dull, lifeless hair", image: dullImage },
    { id: "slow-growth", label: "Slow growth", image: slowGrowthImage },
    { id: "greying", label: "Premature greying", image: greyingImage },
  ],
};

const MAX_CONCERNS = 3;

export default function HairProblemQuestion({ gender }) {
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const normalizedGender = gender === "female" ? "female" : "male";
  const options = concernOptionsByGender[normalizedGender];

  const handleSelectConcern = (id) => {
    setSelectedConcerns((prev) => {
      if (prev.includes(id)) {
        return prev.filter((c) => c !== id);
      }
      if (prev.length >= MAX_CONCERNS) return prev;
      return [...prev, id];
    });
  };

  const handleNext = () => {
    if (selectedConcerns.length === 0) return;
    const labels = selectedConcerns
      .map((id) => options.find((o) => o.id === id)?.label)
      .filter(Boolean);
    window.sessionStorage.setItem("urootsPattern", labels.join(", "));
    const ageVal = searchParams.get("age");
    if (ageVal) window.sessionStorage.setItem("urootsAge", ageVal);
    window.sessionStorage.setItem("urootsGender", normalizedGender);
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
              <strong>(Pick up to 3)</strong> This helps us understand your hair
              better.
            </p>
          </div>

          <ul className="hair-problem-options" aria-label="Hair concerns">
            {options.map((option) => {
              const isSelected = selectedConcerns.includes(option.id);
              const isDisabled =
                !isSelected && selectedConcerns.length >= MAX_CONCERNS;

              return (
                <li key={option.id} className="hair-problem-options__item">
                  <button
                    type="button"
                    className={`hair-problem-card${isSelected ? " is-selected" : ""}${isDisabled ? " is-disabled" : ""}`}
                    onClick={() => handleSelectConcern(option.id)}
                    aria-pressed={isSelected}
                    disabled={isDisabled}
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

          <div className="question-screen__next-wrap">
            <button
              type="button"
              className="question-screen__next-btn"
              onClick={handleNext}
              disabled={selectedConcerns.length === 0}
            >
              Next
            </button>
          </div>

          <p className="question-screen__privacy-note hair-problem-screen__privacy-note">
            <Image
              src={badgeIcon}
              alt=""
              aria-hidden="true"
              className="question-screen__privacy-icon"
            />
            Your answer are private &amp; secure.
          </p>
        </div>

        <div className="question-screen__footer">
          <DoctorCapsule />
        </div>
      </div>
    </section>
  );
}
