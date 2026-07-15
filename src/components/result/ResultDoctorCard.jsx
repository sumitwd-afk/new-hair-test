import Image from "next/image";

export default function ResultDoctorCard({ doctor }) {
  return (
    <div className="result-doctor-card" style={{ padding: "2rem" }}>
      <div className="doctor-top" style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.2rem" }}>
        <div className="doctor-avatar" style={{ width: "7.5rem", height: "7.5rem", flex: "0 0 7.5rem" }}>
          <Image src={doctor.image} alt={doctor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div className="doctor-meta" style={{ flexGrow: 1, minWidth: 0 }}>
          <span className="doctor-badge" style={{ marginBottom: "0.4rem" }}>
            <Image src={doctor.badgeIcon} alt="" aria-hidden="true" />
            {doctor.badgeLabel}
          </span>
          <h3 className="doctor-name" style={{ fontSize: "2rem", fontWeight: "700", whiteSpace: "nowrap", margin: 0 }}>
            {doctor.name}
          </h3>
          <p className="doctor-role" style={{ fontSize: "1.4rem", color: "#16a34a", fontWeight: "600", margin: "0.2rem 0 0" }}>
            {doctor.role}
          </p>
        </div>
      </div>

      <div className="doctor-additional-info" style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        borderTop: "1px solid #f1f5f9",
        paddingTop: "1.2rem",
        marginTop: "1rem"
      }}>
        <div style={{ fontSize: "1.4rem", color: "#334155", lineHeight: "1.4" }}>
          <strong>{doctor.degree}</strong>
        </div>
        <div style={{ fontSize: "1.4rem", color: "#475569", lineHeight: "1.4" }}>
          <span>QHT Clinic, {doctor.location}</span>
        </div>
      </div>
    </div>
  );
}
