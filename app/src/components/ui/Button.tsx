"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "red" | "white" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "red",
  className,
  type = "button",
}: ButtonProps) {
  const base =
    " font-barlow font-semibold sm:inline-flex  items-center justify-center rounded-none px-6 py-4 hover:brightness-95 transition" 



   

  const variants: Record<Variant, string> = {
    red: "bg-red text-white hover:bg-red/80 focus-visible:ring-red",
    white: "bg-white text-red hover:bg-gray-100 focus-visible:ring-red",
    outline:
      "border border-red text-red hover:bg-red hover:text-white focus-visible:ring-red",
    ghost: "text-red hover:bg-red/10 focus-visible:ring-red",
  };

  const classes = `${base} ${variants[variant]} ${className ?? ""}`;

  if (href) {
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