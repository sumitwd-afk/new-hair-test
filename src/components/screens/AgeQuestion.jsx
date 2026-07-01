"use client";

import Link from "next/link";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";
import male1Image from "@/images/male-1.png";
import male2Image from "@/images/male-2.png";
import male3Image from "@/images/male-3.png";
import male4Image from "@/images/male-4.png";
import male5Image from "@/images/male-5.png";
import female1Image from "@/images/female-1.png";
import female2Image from "@/images/female-2.png";
import female3Image from "@/images/female-3.png";
import female4Image from "@/images/female-4.png";
import female5Image from "@/images/female-5.png";

const ageRanges = ["18-24Y", "25-34Y", "35-44Y", "45-54Y", "55Y+"];

const ageImagesByGender = {
  male: [male1Image, male2Image, male3Image, male4Image, male5Image],
  female: [
    female1Image,
    female2Image,
    female3Image,
    female4Image,
    female5Image,
  ],
};

export default function AgeQuestion({ gender }) {
  const normalizedGender = gender === "female" ? "female" : "male";

  const options = ageRanges.map((label, index) => ({
    id: label,
    label,
    image: ageImagesByGender[normalizedGender][index],
    href: `/hair-problem/${normalizedGender}?age=${encodeURIComponent(label)}`,
  }));

  return (
    <section className="screen-gradient-bg question-screen age-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content age-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={30}
            questionLabel="Question 3 of 10"
          />

          <div className="question-screen__hero age-screen__hero">
            <h1 className="question-screen__title age-screen__title">
              How old are you?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus age-screen__lotus"
            />

            <p className="question-screen__copy age-screen__copy">
              This helps us understand your hair better.
            </p>
          </div>

          <ul className="age-options" aria-label="Age options">
            {options.map((option) => {
              return (
                <li key={option.id} className="age-options__item">
                  <Link
                    href={option.href}
                    className="age-card"
                    onClick={() => {
                      window.sessionStorage.setItem("urootsAge", option.label);
                    }}
                    scroll={false}
                  >
                    <Image
                      src={option.image}
                      alt=""
                      aria-hidden="true"
                      className="age-card__image"
                    />
                    <span className="age-card__label">{option.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="question-screen__privacy-note age-screen__privacy-note">
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
