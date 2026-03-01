// app/components/PrintButton.tsx
"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="font-semibold text-red underline underline-offset-4 hover:brightness-95"
    >
      cliquez ici
    </button>
  );
}