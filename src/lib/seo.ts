import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './constants';

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  /** Thin or duplicate pages (content-factory fallbacks) must not be indexed. */
  noindex?: boolean;
};

/**
 * Join a site-relative path with the origin. Leave absolute http(s) URLs alone.
 * Prefixing the origin onto `https://…` produces `https://checkapp.todayhttps//…`
 * after the URL parser collapses the second scheme.
 */
export function absoluteAssetUrl(asset: string): string {
  const trimmed = asset.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  const origin = SITE_URL.replace(/\/$/, '');
  return `${origin}${trimmed.startsWith('/') ? trimmed : `/${trimmed}`}`;
}

export function createMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: PageMeta): Metadata {
  const url = absoluteAssetUrl(path);
  const image = absoluteAssetUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: { index: false, follow: true },
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/didi-app-icon.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@checkapp.today',
      contactType: 'customer support',
    },
  };
}

export function mobileApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE_NAME,
    description:
      'AI-powered health companion app with daily check-ins, tongue scan analysis, and video messages.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2400',
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Person',
      name: post.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/didi-app-icon.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}
