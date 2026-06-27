import { ReactNode } from "react";
import { AnimateIn } from "./AnimateIn";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <AnimateIn
      className={`flex flex-col gap-4 ${alignment} ${
        align === "center" ? "max-w-3xl" : ""
      }`}
    >
      {eyebrow && (
        <span className="inline-flex w-fit items-center rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[1.0625rem] text-slate md:text-lg">{subtitle}</p>
      )}
    </AnimateIn>
  );
}
