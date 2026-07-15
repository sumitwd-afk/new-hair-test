"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";
import maleGenderImage from "@/images/male-gender.png";
import femaleGenderImage from "@/images/female-gender.png";
import nonGenderImage from "@/images/non-gender.png";

const options = [
  {
    id: "male",
    label: "Male",
    image: maleGenderImage,
    href: "/age/male",
  },
  {
    id: "female",
    label: "Female",
    image: femaleGenderImage,
    href: "/age/female",
  },
  {
    id: "prefer-not-to-say",
    label: "Prefer not to say",
    image: nonGenderImage,
  },
];

export default function GenderQuestion() {
  const [selectedGender, setSelectedGender] = useState("");

  return (
    <section className="screen-gradient-bg question-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={20}
            questionLabel="Question 2 of 10"
          />

          <div className="question-screen__hero">
            <p className="question-screen__eyebrow">Question 2 of 10</p>
            <h2 className="question-screen__intro">Let&apos;s Start Simple.</h2>
            <h1 className="question-screen__title">Which best describes you?</h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />

            <p className="question-screen__copy">
              This helps us personalise your hair analysis.
            </p>
          </div>

          <ul className="gender-options" aria-label="Gender options">
            {options.map((option) => {
              const isSelected = selectedGender === option.id;
              const cardClassName = `gender-card${isSelected ? " is-selected" : ""}`;

              return (
                <li key={option.id} className="gender-options__item">
                  {option.href ? (
                    <Link
                      href={option.href}
                      className={cardClassName}
                      onClick={() => {
                        setSelectedGender(option.id);
                        window.sessionStorage.setItem("urootsGender", option.id);
                      }}
                      scroll={false}
                    >
                      <Image
                        src={option.image}
                        alt=""
                        aria-hidden="true"
                        className="gender-card__image"
                      />
                      <span className="gender-card__label">{option.label}</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={cardClassName}
                      onClick={() => {
                        setSelectedGender(option.id);
                        window.sessionStorage.setItem("urootsGender", option.id);
                      }}
                    >
                      <Image
                        src={option.image}
                        alt=""
                        aria-hidden="true"
                        className="gender-card__image"
                      />
                      <span className="gender-card__label">{option.label}</span>
                    </button>
                  )}
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
