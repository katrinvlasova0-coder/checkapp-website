type TableOfContentsProps = {
  headings: { id: string; text: string }[];
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
        Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
