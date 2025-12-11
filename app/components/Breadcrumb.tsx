import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">🏠 Trang chủ</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <span className="breadcrumb-separator">›</span>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
