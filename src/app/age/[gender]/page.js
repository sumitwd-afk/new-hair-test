import { notFound } from "next/navigation";
import AgeQuestion from "@/components/screens/AgeQuestion";

const validGenders = new Set(["male", "female"]);

export default async function AgePage({ params }) {
  const { gender } = await params;

  if (!validGenders.has(gender)) {
    notFound();
  }

  return <AgeQuestion gender={gender} />;
}
