"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import badgeIcon from "@/images/badge-icon.png";
import lotusImage from "@/images/lotus.png";

export default function AgeQuestion({ gender }) {
  const router = useRouter();
  const normalizedGender = gender === "female" ? "female" : "male";
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNum = parseInt(age, 10);
    if (!age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      setError("Please enter a valid age (1-120)");
      return;
    }

    // Save age values to sessionStorage
    window.sessionStorage.setItem("urootsAge", String(ageNum));

    // Redirect to the next step
    router.push(`/hair-problem/${normalizedGender}?age=${ageNum}`, { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen age-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content age-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={20}
            questionLabel="Question 3 of 15"
          />

          <div className="question-screen__hero age-screen__hero">
            <h1 className="question-screen__title age-screen__title">
              And your age?
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

          <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "45rem", margin: "0 auto 3rem" }}>
            <div className="plan-field" style={{ marginBottom: "1.5rem" }}>
              <input
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  setError("");
                }}
                className="plan-field__control"
                placeholder="Enter your age (years) *"
                aria-label="Age input"
                min="1"
                max="120"
                required
                style={{ textAlign: "center", fontSize: "1.8rem" }}
              />
            </div>

            {error && (
              <p style={{ color: "#ef4444", fontSize: "1.4rem", textAlign: "center", margin: "-0.5rem 0 1.5rem" }}>
                {error}
              </p>
            )}

            <button type="submit" className="plan-submit" style={{ width: "100%" }}>
              <span>Continue</span>
            </button>
          </form>

          <p className="question-screen__privacy-note age-screen__privacy-note">
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
