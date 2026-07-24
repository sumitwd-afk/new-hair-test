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

        <a
          href={kit.checkoutUrl || "https://theuroots.com/cart"}
          target="_blank"
          rel="noopener noreferrer"
          className="result-cta"
        >
          {kit.ctaLabel}
        </a>
      </div>
    </aside>
  );
}
