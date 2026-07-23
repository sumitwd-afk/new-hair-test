import Image from "next/image";

export default function ResultKitSidebar({ kit }) {
  return (
    <aside id="personalised-kit" className="result-card result-kit-card">
      <div className="result-kit-head">{kit.eyebrow}</div>

      <div className="result-kit-body">
        <div className="result-kit-summary">
          <div className="result-kit-summary-copy">
            <h2>{kit.title}</h2>
            <p>{kit.subtitle}</p>
          </div>

          <div className="result-price">
            <span className="old">{kit.oldPrice}</span>
            <span className="new">{kit.newPrice}</span>
          </div>
        </div>

        <div className="result-divider" />

        <p className="result-kit-label">{kit.label}</p>

        <ul className="result-kit-list">
          {kit.products.map((product) => (
            <li key={product.id}>
              <div className="kit-img">
                {typeof product.image === "string" ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <Image src={product.image} alt={product.name} />
                )}
              </div>

              <div className="kit-copy">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="result-cert-row">
          {kit.certifications.map((certification) => (
            <div key={certification.id} className="result-cert-item">
              <Image src={certification.icon} alt="" aria-hidden="true" />
              <span>{certification.label}</span>
            </div>
          ))}
        </div>

        {kit.checkoutUrl ? (
          <>
            <a
              href={kit.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="result-cta"
            >
              <span>{kit.ctaLabel}</span>
              <Image src={kit.ctaIcon} alt="" aria-hidden="true" />
            </a>
            <div className="print-only-link-wrapper" style={{ display: "none", marginTop: "1.5rem", textAlign: "center" }}>
              <span style={{ fontSize: "1.3rem", color: "#333", display: "block", marginBottom: "0.5rem" }}>
                Can&apos;t click the button above? Tap the link below to checkout:
              </span>
              <a
                href={kit.checkoutUrl}
                style={{
                  fontSize: "1.3rem",
                  color: "#0284c7",
                  textDecoration: "underline",
                  wordBreak: "break-all",
                  fontWeight: "500",
                  display: "inline-block"
                }}
              >
                {kit.checkoutUrl}
              </a>
            </div>
          </>
        ) : (
          <button type="button" className="result-cta">
            <span>{kit.ctaLabel}</span>
            <Image src={kit.ctaIcon} alt="" aria-hidden="true" />
          </button>
        )}
      </div>
    </aside>
  );
}
