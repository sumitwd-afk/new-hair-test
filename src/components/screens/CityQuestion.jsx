"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import cityIcon from "@/images/city.png";
import arrowIcon from "@/images/btn-arrow.png";
import { indianCities } from "@/utils/cities";

export default function CityQuestion() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const [gender, setGender] = useState("male");

  useEffect(() => {
    const storedGender = window.sessionStorage.getItem("urootsGender") || "male";
    setGender(storedGender);

    const stored = window.sessionStorage.getItem("urootsPlanDetails");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.city) setCity(parsed.city);
      } catch (e) {
        console.error(e);
      }
    }

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!city) return;

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
      city,
    };

    window.sessionStorage.setItem("urootsPlanDetails", JSON.stringify(updatedDetails));
    router.push(`/hair-problem/${gender}`, { scroll: false });
  };

  return (
    <section className="screen-gradient-bg question-screen plan-screen">
      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content plan-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={29.41}
            questionLabel="Question 5 of 17"
          />

          <div className="question-screen__hero plan-screen__hero">
            <h1 className="question-screen__title plan-screen__title">
              Where do we ship your kit?
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
              <div className="plan-field plan-field--select" ref={dropdownRef} style={{ position: "relative", width: "100%", marginBottom: "2rem" }}>
                <Image
                  src={cityIcon}
                  alt=""
                  aria-hidden="true"
                  className="plan-field__icon"
                />
                <input
                  type="text"
                  readOnly
                  value={city}
                  onClick={() => setIsDropdownOpen(true)}
                  className={`plan-field__control plan-field__control--select${city ? "" : " is-placeholder"}`}
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
                        .filter(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((c) => (
                          <button
                            type="button"
                            key={c}
                            onClick={() => {
                              setCity(c);
                              setIsDropdownOpen(false);
                              setSearchTerm("");
                            }}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              padding: "1rem 1.4rem",
                              borderRadius: "0.6rem",
                              border: "none",
                              background: city === c ? "#f1f5f9" : "transparent",
                              color: city === c ? "#1e293b" : "#475569",
                              fontSize: "1.6rem",
                              fontWeight: city === c ? "600" : "400",
                              cursor: "pointer",
                              transition: "all 0.15s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.background = "#f1f5f9";
                              e.target.style.color = "#1e293b";
                            }}
                            onMouseLeave={(e) => {
                              if (city !== c) {
                                e.target.style.background = "transparent";
                                e.target.style.color = "#475569";
                              }
                            }}
                          >
                            {c}
                          </button>
                        ))}
                      {indianCities.filter(c => c.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
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
