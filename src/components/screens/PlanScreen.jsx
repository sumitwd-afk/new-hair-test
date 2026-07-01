"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import userIcon from "@/images/user.png";
import whatsappIcon from "@/images/whatsapp.png";
import cityIcon from "@/images/city.png";
import agreeButtonIcon from "@/images/agree-btn.png";
import arrowIcon from "@/images/btn-arrow.png";
import { initCampaignTracking, submitPartialLead } from "@/utils/quizHelper";

const cityOptions = [
  "Bengaluru",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Mumbai",
  "Pune",
];

export default function PlanScreen() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    firstName: "",
    phone: "",
    city: "",
    agreed: true,
  });

  useEffect(() => {
    initCampaignTracking();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormState((currentState) => ({
      ...currentState,
      [name]:
        type === "checkbox"
          ? checked
          : name === "phone"
            ? value.replace(/\D/g, "").slice(0, 10)
            : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    window.sessionStorage.setItem(
      "urootsPlanDetails",
      JSON.stringify(formState),
    );
    
    // Submit partial lead to LeadSquared
    submitPartialLead(formState);

    router.push("/gender", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen plan-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content plan-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={10}
            questionLabel="Question 1 of 10"
          />

          <div className="question-screen__hero plan-screen__hero">
            <p className="question-screen__intro plan-screen__intro">
              Lets Get Started
            </p>
            <h1 className="question-screen__title plan-screen__title">
              Where should we send it?
            </h1>

            <Image
                src={lotusImage}
                alt=""
                aria-hidden="true"
                className="question-screen__lotus plan-screen__divider-lotus"
            />

            <p className="question-screen__copy plan-screen__copy">
              We&apos;ll send your hair report on WhatsApp. No spam just{" "} 
              <strong>your plan <br/> and a gentle check-in from QHT Clinic Doctors.</strong>
            </p>
          </div>

          <form className="plan-form" onSubmit={handleSubmit}>
            <div className="plan-form__row">
              <div className="plan-field">
                <Image
                  src={userIcon}
                  alt=""
                  aria-hidden="true"
                  className="plan-field__icon"
                />
                <input
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  className="plan-field__control"
                  placeholder="First Name *"
                  aria-label="First name"
                  required
                />
              </div>

              <div className="plan-field plan-field--phone">
                <Image
                  src={whatsappIcon}
                  alt=""
                  aria-hidden="true"
                  className="plan-field__icon"
                />
                <span className="plan-field__prefix">+91</span>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="plan-field__control"
                  placeholder="10 digit number"
                  aria-label="WhatsApp number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
            </div>

            <div className="plan-field plan-field--select">
              <Image
                src={cityIcon}
                alt=""
                aria-hidden="true"
                className="plan-field__icon"
              />
              <select
                name="city"
                value={formState.city}
                onChange={handleChange}
                className={`plan-field__control plan-field__control--select${formState.city ? "" : " is-placeholder"}`}
                aria-label="City"
                required
              >
                <option value="">Select your city from the list.</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <span className="plan-field__chevron" aria-hidden="true" />
            </div>

            <label className="plan-agreement">
              <input
                type="checkbox"
                name="agreed"
                checked={formState.agreed}
                onChange={handleChange}
                className="plan-agreement__input"
                required
              />
              <span
                className="plan-agreement__box"
                aria-hidden="true"
                style={
                  formState.agreed
                    ? { backgroundImage: `url(${agreeButtonIcon.src})` }
                    : undefined
                }
              />
              <span className="plan-agreement__text">
                I agree to receive my report on WhatsApp.
              </span>
            </label>

            <button type="submit" className="plan-submit">
              <span className="plan-submit__text">Get my plan</span>
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
