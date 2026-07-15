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
  { id: "none", label: "None of these" },
  { id: "illness", label: "A major illness (dengue, malaria, typhoid or COVID)" },
  { id: "weight", label: "A sharp change in weight (loss or gain)" },
  { id: "surgery", label: "Surgery or a course of strong medication" }
];

export default function TriggersQuestion() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    if (id === "none") {
      setSelected(["none"]);
      return;
    }
    setSelected((prev) => {
      const clean = prev.filter((item) => item !== "none");
      if (clean.includes(id)) {
        return clean.filter((item) => item !== id);
      }
      return [...clean, id];
    });
  };

  const handleNext = () => {
    if (selected.length === 0) return;
    const labels = selected.map((id) => options.find((o) => o.id === id).label);
    window.sessionStorage.setItem("urootsTriggers", labels.join(", "));
    router.push("/scalp-flakes", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={37.5}
            questionLabel="Question 7 of 16"
          />

          <div className="question-screen__hero">
            <h1 className="question-screen__title">
              In the last 12 months, have any of these affected you?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus"
            />
            <p className="question-screen__copy">Select all that apply</p>
          </div>

          <ul className="gender-options" aria-label="Trigger options" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "45rem", margin: "0 auto 3rem" }}>
            {options.map((option) => {
              const isSelected = selected.includes(option.id);
              return (
                <li key={option.id} style={{ listStyle: "none", width: "100%" }}>
                  <button
                    type="button"
                    className={`gender-card${isSelected ? " is-selected" : ""}`}
                    onClick={() => handleSelect(option.id)}
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

          <div className="question-screen__next-wrap" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <button
              type="button"
              className="question-screen__next-btn"
              onClick={handleNext}
              disabled={selected.length === 0}
              style={{
                width: "100%",
                maxWidth: "45rem",
                padding: "1.8rem",
                borderRadius: "10rem",
                background: "#000000",
                color: "#ffffff",
                fontSize: "1.8rem",
                fontWeight: "600",
                border: "none",
                cursor: "pointer"
              }}
            >
              Next
            </button>
          </div>

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
