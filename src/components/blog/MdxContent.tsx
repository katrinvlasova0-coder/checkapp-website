import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

const components = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    return <h2 id={id} {...props} />;
  },
  table: (props: TableHTMLAttributes<HTMLTableElement>) => (
    <div className="prose-table-wrap my-8 overflow-x-auto rounded-2xl border border-black/8 bg-card shadow-sm">
      <table {...props} />
    </div>
  ),
  thead: (props: HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-bg-warm" {...props} />
  ),
  th: (props: ThHTMLAttributes<HTMLTableCellElement>) => (
    <th {...props} />
  ),
  td: (props: TdHTMLAttributes<HTMLTableCellElement>) => (
    <td {...props} />
  ),
};

type MdxContentProps = {
  source: string;
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose-checkapp">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
