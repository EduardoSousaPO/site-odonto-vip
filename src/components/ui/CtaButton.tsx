"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Variant = "primary" | "whatsapp" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-2xl font-semibold transition-colors duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-navy-700",
  whatsapp:
    "bg-teal text-white shadow-soft hover:bg-teal-600",
  outline:
    "border-2 border-navy/15 bg-white text-navy hover:border-teal hover:text-teal-600",
  ghost: "text-navy hover:text-teal-600",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base md:text-lg",
};

export function CtaButton({
  href,
  children,
  variant = "whatsapp",
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
  /** rótulo p/ instrumentar conversão depois (GA/eventos) */
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
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
