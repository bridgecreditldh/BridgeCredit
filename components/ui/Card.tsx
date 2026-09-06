import { ReactNode } from "react";

export default function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_8px_28px_-8px_rgba(11,37,69,0.18)] ${className}`}>
      {children}
    </div>
  );
}
