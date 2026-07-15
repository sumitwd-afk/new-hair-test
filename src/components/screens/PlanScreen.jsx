"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import userIcon from "@/images/user.png";
import arrowIcon from "@/images/btn-arrow.png";
import { initCampaignTracking } from "@/utils/quizHelper";

export default function PlanScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    initCampaignTracking();
    const stored = window.sessionStorage.getItem("urootsPlanDetails");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.firstName) setFirstName(parsed.firstName);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const cleanName = firstName.trim();
    if (!cleanName) return;

    const stored = window.sessionStorage.getItem("urootsPlanDetails");
    let currentDetails = {};
    if (stored) {
      try {
        currentDetails = JSON.parse(stored);
      } catch (e) {
        console.error(e);
      }
    }

    const updatedDetails = {
      ...currentDetails,
      firstName: cleanName,
    };

    window.sessionStorage.setItem("urootsPlanDetails", JSON.stringify(updatedDetails));
    router.push("/phone", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen plan-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content plan-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={5.88}
            questionLabel="Question 1 of 17"
          />

          <div className="question-screen__hero plan-screen__hero">
            <p className="question-screen__intro plan-screen__intro">
              First things first
            </p>
            <h1 className="question-screen__title plan-screen__title">
              What should we call you?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus plan-screen__divider-lotus"
            />
          </div>

          <form className="plan-form" onSubmit={handleSubmit} style={{ maxWidth: "45rem", margin: "0 auto 3rem" }}>
            <div className="plan-form__row" style={{ display: "block" }}>
              <div className="plan-field" style={{ width: "100%", marginBottom: "2rem" }}>
                <Image
                  src={userIcon}
                  alt=""
                  aria-hidden="true"
                  className="plan-field__icon"
                />
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="plan-field__control"
                  placeholder="First Name *"
                  aria-label="First name"
                  required
                />
              </div>
            </div>

            <button type="submit" className="plan-submit" style={{ width: "100%" }}>
              <span className="plan-submit__text">Continue</span>
              <Image
                src={arrowIcon}
                alt=""
                aria-hidden="true"
                className="plan-submit__arrow"
              />
            </button>
          </form>
        </div>

        <div className="question-screen__footer">
          <DoctorCapsule />
        </div>
      </div>
    </section>
  );
}
