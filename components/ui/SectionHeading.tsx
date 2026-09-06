export default function SectionHeading({
  title,
  lede,
  align = "left",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight">{title}</h2>
      {lede ? <p className="mt-3 text-[17px] text-ink/70 leading-relaxed">{lede}</p> : null}
    </div>
  );
}
