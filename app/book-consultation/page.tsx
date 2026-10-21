import { redirect } from "next/navigation";

export default function LegacyConsultationRoute() {
  redirect("/consultation#consultation-form");
}
