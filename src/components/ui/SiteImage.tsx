import Image, { type ImageProps } from 'next/image';
import { withBasePath } from '@/lib/paths';

type SiteImageProps = ImageProps & {
  src: string;
  alt: string;
};

/** Local public/ image with automatic GitHub Pages basePath prefix. */
export function SiteImage({ src, ...props }: SiteImageProps) {
  return <Image src={withBasePath(src)} {...props} />;
}
