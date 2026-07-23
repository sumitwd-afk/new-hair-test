import Image from "next/image";
import { useState } from "react";
import ResultDoctorCard from "@/components/result/ResultDoctorCard";

export default function ResultOverviewSection({ overview }) {
  const [imgError, setImgError] = useState(false);

  // Check if userImage is a blob URL (uploaded by user) or a static import
  const isBlobOrDataUrl =
    typeof overview.userImage === "string" &&
    (overview.userImage.startsWith("blob:") || overview.userImage.startsWith("data:"));

  // Show uploaded image only if it's a valid blob and hasn't errored
  const showUploaded = isBlobOrDataUrl && !imgError;

  return (
    <section className="result-left-top">
      <div className="result-left-inner">
        {/* Mobile greeting */}
        <h1 className="desktop-none" style={{ marginBottom: "1rem" }}>{overview.greeting}</h1>

        {showUploaded && (
          <div className="img-box result-user-box">
            <img
              src={overview.userImage}
              alt="User uploaded hair photo"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
              onError={() => setImgError(true)}
            />
          </div>
        )}

        {/* Mobile description */}
        <p className="desktop-none" style={{ marginTop: showUploaded ? "1.5rem" : "0", marginBottom: "2rem" }}>
          Based on your answers, you&apos;re experiencing{" "}
          <strong>{overview.highlight}</strong> {overview.summarySuffix}
        </p>

        <ul className="result-actions" aria-label="Result actions">
          {overview.actions.map((action) => {
            if (action.id === "whatsapp") {
              return (
                <li key={action.id}>
                  <a
                    href="https://api.whatsapp.com/send?phone=916399110555&text=Hi!%20I%20just%20completed%20my%20hair%20assessment%20and%20would%20like%20to%20receive%20my%20plan%20report."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="result-action-button"
                    style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left" }}
                  >
                    <span>{action.label}</span>
                    <Image src={action.icon} alt="" aria-hidden="true" />
                  </a>
                </li>
              );
            }
            if (action.id === "save") {
              return (
                <li key={action.id}>
                  <button
                    type="button"
                    className="result-action-button"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.print();
                      }
                    }}
                  >
                    <span>{action.label}</span>
                    <Image src={action.icon} alt="" aria-hidden="true" />
                  </button>
                </li>
              );
            }
            return (
              <li key={action.id}>
                <button type="button" className="result-action-button">
                  <span>{action.label}</span>
                  <Image src={action.icon} alt="" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>

        <ResultDoctorCard doctor={overview.doctor} />
      </div>

      <div className="result-right-inner">
        <div className="result-copy mobile-none">
          <h1>{overview.greeting}</h1>
          <p>
            Based on your answers, you&apos;re experiencing{" "}
            <strong>{overview.highlight}</strong> {overview.summarySuffix}
          </p>
        </div>

        <div className="result-cause-box">
          <p className="result-cause-label">CAUSE OF HAIR LOSS</p>
          <ul className="result-cause-list">
            {overview.causes.map((cause) => (
              <li key={cause.id}>
                <Image src={cause.icon} alt="" aria-hidden="true" />
                <span>{cause.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="result-quote-box">
          <Image
            src={overview.quote.image}
            alt=""
            aria-hidden="true"
            className="result-quote-box__bg"
          />
          <p>{overview.quote.text}</p>
        </div>
      </div>
    </section>
  );
}
