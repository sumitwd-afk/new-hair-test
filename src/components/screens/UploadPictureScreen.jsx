"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import scalpPictureImage from "@/images/scalp-picture.png";
import blackArrowIcon from "@/images/black-arrow.png";
import whiteArrowIcon from "@/images/white-arrow.png";
import { compressImage, submitFullLead } from "@/utils/quizHelper";

export default function UploadPictureScreen() {
  const uploadInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOpenPicker = (inputRef) => {
    inputRef.current?.click();
  };

  const submitForm = async (file) => {
    console.log("submitForm called. File details:", file ? `${file.name} (${file.size} bytes)` : "No file (Skip)");
    setLoading(true);
    try {
      const planDetailsStr = window.sessionStorage.getItem("urootsPlanDetails") || "{}";
      const planDetails = JSON.parse(planDetailsStr);
      
      const gender = window.sessionStorage.getItem("urootsGender") || "";
      const age = window.sessionStorage.getItem("urootsAge") || "";
      const pattern = window.sessionStorage.getItem("urootsPattern") || "";
      const hairType = window.sessionStorage.getItem("urootsHairType") || "";
      const duration = window.sessionStorage.getItem("urootsDuration") || "";
      const lifestyleStr = window.sessionStorage.getItem("urootsLifestyle") || "[]";
      const lifestyle = JSON.parse(lifestyleStr);
      const tried = window.sessionStorage.getItem("urootsTried") || "";
      const expectation = window.sessionStorage.getItem("urootsExpectation") || "";

      const formData = {
        firstName: planDetails.firstName || "",
        countryCode: planDetails.countryCode || "+91",
        phone: planDetails.phone || "",
        city: planDetails.city || "",
        gender,
        age,
        pattern,
        hairType,
        duration,
        lifestyle,
        tried,
        expectation
      };

      let finalFile = null;
      if (file) {
        console.log("Compressing image...");
        // Compress image using canvas utility
        finalFile = await compressImage(file);
        console.log("Image compressed successfully:", finalFile.name, `${finalFile.size} bytes`);
      }

      console.log("Submitting full lead to API...", formData);
      await submitFullLead(formData, finalFile);
      console.log("Full lead submission completed, navigating to /result");

      // Navigate to result
      router.push("/result", { scroll: false });
    } catch (err) {
      console.error("Submission failed inside submitForm:", err);
      alert("Something went wrong during submission. Please try again.");
      setLoading(false);
    }
  };

  const handleFileSelection = (event, source) => {
    console.log("handleFileSelection triggered. Source:", source);
    const [file] = event.target.files ?? [];

    if (!file) {
      console.warn("No file object extracted from input event!");
      return;
    }

    console.log("File extracted successfully:", file.name);

    window.sessionStorage.setItem(
      "urootsScalpPicture",
      JSON.stringify({
        name: file.name,
        source,
      }),
    );

    submitForm(file);
  };

  return (
    <section className="screen-gradient-bg question-screen upload-screen">
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          color: '#fff',
          fontFamily: 'inherit'
        }}>
          <div className="spinner" style={{
            width: '50px',
            height: '50px',
            border: '5px solid rgba(255, 255, 255, 0.2)',
            borderTop: '5px solid #fff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '20px'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <h3 style={{ margin: 0, fontWeight: 600 }}>Analyzing Hair Profile...</h3>
          <p style={{ margin: '8px 0 0', opacity: 0.8, fontSize: '14px' }}>Please wait, customizing your plan</p>
        </div>
      )}

      <div className="container question-shell">
        <QuizHeader />

        <div className="question-screen__content upload-screen__content">
          <QuestionProgress
            className="question-screen__progress"
            progress={100}
            questionLabel="Question 10 of 10"
          />

          <div className="question-screen__hero upload-screen__hero">
            <h1 className="question-screen__title upload-screen__title">
              Upload your scalp picture?
            </h1>

             <Image
                            src={lotusImage}
                            alt=""
                            aria-hidden="true"
                            className="question-screen__lotus upload-screen__lotus"
              />
          </div>

          <div className="upload-screen__sample">
            <Image
              src={scalpPictureImage}
              alt="Sample scalp picture"
              className="upload-screen__sample-image"
              priority
            />
          </div>

          <p className="upload-screen__note">
            Try clicking a photo like the sample above
          </p>

          <div className="upload-screen__actions">
            <input
              ref={uploadInputRef}
              type="file"
              accept="image/*"
              className="upload-screen__input"
              onChange={(event) => handleFileSelection(event, "upload")}
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="upload-screen__input"
              onChange={(event) => handleFileSelection(event, "camera")}
            />

            <button
              type="button"
              className="upload-screen__button upload-screen__button--primary"
              onClick={() => handleOpenPicker(uploadInputRef)}
            >
              <span className="upload-screen__button-text">
                Upload scalp photo
              </span>
              <Image
                src={blackArrowIcon}
                alt=""
                aria-hidden="true"
                className="upload-screen__button-arrow"
              />
            </button>

            <button
              type="button"
              className="upload-screen__button upload-screen__button--secondary"
              onClick={() => handleOpenPicker(cameraInputRef)}
            >
              <span className="upload-screen__button-text">Take Picture</span>
              <Image
                src={whiteArrowIcon}
                alt=""
                aria-hidden="true"
                className="upload-screen__button-arrow"
              />
            </button>
          </div>

          <button
            type="button"
            className="upload-screen__skip-btn"
            onClick={() => submitForm(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#717171',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '1.8rem',
              fontWeight: '500',
              marginTop: '2.5rem',
              width: '100%',
              textAlign: 'center',
              opacity: 0.9,
              padding: '1rem',
              display: 'block'
            }}
          >
            Skip &amp; Get Results
          </button>
        </div>

        <div className="question-screen__footer">
          <DoctorCapsule />
        </div>
      </div>
    </section>
  );
}
