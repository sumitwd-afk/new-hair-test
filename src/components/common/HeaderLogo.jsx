import Image from "next/image";
import Link from "next/link";
import logoImage from "@/images/logo.png";

export default function HeaderLogo({ className = "" }) {
  return (
    <Link href="/">
      <Image
        src={logoImage}
        alt="Uroots brand backed by QHT"
        className={className}
        priority
        width={422}
        height={70}
      />
    </Link>
  );
}