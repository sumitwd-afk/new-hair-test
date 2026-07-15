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
    router.push("/gas", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={75}
            questionLabel="Question 12 of 15"
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

          <ul className="gender-options" aria-label="Bowel movement options" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "45rem", margin: "0 auto 3rem" }}>
            {options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <li key={option.id} style={{ listStyle: "none", width: "100%" }}>
                  <button
                    type="button"
                    className={`gender-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelect(option.id, option.label)}
                    style={{
                      width: "100%",
                      padding: "2rem",
                      borderRadius: "1.2rem",
                      background: isSelected ? "#e2f0d9" : "#ffffff",
                      border: isSelected ? "2px solid #70ad47" : "1px solid #cbd5e1",
                      fontSize: "1.6rem",
                      fontWeight: "600",
                      color: "#334155",
                      cursor: "pointer",
                      textAlign: "center",
                      transition: "all 0.2s"
                    }}
                  >
                    {option.label}
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
