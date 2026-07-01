"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import HeaderLogo from "@/components/common/HeaderLogo";
import previousArrowIcon from "@/images/previous-arrow.png";

export default function QuizHeader() {
  const router = useRouter();

  const handlePreviousClick = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/", { scroll: false });
  };

  return (
    <header className="welcome-header quiz-header">
      <HeaderLogo className="brand-logo" />
      <button
        type="button"
        className="previous-button"
        onClick={handlePreviousClick}
        aria-label="Previous"
      >
        <Image
          src={previousArrowIcon}
          alt=""
          aria-hidden="true"
          className="previous-button__icon"
        />
        <span>Previous</span>
      </button>
    </header>
  );
}
