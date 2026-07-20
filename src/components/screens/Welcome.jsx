import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/components/common/HeaderLogo";
import handImage from "@/images/hand.png";
import arrowIcon from "@/images/arrow-icon.png";
import lotusImage from "@/images/lotus.png";
import drDpImage from "@/images/dr-neha-profile.webp";
import drSignImage from "@/images/dr-sign.png";
import lockImage from "@/images/lock.png";
import groupReviewImage from "@/images/group-review.png";

export default function Welcome({ startHref = "/plan" }) {
    return (
        <section className="screen-gradient-bg welcome-section">
            <div className="container welcome-shell">
                <header className="welcome-header">
                    <HeaderLogo className="brand-logo" />
                </header>

                <div className="welcome-hero">
                    <h1 className="welcome-title">Find your hair&apos;s root case</h1>

                    <p className="welcome-signature">
                        in 2 minutes.
                    </p>

                    <Image
                        src={lotusImage}
                        alt=""
                        aria-hidden="true"
                        className="welcome-signature-mobile"
                        priority
                    />

                    <p className="welcome-copy">
                        A clinical hair diagnosis, personalised by QHT Clinic Doctors Team. <br/>
                        Trusted by <strong>50,000+ Indians.</strong>
                    </p>

                    <Link
                        href={startHref}
                        className="hand-btn"
                        aria-label="Take 2 minutes free hair test"
                        scroll={false}
                    >
                        <span className="hand-btn__left">
                            <Image
                                src={handImage}
                                alt=""
                                aria-hidden="true"
                                className="hand-btn__icon"
                            />
                            <span className="hand-btn__text">
                                <strong>Take 2 minutes</strong>
                                <br />
                                free hair test.
                            </span>
                        </span>
                        <Image
                            src={arrowIcon}
                            alt=""
                            aria-hidden="true"
                            className="hand-btn__arrow"
                        />
                    </Link>
                </div>

                <div className="welcome-bottom flex">
                    <article className="review-card">
                        <div className="review-card__profile">
                            <Image
                                src={drDpImage}
                                alt="Dr. Shilpa"
                                className="review-card__avatar"
                                priority
                            />
                            <div className="review-card__copy">
                                <span className="review-card__eyebrow">Reviewed by</span>
                                <span className="review-card__name" style={{ fontSize: "3rem", marginTop: "0.5rem" }}>QHT Clinic Doctors Team</span>
                            </div>
                        </div>

                        <span className="review-card__divider" aria-hidden="true" />

                        <div className="review-card__privacy">
                            <div className="review-card__lock-box">
                                <Image
                                    src={lockImage}
                                    alt=""
                                    aria-hidden="true"
                                    className="review-card__lock"
                                />
                            </div>
                            <p>Private &amp; Encrypted</p>
                        </div>
                    </article>

                    <article className="trust-card">
                        <div className="trust-card__group" style={{ width: "100%", display: "flex", alignItems: "center", gap: "2.5rem" }}>
                            <Image
                                src={groupReviewImage}
                                alt="Group of trusted reviewers"
                                className="trust-card__group-image"
                            />
                            <div className="trust-card__copy">
                                <p>
                                   Trusted by
                                   <strong>50,000+ Indians.</strong>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
