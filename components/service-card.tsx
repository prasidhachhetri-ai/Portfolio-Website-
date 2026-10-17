import {
  ArrowUpRight,
  BrainCircuit,
  Funnel,
  MailCheck,
  Megaphone,
  MessageSquareQuote,
  NotebookPen,
  PanelsTopLeft,
} from "lucide-react";
import { Link } from "@/components/site-link";
import { ServiceCardVisual } from "@/components/service-card-visual";
import type { Service } from "@/data/site";

const icons = [
  BrainCircuit,
  Megaphone,
  Funnel,
  NotebookPen,
  PanelsTopLeft,
  MessageSquareQuote,
  MailCheck,
];

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = icons[index % icons.length];

  return (
    <article className={`card service-card service-card-${index + 1} flex min-h-[300px] flex-col`}>
      <ServiceCardVisual index={index} />
      <div className="service-card__content flex flex-1 flex-col">
        <div className="icon-tile mb-7"><Icon size={22} aria-hidden="true" /></div>
        <h3 className="text-xl font-extrabold leading-snug">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{service.summary}</p>
        <Link className="text-link mt-4 text-sm" href={`/services/${service.slug}`}>
          Explore this service <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
