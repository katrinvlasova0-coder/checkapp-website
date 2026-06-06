import type { HTMLAttributes } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    return <h2 id={id} {...props} />;
  },
};

type MdxContentProps = {
  source: string;
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose-checkapp">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
