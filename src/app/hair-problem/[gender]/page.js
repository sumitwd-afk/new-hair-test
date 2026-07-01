import { notFound } from "next/navigation";
import HairProblemQuestion from "@/components/screens/HairProblemQuestion";

const validGenders = new Set(["male", "female"]);

export default async function HairProblemPage({ params }) {
  const { gender } = await params;

  if (!validGenders.has(gender)) {
    notFound();
  }

  return <HairProblemQuestion gender={gender} />;
}
