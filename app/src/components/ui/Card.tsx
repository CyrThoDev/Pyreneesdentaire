// src/components/ui/card.tsx
import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div className={` ${className}`} {...props} />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={`p-4 ${className}`} {...props} />;
}