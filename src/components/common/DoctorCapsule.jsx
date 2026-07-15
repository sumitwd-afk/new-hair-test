import Image from "next/image";
import drDpImage from "@/images/dr-neha.webp";

export default function DoctorCapsule({ className = "" }) {
  return (
    <aside className={`doctor-capsule ${className}`.trim()}>
      <Image
        src={drDpImage}
        alt="QHT Clinic Doctors"
        className="doctor-capsule__avatar"
        priority
      />
      <div className="doctor-capsule__copy">
        <p>Reviewed by</p>
        <strong>QHT Clinic Doctors</strong>
      </div>
    </aside>
  );
}
