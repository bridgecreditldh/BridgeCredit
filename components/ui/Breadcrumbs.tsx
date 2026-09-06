import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-royal">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink/80">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="text-ink/30">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
