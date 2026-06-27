import { ReactNode } from "react";
import { AnimateIn } from "./AnimateIn";

export function SectionTitle({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <AnimateIn
      className={`flex flex-col gap-5 ${
        isCenter ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl"
      }`}
    >
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold">{title}</h2>
      {subtitle && (
        <p className="max-w-[62ch] text-[1.05rem] leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </AnimateIn>
  );
}
