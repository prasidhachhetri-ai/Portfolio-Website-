import Image from "next/image";

export function ServicePageVisual({ index, src, alt }: { index: number; src: string; alt: string }) {
  return (
    <figure className={`service-detail-visual service-card-${index + 1}`}>
      <Image
        className="service-detail-visual__image"
        src={src}
        alt={alt}
        width={1120}
        height={1400}
        sizes="(max-width: 900px) min(100vw - 2.5rem, 620px), 440px"
      />
    </figure>
  );
}
