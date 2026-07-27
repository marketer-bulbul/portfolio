import Image from "next/image";
import { clientLogos } from "@/lib/data";

export default function LogoMarquee() {
  const loop = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="relative overflow-hidden bg-base py-16">
      <div className="pointer-events-none absolute -top-24" aria-hidden />
      <p className="eyebrow mb-8 text-center">Trusted By Brands</p>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={i}
              className="flex h-14 w-32 flex-shrink-0 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={logo}
                alt={`Client brand logo ${(i % clientLogos.length) + 1}`}
                width={128}
                height={56}
                className="h-full w-auto object-contain"
                style={{
                  filter: "brightness(0) invert(1)",
                  mixBlendMode: "screen",
                }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
