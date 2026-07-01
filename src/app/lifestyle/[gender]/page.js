import { notFound } from "next/navigation";
import LifestyleQuestion from "@/components/screens/LifestyleQuestion";

const validGenders = new Set(["male", "female"]);

export default async function LifestylePage({ params }) {
  const { gender } = await params;

  if (!validGenders.has(gender)) {
    notFound();
  }

  return <LifestyleQuestion gender={gender} />;
}
