import Image from "next/image";

export default function ResultDoctorCard({ doctor }) {
  return (
    <div className="result-doctor-card">
      <div className="doctor-top">
        <div className="doctor-avatar">
          <Image src={doctor.image} alt={doctor.name} />
        </div>

        <div className="doctor-meta">
          <span className="doctor-badge">
            <Image src={doctor.badgeIcon} alt="" aria-hidden="true" />
            {doctor.badgeLabel}
          </span>
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-role">{doctor.role} • {doctor.degree}</p>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
            marginTop: "0.5rem",
            fontSize: "1.5rem",
            color: "#64748b",
            fontWeight: "500"
          }}>
            <span>💼 {doctor.experience} Exp</span>
            <span>|</span>
            <span>📍 {doctor.location}</span>
          </div>
        </div>
      </div>

      <p className="doctor-desc">{doctor.description}</p>
    </div>
  );
}
