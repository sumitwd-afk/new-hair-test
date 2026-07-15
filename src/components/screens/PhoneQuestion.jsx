"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import whatsappIcon from "@/images/whatsapp.png";
import agreeButtonIcon from "@/images/agree-btn.png";
import arrowIcon from "@/images/btn-arrow.png";
import { submitPartialLead } from "@/utils/quizHelper";
import { countries } from "@/utils/countries";

export default function PhoneQuestion() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    countryCode: "+91",
    phone: "",
    agreed: true,
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef(null);

  useEffect(() => {
    const stored = window.sessionStorage.getItem("urootsPlanDetails");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setFormState((prev) => ({
          ...prev,
          countryCode: parsed.countryCode || "+91",
          phone: parsed.phone || "",
          agreed: parsed.agreed !== undefined ? parsed.agreed : true,
        }));
      } catch (e) {
        console.error(e);
      }
    }

    function handleClickOutside(event) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
        setCountrySearch("");
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
    if (!formState.phone) return;

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
      countryCode: formState.countryCode,
      phone: formState.phone,
      agreed: formState.agreed,
    };

    window.sessionStorage.setItem("urootsPlanDetails", JSON.stringify(updatedDetails));
    
    // Submit partial lead to LeadSquared
    submitPartialLead(updatedDetails);

    router.push("/gender", { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen plan-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content plan-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={11.76}
            questionLabel="Question 2 of 17"
          />

          <div className="question-screen__hero plan-screen__hero">
            <h1 className="question-screen__title plan-screen__title">
              Where can we send your personalised report?
            </h1>

            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus plan-screen__divider-lotus"
            />

            <p className="question-screen__copy plan-screen__copy">
              <strong>We will send your hair report on WhatsApp.</strong>
            </p>
          </div>

          <form className="plan-form" onSubmit={handleSubmit} style={{ maxWidth: "45rem", margin: "0 auto 3rem" }}>
            <div className="plan-form__row" style={{ display: "block" }}>
              <div className="plan-field plan-field--phone" style={{ position: "relative", width: "100%", marginBottom: "2rem" }}>
                <Image
                  src={whatsappIcon}
                  alt=""
                  aria-hidden="true"
                  className="plan-field__icon"
                />
                
                {/* Custom country code picker */}
                <div
                  ref={countryDropdownRef}
                  style={{ position: "relative", flexShrink: 0 }}
                >
                  <button
                    type="button"
                    onClick={() => { setIsCountryDropdownOpen(o => !o); setCountrySearch(""); }}
                    style={{
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontWeight: "600",
                      color: "#475569",
                      fontSize: "2rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0 0.6rem 0 0",
                      whiteSpace: "nowrap",
                    }}
                    aria-label="Select country code"
                    aria-haspopup="listbox"
                    aria-expanded={isCountryDropdownOpen}
                  >
                    {(() => {
                      const sel = countries.find(c => c.code === formState.countryCode);
                      return sel ? `${sel.flag} ${sel.code}` : formState.countryCode;
                    })()}
                    <span style={{ fontSize: "1rem", opacity: 0.5 }}>▾</span>
                  </button>

                  {isCountryDropdownOpen && (
                    <div
                      role="listbox"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        minWidth: "22rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "1.2rem",
                        boxShadow: "0 1rem 3rem rgba(0,0,0,0.15)",
                        zIndex: 9999,
                        marginTop: "0.8rem",
                        padding: "1rem",
                        maxHeight: "28rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.6rem",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={countrySearch}
                        onChange={e => setCountrySearch(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "1rem 1.2rem",
                          borderRadius: "0.8rem",
                          border: "1px solid #cbd5e1",
                          fontSize: "1.5rem",
                          color: "#334155",
                          outline: "none",
                          backgroundColor: "#f8fafc",
                          flexShrink: 0,
                        }}
                        autoFocus
                      />
                      <div style={{ overflowY: "auto", flexGrow: 1 }}>
                        {countries
                          .filter(c =>
                            c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
                            c.code.includes(countrySearch)
                          )
                          .map(c => (
                            <button
                              key={`${c.name}-${c.code}`}
                              type="button"
                              role="option"
                              aria-selected={formState.countryCode === c.code}
                              onClick={() => {
                                setFormState(prev => ({ ...prev, countryCode: c.code }));
                                setIsCountryDropdownOpen(false);
                                setCountrySearch("");
                              }}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "0.9rem 1.2rem",
                                borderRadius: "0.6rem",
                                border: "none",
                                background: formState.countryCode === c.code ? "#f1f5f9" : "transparent",
                                color: formState.countryCode === c.code ? "#1e293b" : "#475569",
                                fontSize: "1.5rem",
                                fontWeight: formState.countryCode === c.code ? "600" : "400",
                                cursor: "pointer",
                                display: "flex",
                                gap: "0.6rem",
                                alignItems: "center",
                              }}
                            >
                              <span>{c.flag}</span>
                              <span style={{ fontWeight: 600 }}>{c.code}</span>
                              <span style={{ color: "#64748b" }}>{c.name}</span>
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
                
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

            <label className="plan-agreement" style={{ marginBottom: "2rem" }}>
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
