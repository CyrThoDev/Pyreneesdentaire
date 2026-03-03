"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "red" | "white" | "black" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "red",
  className,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const base =
    "font-oswald font-semibold sm:inline-flex items-center justify-center rounded-none px-6 py-4 hover:brightness-95 transition";

  const variants: Record<Variant, string> = {
    red: "bg-red text-white hover:bg-red/80 focus-visible:ring-red",
    white: "bg-white text-red hover:bg-gray-100 focus-visible:ring-red",
    black: "bg-white text-black hover:bg-gray-100 focus-visible:ring-black",
    ghost: "text-red hover:bg-red/10 focus-visible:ring-red",
  };

  const classes = `${base} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    const isExternal =
      href.startsWith("http") || href.endsWith(".pdf");

    // 👉 Si PDF ou lien externe → <a>
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel={rel ?? "noopener noreferrer"}
          onClick={onClick}
          className={classes}
        >
          {children}
        </a>
      );
    }

    // 👉 Sinon navigation interne Next.js
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}