"use client";

import { useEffect, useState } from "react";

const kitSectionId = "personalised-kit";

export default function ResultKitFloatingButton() {
  const [isKitVisible, setIsKitVisible] = useState(false);

  useEffect(() => {
    const kitSection = document.getElementById(kitSectionId);

    if (!kitSection) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsKitVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
      },
    );

    observer.observe(kitSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollToKit = () => {
    document.getElementById(kitSectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      className={`result-kit-floating-btn${isKitVisible ? " is-hidden" : ""}`}
      onClick={handleScrollToKit}
    >
      Your personalised kit
    </button>
  );
}
