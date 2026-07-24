"use client";

/**
 * Generates a PDF from the result page with a clickable "Order Now" button.
 *
 * Uses html2canvas to render the page as an image, then jsPDF to create the
 * PDF and add an explicit link annotation over the button area.
 */
export async function generateResultPdf() {
  // Dynamically import to avoid SSR issues
  const html2canvas = (await import("html2canvas")).default;
  const { jsPDF } = await import("jspdf");

  // Target the kit sidebar (desktop version which has the Order Now button)
  const kitCard = document.querySelector(".desktop-sticky-sidebar .result-kit-card") 
    || document.querySelector(".result-kit-card");

  // Target the overview section
  const overviewSection = document.querySelector(".result-left-top");

  if (!overviewSection) {
    alert("Could not find the result section. Please try again.");
    return;
  }

  // Get the checkout URL from the Order Now button
  const ctaLink = document.querySelector(".result-cta");
  const checkoutUrl = ctaLink ? (ctaLink.getAttribute("href") || ctaLink.href) : "https://theuroots.com/cart";

  // Create a temporary container for PDF content
  const pdfContainer = document.createElement("div");
  pdfContainer.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: 800px;
    background: #FFFFFF;
    padding: 40px;
    font-family: inherit;
    z-index: -1;
  `;
  document.body.appendChild(pdfContainer);

  // Clone overview section
  const overviewClone = overviewSection.cloneNode(true);
  // Remove actions bar from clone
  const actionsBar = overviewClone.querySelector(".result-actions");
  if (actionsBar) actionsBar.remove();
  // Remove user image box from clone
  const userBox = overviewClone.querySelector(".result-user-box");
  if (userBox) userBox.remove();

  pdfContainer.appendChild(overviewClone);

  // Clone kit card if it exists
  let kitClone = null;
  if (kitCard) {
    kitClone = kitCard.cloneNode(true);
    kitClone.style.position = "relative";
    kitClone.style.top = "auto";
    kitClone.style.marginTop = "30px";
    pdfContainer.appendChild(kitClone);
  }

  // Wait a tick for images to render
  await new Promise((r) => setTimeout(r, 300));

  try {
    // Render the container to canvas
    const canvas = await html2canvas(pdfContainer, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#FFFFFF",
      logging: false,
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.92);
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // A4 page dimensions in mm
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 10;
    const contentWidth = pageWidth - margin * 2;
    const contentHeight = (imgHeight / imgWidth) * contentWidth;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // If content fits in one page
    if (contentHeight <= pageHeight - margin * 2) {
      pdf.addImage(imgData, "JPEG", margin, margin, contentWidth, contentHeight);
    } else {
      // Multi-page: slice the image across pages
      let yOffset = 0;
      const pageContentHeight = pageHeight - margin * 2;
      const totalPages = Math.ceil(contentHeight / pageContentHeight);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();

        // Calculate source slice from canvas
        const sourceY = (yOffset / contentHeight) * imgHeight;
        const sourceH = (pageContentHeight / contentHeight) * imgHeight;

        // Create a slice canvas
        const sliceCanvas = document.createElement("canvas");
        sliceCanvas.width = imgWidth;
        sliceCanvas.height = Math.min(sourceH, imgHeight - sourceY);
        const ctx = sliceCanvas.getContext("2d");
        ctx.drawImage(
          canvas,
          0, sourceY,
          imgWidth, sliceCanvas.height,
          0, 0,
          imgWidth, sliceCanvas.height
        );

        const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.92);
        const sliceDisplayHeight = (sliceCanvas.height / imgWidth) * contentWidth;
        pdf.addImage(sliceData, "JPEG", margin, margin, contentWidth, sliceDisplayHeight);

        yOffset += pageContentHeight;
      }
    }

    // Now add a clickable link annotation on the "Order Now" button
    // Find the CTA button position in the cloned container
    const clonedCta = pdfContainer.querySelector(".result-cta");
    if (clonedCta && checkoutUrl) {
      const containerRect = pdfContainer.getBoundingClientRect();
      const ctaRect = clonedCta.getBoundingClientRect();

      // Calculate position relative to container
      const relX = ctaRect.left - containerRect.left;
      const relY = ctaRect.top - containerRect.top;
      const relW = ctaRect.width;
      const relH = ctaRect.height;

      // Scale to PDF coordinates (mm)
      const scaleX = contentWidth / containerRect.width;
      const scaleY = contentHeight / containerRect.height;

      const pdfX = margin + relX * scaleX;
      const pdfY = margin + relY * scaleY;
      const pdfW = relW * scaleX;
      const pdfH = relH * scaleY;

      // Determine which page the button is on
      const pageContentHeight = pageHeight - margin * 2;
      const buttonPage = Math.floor(pdfY / pageContentHeight) + 1;
      const buttonYOnPage = pdfY - (buttonPage - 1) * pageContentHeight;

      // Set the page
      pdf.setPage(buttonPage);

      // Add the link annotation
      pdf.link(pdfX, buttonYOnPage, pdfW, pdfH, { url: checkoutUrl });
    }

    // Save the PDF
    pdf.save("uroots-hair-report.pdf");
  } catch (err) {
    console.error("PDF generation failed:", err);
    // Fallback to window.print()
    window.print();
  } finally {
    // Clean up
    document.body.removeChild(pdfContainer);
  }
}
