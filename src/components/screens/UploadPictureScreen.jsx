"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QuizHeader from "@/components/common/QuizHeader";
import QuestionProgress from "@/components/common/QuestionProgress";
import DoctorCapsule from "@/components/common/DoctorCapsule";
import lotusImage from "@/images/lotus.png";
import scalpPictureImage from "@/images/scalp-picture.png";
import femaleScalpImage from "@/images/female-scalp-sample.webp";
import blackArrowIcon from "@/images/black-arrow.png";
import whiteArrowIcon from "@/images/white-arrow.png";
import { compressImage, submitFullLead } from "@/utils/quizHelper";

const MAX_FILES = 5;
const MAX_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB

export default function UploadPictureScreen() {
  const uploadInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("male");
  const [selectedFiles, setSelectedFiles] = useState([]); // { name, previewUrl }
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    const storedGender = window.sessionStorage.getItem("urootsGender") || "male";
    setGender(storedGender);
  }, []);

  const sampleImage = gender === "female" ? femaleScalpImage : scalpPictureImage;

  const handleOpenPicker = (inputRef) => {
    inputRef.current?.click();
  };

  // Compress all files to <1MB, return array of compressed File objects
  const processFiles = async (files) => {
    const processed = [];
    for (const file of files) {
      const compressed = file.size > MAX_SIZE_BYTES
        ? await compressImage(file)
        : file;
      processed.push(compressed);
    }
    return processed;
  };

  const handleFileSelection = async (event) => {
    const newFiles = Array.from(event.target.files ?? []);
    if (!newFiles.length) return;

    // Limit total files
    const totalAllowed = MAX_FILES - selectedFiles.length;
    const filesToAdd = newFiles.slice(0, totalAllowed);

    if (newFiles.length > totalAllowed) {
      setStatusMsg(`Max ${MAX_FILES} images allowed. Only first ${totalAllowed} added.`);
    } else {
      setStatusMsg("");
    }

    // Generate preview URLs for display
    const withPreviews = filesToAdd.map(file => ({
      file,
      name: file.name,
      previewUrl: URL.createObjectURL(file),
    }));

    setSelectedFiles(prev => {
      const updated = [...prev, ...withPreviews];
      // Save first image's blob URL to sessionStorage for result page display
      const firstItem = updated[0];
      if (firstItem?.previewUrl) {
        window.sessionStorage.setItem("urootsUploadedPhotoUrl", firstItem.previewUrl);
      }
      return updated;
    });

    // Reset input so same file can be re-selected if needed
    event.target.value = "";
  };

  const removeFile = (index) => {
    setSelectedFiles(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].previewUrl);
      updated.splice(index, 1);

      // Always keep sessionStorage pointing to the first image in the list
      if (updated.length > 0) {
        window.sessionStorage.setItem("urootsUploadedPhotoUrl", updated[0].previewUrl);
      } else {
        window.sessionStorage.removeItem("urootsUploadedPhotoUrl");
      }

      return updated;
    });
    setStatusMsg("");
  };

  const submitForm = async (files) => {
    setLoading(true);
    try {
      const planDetailsStr = window.sessionStorage.getItem("urootsPlanDetails") || "{}";
      const planDetails = JSON.parse(planDetailsStr);

      const formData = {
        firstName: planDetails.firstName || "",
        countryCode: planDetails.countryCode || "+91",
        phone: planDetails.phone || "",
        city: planDetails.city || "",
        gender,
        age: window.sessionStorage.getItem("urootsAge") || "",
        pattern: window.sessionStorage.getItem("urootsPattern") || "",
        hairType: window.sessionStorage.getItem("urootsHairType") || "",
        duration: window.sessionStorage.getItem("urootsDuration") || "",
        lifestyle: JSON.parse(window.sessionStorage.getItem("urootsLifestyle") || "[]"),
        tried: window.sessionStorage.getItem("urootsTried") || "",
        expectation: window.sessionStorage.getItem("urootsExpectation") || "",
      };

      let compressedFiles = null;
      if (files && files.length > 0) {
        setStatusMsg("Compressing images...");
        compressedFiles = await processFiles(files);
        setStatusMsg("");
      } else {
        // No photos selected / skipped — clear any stale blob URL from previous session
        window.sessionStorage.removeItem("urootsUploadedPhotoUrl");
      }

      await submitFullLead(formData, compressedFiles);
      router.push("/result", { scroll: false });
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong during submission. Please try again.");
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    const rawFiles = selectedFiles.map(f => f.file);
    submitForm(rawFiles);
  };

  const handleSkip = () => {
    submitForm(null);
  };

  return (
    <section className="screen-gradient-bg question-screen upload-screen">
      {loading && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(8px)',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center',
          zIndex: 9999, color: '#fff', fontFamily: 'inherit'
        }}>
          <div className="spinner" style={{
            width: '50px', height: '50px',
            border: '5px solid rgba(255,255,255,0.2)',
            borderTop: '5px solid #fff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '20px'
          }} />
          <style>{`@keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }`}</style>
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
            questionLabel="Question 17 of 17"
          />

          <div className="question-screen__hero upload-screen__hero">
            <h1 className="question-screen__title upload-screen__title">
              Last step — share a clear photo of your scalp.
            </h1>
            <Image
              src={lotusImage}
              alt=""
              aria-hidden="true"
              className="question-screen__lotus upload-screen__lotus"
            />
          </div>

          {/* Sample image */}
          <div className="upload-screen__sample">
            <Image
              src={sampleImage}
              alt="Sample scalp picture"
              className="upload-screen__sample-image"
              priority
            />
          </div>

          <p className="upload-screen__note">
            You can upload up to {MAX_FILES} photos — top, front, side views help us analyse better.
          </p>

          {/* Hidden file inputs */}
          <input
            ref={uploadInputRef}
            type="file"
            accept="image/*"
            multiple
            className="upload-screen__input"
            onChange={handleFileSelection}
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="upload-screen__input"
            onChange={handleFileSelection}
          />

          {/* Upload action buttons */}
          <div className="upload-screen__actions">
            <button
              type="button"
              className="upload-screen__button upload-screen__button--primary"
              onClick={() => handleOpenPicker(uploadInputRef)}
              disabled={selectedFiles.length >= MAX_FILES}
            >
              <span className="upload-screen__button-text">
                {selectedFiles.length > 0 ? "Add More Photos" : "Upload scalp photo"}
              </span>
              <Image src={blackArrowIcon} alt="" aria-hidden="true" className="upload-screen__button-arrow" />
            </button>

            <button
              type="button"
              className="upload-screen__button upload-screen__button--secondary"
              onClick={() => handleOpenPicker(cameraInputRef)}
              disabled={selectedFiles.length >= MAX_FILES}
            >
              <span className="upload-screen__button-text">Take Picture</span>
              <Image src={whiteArrowIcon} alt="" aria-hidden="true" className="upload-screen__button-arrow" />
            </button>
          </div>

          {/* Status message */}
          {statusMsg && (
            <p style={{ color: '#e67e22', fontSize: '1.6rem', marginTop: '1.2rem', textAlign: 'center' }}>
              {statusMsg}
            </p>
          )}

          {/* Selected files preview */}
          {selectedFiles.length > 0 && (
            <div className="upload-screen__previews">
              <p className="upload-screen__preview-count">
                <strong>{selectedFiles.length}</strong> photo{selectedFiles.length > 1 ? "s" : ""} selected
                {selectedFiles.length < MAX_FILES && ` (can add ${MAX_FILES - selectedFiles.length} more)`}
              </p>
              <div className="upload-screen__preview-grid">
                {selectedFiles.map((item, idx) => (
                  <div key={idx} className="upload-screen__preview-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.previewUrl}
                      alt={item.name}
                      className="upload-screen__preview-thumb"
                    />
                    <button
                      type="button"
                      className="upload-screen__preview-remove"
                      onClick={() => removeFile(idx)}
                      aria-label="Remove photo"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              {/* Submit with photos */}
              <button
                type="button"
                className="upload-screen__submit-btn"
                onClick={handleSubmit}
              >
                Submit &amp; Get My Plan →
              </button>
            </div>
          )}

          {/* Skip button */}
          <button
            type="button"
            className="upload-screen__skip-btn"
            onClick={handleSkip}
            style={{
              background: 'none', border: 'none',
              color: '#717171', textDecoration: 'underline',
              cursor: 'pointer', fontSize: '1.8rem',
              fontWeight: '500', marginTop: '2.5rem',
              width: '100%', textAlign: 'center',
              opacity: 0.9, padding: '1rem', display: 'block'
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
