"use client";

/**
 * Generates a PDF from the result page with a clickable "Order Now" button.
 */
export async function generateResultPdf() {
  // Show loading overlay
  const overlay = document.createElement("div");
  overlay.id = "pdf-loading-overlay";
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); z-index: 99999;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 12px;
  `;
  overlay.innerHTML = `
    <div style="width:40px;height:40px;border:4px solid #fff;border-top-color:#C4FF3B;border-radius:50%;animation:pdfspin 0.8s linear infinite"></div>
    <p style="color:#fff;font-size:16px;font-weight:600">Generating PDF...</p>
    <style>@keyframes pdfspin{to{transform:rotate(360deg)}}</style>
  `;
  document.body.appendChild(overlay);

  try {
    // Dynamic imports
    let html2canvas, jsPDF;
    try {
      html2canvas = (await import("html2canvas")).default;
      const jspdfModule = await import("jspdf");
      jsPDF = jspdfModule.jsPDF;
    } catch (importErr) {
      console.error("Failed to load PDF libraries:", importErr);
      alert("PDF library could not be loaded. Using print instead.");
      window.print();
      return;
    }

    // Get the checkout URL from the Order Now button
    const ctaLink = document.querySelector(".result-cta");
    const checkoutUrl = ctaLink
      ? ctaLink.getAttribute("href") || ctaLink.href || "https://theuroots.com/cart"
      : "https://theuroots.com/cart";

    // Target sections
    const overviewSection = document.querySelector(".result-left-top");
    const kitCard =
      document.querySelector(".desktop-sticky-sidebar .result-kit-card") ||
      document.querySelector(".show-mobile-only .result-kit-card") ||
      document.querySelector(".result-kit-card");

    if (!overviewSection && !kitCard) {
      alert("Could not find the result section.");
      return;
    }

    // Create offscreen container
    const container = document.createElement("div");
    container.style.cssText = `
      position: absolute; left: -9999px; top: 0;
      width: 800px; background: #FFFFFF; padding: 40px;
    `;
    document.body.appendChild(container);

    // Clone overview (without actions/user-image)
    if (overviewSection) {
      const ovClone = overviewSection.cloneNode(true);
      const rm = (sel) => { const el = ovClone.querySelector(sel); if (el) el.remove(); };
      rm(".result-actions");
      rm(".result-user-box");
      container.appendChild(ovClone);
    }

    // Clone kit card
    if (kitCard) {
      const kitClone = kitCard.cloneNode(true);
      kitClone.style.cssText = "position:relative;top:auto;margin-top:30px;";
      container.appendChild(kitClone);
    }

    // Fix all images: strip srcset, use currentSrc from originals
    const clonedImgs = container.querySelectorAll("img");
    const pageImgs = document.querySelectorAll("img");
    // Build a map of alt -> currentSrc from the live page
    const srcMap = {};
    pageImgs.forEach((img) => {
      if (img.alt && img.currentSrc) srcMap[img.alt] = img.currentSrc;
    });

    clonedImgs.forEach((img) => {
      img.removeAttribute("srcset");
      img.removeAttribute("sizes");
      img.removeAttribute("loading");
      if (img.alt && srcMap[img.alt]) {
        img.src = srcMap[img.alt];
      }
    });

    // Wait for all images to load
    await Promise.all(
      Array.from(container.querySelectorAll("img")).map(
        (img) =>
          new Promise((res) => {
            if (img.complete && img.naturalWidth > 0) return res();
            img.onload = res;
            img.onerror = res;
          })
      )
    );
    await new Promise((r) => setTimeout(r, 400));

    // Capture with html2canvas
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#FFFFFF",
      logging: false,
    });

    // Create PDF
    const imgData = canvas.toDataURL("image/jpeg", 0.9);
    const cW = canvas.width;
    const cH = canvas.height;

    const pw = 210; // A4 width mm
    const ph = 297; // A4 height mm
    const m = 10; // margin mm
    const fitW = pw - m * 2;
    const fitH = (cH / cW) * fitW;

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    if (fitH <= ph - m * 2) {
      // Single page
      pdf.addImage(imgData, "JPEG", m, m, fitW, fitH);
    } else {
      // Multi-page
      const pageH = ph - m * 2;
      const pages = Math.ceil(fitH / pageH);
      for (let i = 0; i < pages; i++) {
        if (i > 0) pdf.addPage();
        const srcY = (i * pageH / fitH) * cH;
        const srcH = Math.min((pageH / fitH) * cH, cH - srcY);
        const slice = document.createElement("canvas");
        slice.width = cW;
        slice.height = srcH;
        slice.getContext("2d").drawImage(canvas, 0, srcY, cW, srcH, 0, 0, cW, srcH);
        const sh = (srcH / cW) * fitW;
        pdf.addImage(slice.toDataURL("image/jpeg", 0.9), "JPEG", m, m, fitW, sh);
      }
    }

    // Add clickable link on Order Now button
    const clonedCta = container.querySelector(".result-cta");
    if (clonedCta && checkoutUrl) {
      const cRect = container.getBoundingClientRect();
      const bRect = clonedCta.getBoundingClientRect();
      const rx = bRect.left - cRect.left;
      const ry = bRect.top - cRect.top;
      const sx = fitW / cRect.width;
      const sy = fitH / cRect.height;
      const lx = m + rx * sx;
      const ly = m + ry * sy;
      const lw = bRect.width * sx;
      const lh = bRect.height * sy;

      // Which page?
      const pageH = ph - m * 2;
      const pg = Math.floor(ly / pageH) + 1;
      const lyOnPage = ly - (pg - 1) * pageH;
      pdf.setPage(pg);
      pdf.link(lx, lyOnPage, lw, lh, { url: checkoutUrl });
    }

    pdf.save("uroots-hair-report.pdf");

    // Cleanup
    document.body.removeChild(container);
  } catch (err) {
    console.error("PDF generation error:", err);
    alert("PDF generation failed: " + err.message + ". Using print instead.");
    window.print();
  } finally {
    // Remove loading overlay
    const el = document.getElementById("pdf-loading-overlay");
    if (el) el.remove();
  }
}
