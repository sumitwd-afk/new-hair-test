"use client";

import { useEffect, useState } from "react";
import ResultHeader from "@/components/result/ResultHeader";
import ResultOverviewSection from "@/components/result/ResultOverviewSection";
import ResultAddonsSection from "@/components/result/ResultAddonsSection";
import ResultTestimonialsSection from "@/components/result/ResultTestimonialsSection";
import ResultFaqSection from "@/components/result/ResultFaqSection";
import ResultKitFloatingButton from "@/components/result/ResultKitFloatingButton";
import ResultKitSidebar from "@/components/result/ResultKitSidebar";
import { getProductRecommendations, appendUtm } from "@/utils/quizHelper";
import {
  resultAddOns,
  resultFaqs,
  resultKit,
  resultOverview,
  resultTestimonials,
  resultTestimonialSlider,
} from "@/components/result/resultData";
import ResultFooter from "./ResultFooter";

export default function ResultPage() {
  const [overview, setOverview] = useState(resultOverview);
  const [kit, setKit] = useState(resultKit);
  const [consultation, setConsultation] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading && typeof window !== "undefined") {
      const timer = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    // 1. Load details from sessionStorage
    const planDetailsStr = window.sessionStorage.getItem("urootsPlanDetails");
    if (!planDetailsStr) {
      // Redirect to Step 1 (PlanScreen) if details are missing
      window.location.replace("/plan");
      return;
    }

    const planDetails = JSON.parse(planDetailsStr);
    const gender = window.sessionStorage.getItem("urootsGender") || "male";
    const age = window.sessionStorage.getItem("urootsAge") || "";
    const pattern = window.sessionStorage.getItem("urootsPattern") || "";
    const hairType = window.sessionStorage.getItem("urootsHairType") || "";
    const duration = window.sessionStorage.getItem("urootsDuration") || "";
    const lifestyleStr = window.sessionStorage.getItem("urootsLifestyle") || "[]";
    const lifestyle = JSON.parse(lifestyleStr);
    const tried = window.sessionStorage.getItem("urootsTried") || "";
    const expectation = window.sessionStorage.getItem("urootsExpectation") || "";

    const formData = {
      firstName: planDetails.firstName || "User",
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

    // 2. Get recommendations
    const { products, needsConsultation, consultationReason } = getProductRecommendations(formData);

    if (needsConsultation) {
      setConsultation({ reason: consultationReason });
    }

    // 3. Map causes
    const causeIcons = {
      "protein-gap": resultOverview.causes.find(c => c.id === "protein-gap")?.icon,
      "elevated-stress": resultOverview.causes.find(c => c.id === "elevated-stress")?.icon,
      "hard-water": resultOverview.causes.find(c => c.id === "hard-water")?.icon,
      "sleep-debt": resultOverview.causes.find(c => c.id === "sleep-debt")?.icon,
    };

    const dynamicCauses = [];
    lifestyle.forEach(item => {
      if (item === "stress") {
        dynamicCauses.push({ id: "elevated-stress", label: "Elevated Stress", icon: causeIcons["elevated-stress"] });
      } else if (item === "sleep") {
        dynamicCauses.push({ id: "sleep-debt", label: "Sleep Debt", icon: causeIcons["sleep-debt"] });
      } else if (item === "protein") {
        dynamicCauses.push({ id: "protein-gap", label: "Protein Gap", icon: causeIcons["protein-gap"] });
      } else if (item === "hard-water") {
        dynamicCauses.push({ id: "hard-water", label: "Hard Water", icon: causeIcons["hard-water"] });
      }
    });

    if (dynamicCauses.length === 0) {
      // Fallback standard causes
      dynamicCauses.push({ id: "protein-gap", label: "Protein Gap", icon: causeIcons["protein-gap"] });
      dynamicCauses.push({ id: "elevated-stress", label: "Elevated Stress", icon: causeIcons["elevated-stress"] });
    }

    // Calculate stage text
    let stage = "Stage 2";
    let stageDesc = gender === "female" ? "Of Female Pattern Hair Loss" : "Of Male Pattern Hair Loss";
    const patternLower = pattern.toLowerCase();
    if (patternLower.includes("complete") || patternLower.includes("bald")) {
      stage = "Stage 4-5";
    } else if (patternLower.includes("crown") && patternLower.includes("hairline")) {
      stage = "Stage 3-4";
    } else if (patternLower.includes("thinning") || patternLower.includes("crown")) {
      stage = "Stage 2-3";
    } else if (patternLower.includes("receding")) {
      stage = "Stage 1-2";
    } else if (patternLower.includes("patchy")) {
      stage = "Alopecia (Patchy Hair Loss)";
      stageDesc = "";
    } else if (patternLower.includes("diffuse")) {
      stage = "Diffuse Thinning Pattern";
      stageDesc = "";
    }

    const highlightText = `${stage} ${stageDesc}`.trim();
    const causesTextList = dynamicCauses.map(c => c.label.toLowerCase());
    const summarySuffixText = `due to ${causesTextList.join(", ")}.`;

    // Timeline calculation
    const durationLower = duration.toLowerCase();
    let regrowthVal = 85;
    if (durationLower.includes("less") || durationLower.includes("1 month")) {
      regrowthVal = 95;
    } else if (durationLower.includes("3-12") || durationLower.includes("6 month")) {
      regrowthVal = 90;
    } else if (durationLower.includes("1-3") || durationLower.includes("12 month")) {
      regrowthVal = 82;
    } else if (durationLower.includes("more") || durationLower.includes("year")) {
      regrowthVal = 72;
    }

    let resultsTime = "5-6 Months";
    if (durationLower.includes("less") || durationLower.includes("1 month")) {
      resultsTime = "3-4 Months";
    } else if (durationLower.includes("more") || durationLower.includes("year")) {
      resultsTime = "6-8 Months";
    }

    const quoteText = `Based on your duration of hair loss (${duration || 'gradual'}), there is a ${regrowthVal}% possibility of regrowth. Starting your customized plan now will show visible results in ${resultsTime} of daily consistent use.`;

    // Load uploaded photo if available
    const uploadedPhotoUrl = window.sessionStorage.getItem("urootsUploadedPhotoUrl");

    setOverview({
      ...resultOverview,
      greeting: `Hi ${formData.firstName},`,
      highlight: highlightText,
      summarySuffix: summarySuffixText,
      causes: dynamicCauses,
      quote: {
        ...resultOverview.quote,
        text: quoteText
      },
      // Use uploaded photo if available, else keep default placeholder
      ...(uploadedPhotoUrl ? { userImage: uploadedPhotoUrl } : {})
    });

    // 4. Map Kit Sidebar
    if (products.length > 0) {
      let totalPrice = 0;
      products.forEach(p => { totalPrice += p.price; });
      const originalPrice = Math.round(totalPrice * 1.15);

      const cartItems = products
        .filter(p => p.variantId)
        .map(p => `${p.variantId}:1`)
        .join(',');

      const rawCartUrl = cartItems ? `https://theuroots.com/cart/${cartItems}` : 'https://theuroots.com/cart';
      const checkoutUrl = appendUtm(rawCartUrl, formData, { content: 'buy_now_kit' });

      setKit({
        ...resultKit,
        title: "Personalised Kit",
        subtitle: `For Stage ${stage} Hair Control & Growth`,
        oldPrice: `₹${originalPrice.toLocaleString('en-IN')}`,
        newPrice: `₹${totalPrice.toLocaleString('en-IN')}`,
        label: `THE KIT INCLUDES ${products.length} PRODUCTS`,
        products: products.map(p => ({
          id: p.id,
          name: p.name,
          price: `₹${p.price}`,
          image: p.image
        })),
        checkoutUrl
      });
    }
    
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="result-page" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fcfcf9" }}>
        <div style={{ fontSize: "1.8rem", color: "#666" }}>Loading result...</div>
      </main>
    );
  }

  return (
    <main className="result-page">
      <ResultHeader />

      <div className="result-shell">
        <div className="container">
          {consultation && (
            <div className="consultation-banner" style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFF8E1",
              border: "1px solid #FFE082",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              color: "#333",
              fontFamily: "inherit"
            }}>
              <div className="consultation-icon" style={{ fontSize: "24px", marginRight: "15px" }}>👨‍⚕️</div>
              <div className="consultation-text" style={{ flexGrow: 1 }}>
                <strong style={{ display: "block", marginBottom: "4px", fontSize: "16px" }}>Doctor Consultation Recommended</strong>
                <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{consultation.reason}</p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=916399110555&text=Hi!%20I%20just%20completed%20the%20hair%20assessment%20and%20need%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-consultation-btn"
                style={{
                  backgroundColor: "#25D366",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                  display: "inline-block",
                  marginLeft: "15px",
                  textAlign: "center"
                }}
              >
                Chat on WhatsApp
              </a>
            </div>
          )}

          <div className="result-layout">
            <div className="result-card result-left-card">
              <ResultOverviewSection overview={overview} />
              
              <div className="show-mobile-only" style={{ marginBottom: "2rem" }}>
                <ResultKitSidebar kit={kit} />
              </div>

              <ResultTestimonialsSection
                arrows={resultTestimonialSlider}
                testimonials={resultTestimonials}
              />
              {/* ResultAddonsSection hidden as per requirement */}
              {/* <ResultAddonsSection addOns={resultAddOns} /> */}
              <ResultFaqSection faqs={resultFaqs} />
            </div>

            <div className="hide-mobile-only desktop-sticky-sidebar">
              <ResultKitSidebar kit={kit} />
            </div>
          </div>
        </div>
      </div>

      <ResultFooter />
      <ResultKitFloatingButton />
    </main>
  );
}
