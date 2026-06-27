import { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  id,
  className = "",
  tint = false,
  containerClassName = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  /** fundo claro alternado (--mist) */
  tint?: boolean;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${
        tint ? "bg-cream-200" : "bg-cream"
      } ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
