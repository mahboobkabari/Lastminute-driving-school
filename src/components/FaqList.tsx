import { FaqAccordion } from "./FaqAccordion";
import { faqs } from "@/data/faq";

export function FaqList({ items }: { items?: { question: string; answer: string }[] | [string, string][] }) {
  // If items are passed in old format, normalize or use faqs
  return <FaqAccordion items={faqs} />;
}
