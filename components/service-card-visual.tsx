import Image from "next/image";

export function ServiceCardVisual({ src, className = "service-card__visual" }: { src: string; className?: string }) {
  return (
    <Image
      className={className}
      src={src}
      alt=""
      width={1120}
      height={1400}
      sizes="(max-width: 620px) 72vw, (max-width: 900px) 38vw, 260px"
      aria-hidden="true"
    />
  );
}
