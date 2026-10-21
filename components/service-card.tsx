import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  FileText,
  Funnel,
  MailCheck,
  Megaphone,
  MessageCircle,
  Monitor,
  MousePointerClick,
  MessageSquareQuote,
  NotebookPen,
  PanelsTopLeft,
  SearchCheck,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
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
  SearchCheck,
];

const supportingIcons = [
  [Target, BarChart3],
  [Users, MousePointerClick],
  [UserCheck, TrendingUp],
  [FileText, Sparkles],
  [Monitor, MousePointerClick],
  [MessageCircle, BadgeCheck],
  [Send, Workflow],
  [SearchCheck, Sparkles],
];

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = icons[index % icons.length];
  const [SupportingIconOne, SupportingIconTwo] = supportingIcons[index % supportingIcons.length];

  return (
    <article className={`card service-card service-card-${index + 1} flex min-h-[320px] flex-col`}>
      <ServiceCardVisual src={service.image} />
      <div className="service-card__content flex flex-1 flex-col">
        <div className="service-card__icon-row mb-7">
          <div className="icon-tile"><Icon size={24} strokeWidth={2.2} aria-hidden="true" /></div>
          <div className="service-card__supporting-icons" aria-hidden="true">
            <span><SupportingIconOne size={18} strokeWidth={2.2} /></span>
            <span><SupportingIconTwo size={18} strokeWidth={2.2} /></span>
          </div>
        </div>
        <div className="service-card__copy flex-1">
          <h3 className="text-xl font-extrabold leading-snug">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.summary}</p>
        </div>
        <Link className="text-link mt-4 text-sm" href={`/services/${service.slug}`}>
          Explore this service <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}
