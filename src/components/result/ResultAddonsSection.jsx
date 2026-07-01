import Image from "next/image";

export default function ResultAddonsSection({ addOns }) {
  return (
    <section className="result-addon-wrap">
      <h3>Recommended Add-ons for better results</h3>

      <ul className="result-addon-list">
        {addOns.map((addOn) => (
          <li key={addOn.id}>
            <div className="img-box">
              <Image src={addOn.image} alt={addOn.name} />
            </div>
            <div className="text-box">
              <p>{addOn.name}</p>
              <p>{addOn.description}</p>
              <span>{addOn.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
