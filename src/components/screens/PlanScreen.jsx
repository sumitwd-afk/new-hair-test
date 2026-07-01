"use client";

import { useState, useEffect, useRef } from "react";
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
import { indianCities } from "@/utils/cities";
import { countries } from "@/utils/countries";

export default function PlanScreen() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    firstName: "",
    countryCode: "+91",
    phone: "",
    city: "",
    agreed: true,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    initCampaignTracking();

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormState((currentState) => {
      let finalValue = value;
      if (type === "checkbox") {
        finalValue = checked;
      } else if (name === "phone") {
        const numbersOnly = value.replace(/\D/g, "");
        const limit = currentState.countryCode === "+91" ? 10 : 15;
        finalValue = numbersOnly.slice(0, limit);
      }
      return {
        ...currentState,
        [name]: finalValue,
      };
    });
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

              <div className="plan-field plan-field--phone" style={{ position: "relative" }}>
                <Image
                  src={whatsappIcon}
                  alt=""
                  aria-hidden="true"
                  className="plan-field__icon"
                />
                <select
                  name="countryCode"
                  value={formState.countryCode}
                  onChange={handleChange}
                  className="plan-field__prefix"
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: "600",
                    color: "#475569",
                    paddingRight: "0.5rem",
                    maxWidth: "12rem"
                  }}
                  aria-label="Country Code"
                >
                  {countries.map((c) => (
                    <option key={`${c.name}-${c.code}`} value={c.code}>
                      {c.flag} {c.code} ({c.name})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="plan-field__control"
                  placeholder={formState.countryCode === "+91" ? "10 digit number" : "Phone number"}
                  aria-label="WhatsApp number"
                  inputMode="numeric"
                  pattern={formState.countryCode === "+91" ? "[0-9]{10}" : "[0-9]{7,15}"}
                  required
                />
              </div>
            </div>

            <div className="plan-field plan-field--select" ref={dropdownRef} style={{ position: "relative" }}>
              <Image
                src={cityIcon}
                alt=""
                aria-hidden="true"
                className="plan-field__icon"
              />
              <input
                type="text"
                readOnly
                value={formState.city}
                onClick={() => setIsDropdownOpen(true)}
                className={`plan-field__control plan-field__control--select${formState.city ? "" : " is-placeholder"}`}
                placeholder="Select your city from the list. *"
                style={{ cursor: "pointer", border: "none", outline: "none", width: "100%", background: "transparent" }}
                required
              />
              <span className="plan-field__chevron" aria-hidden="true" onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={{ cursor: "pointer" }} />
              
              {isDropdownOpen && (
                <div className="city-dropdown-menu" style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "1.2rem",
                  boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.15)",
                  zIndex: 9999,
                  marginTop: "0.8rem",
                  padding: "1.2rem",
                  maxHeight: "32rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem"
                }}>
                  <input
                    type="text"
                    placeholder="Type to search city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "1.2rem 1.6rem",
                      borderRadius: "0.8rem",
                      border: "1px solid #cbd5e1",
                      fontSize: "1.6rem",
                      color: "#334155",
                      outline: "none",
                      backgroundColor: "#f8fafc"
                    }}
                    autoFocus
                  />
                  <div style={{
                    overflowY: "auto",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    paddingRight: "0.4rem"
                  }}>
                    {indianCities
                      .filter(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((city) => (
                        <button
                          type="button"
                          key={city}
                          onClick={() => {
                            setFormState(prev => ({ ...prev, city }));
                            setIsDropdownOpen(false);
                            setSearchTerm("");
                          }}
                          style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "1rem 1.4rem",
                            borderRadius: "0.6rem",
                            border: "none",
                            background: formState.city === city ? "#f1f5f9" : "transparent",
                            color: formState.city === city ? "#1e293b" : "#475569",
                            fontSize: "1.6rem",
                            fontWeight: formState.city === city ? "600" : "400",
                            cursor: "pointer",
                            transition: "all 0.15s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "#f1f5f9";
                            e.target.style.color = "#1e293b";
                          }}
                          onMouseLeave={(e) => {
                            if (formState.city !== city) {
                              e.target.style.background = "transparent";
                              e.target.style.color = "#475569";
                            }
                          }}
                        >
                          {city}
                        </button>
                      ))}
                    {indianCities.filter(city => city.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                      <div style={{
                        padding: "1.5rem",
                        textAlign: "center",
                        color: "#94a3b8",
                        fontSize: "1.5rem"
                      }}>
                        No matching cities found
                      </div>
                    )}
                  </div>
                </div>
              )}
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
