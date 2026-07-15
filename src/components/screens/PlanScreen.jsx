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

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef(null);

  // Close dropdowns on click outside
  useEffect(() => {
    initCampaignTracking();

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
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
            progress={6.25}
            questionLabel="Question 2 of 16"
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

            <p className="question-screen__copy plan-screen__copy">
              Where can we send your personalised report? <br/>
              <strong>We will send your hair report on WhatsApp.</strong>
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
                {/* Custom country code picker — shows only flag+code when closed */}
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
                    {/* Only flag + code shown in selected state */}
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
                              {/* Full info in list: flag + code + name */}
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
