"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "gold" | "teal" | "outline" | "outlineLight";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-[background,color,border-color] duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink shadow-gold hover:bg-gold-deep hover:text-cream",
  teal: "bg-teal-deep text-cream shadow-soft hover:bg-ink",
  outline:
    "border border-ink/20 text-ink hover:border-gold hover:text-gold-deep",
  outlineLight:
    "border border-cream/30 text-cream hover:border-gold hover:bg-cream/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

export function CtaButton({
  href,
  children,
  variant = "gold",
  size = "lg",
  className = "",
  external = true,
  ariaLabel,
  dataEvent,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  dataEvent?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      data-event={dataEvent}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { y: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.a>
  );
}
