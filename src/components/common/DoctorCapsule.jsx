import Image from "next/image";
import drDpImage from "@/images/dr-dp.png";

export default function DoctorCapsule({ className = "" }) {
  return (
    <aside className={`doctor-capsule ${className}`.trim()}>
      <Image
        src={drDpImage}
        alt="Dr. Shilpa"
        className="doctor-capsule__avatar"
        priority
      />
      <div className="doctor-capsule__copy">
        <p>Reviewed by</p>
        <span>Our Ayurvedic doctors</span>
        <strong>Dr.Shilpa</strong>
      </div>
    </aside>
  );
}
