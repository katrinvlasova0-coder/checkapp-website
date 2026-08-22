/** Patterns that break the MDX blog engine or violate wellness compliance */
export const FORBIDDEN_PATTERNS = {
  jsxComponent: /<[A-Z][a-zA-Z]+[\s/>]/g,
  anchorId: /\{#[^}]+\}/,
  internalAnchorLink: /\[([^\]]+)\]\(#[^)]+\)/,
  scriptTag: /<script[\s>]/i,
  h1InBody: /^# [^#]/m,
  yamlBlockTags: /^tags:\s*\n\s*-/m,
  yamlBlockFaq: /^faq:\s*\n\s*-\s*question/m,
  imageJsx: /<Image[\s/>]/,
  keyTakeaways: /<KeyTakeaways/,
  callout: /<Callout/,
  mockAbsatzFiller: /Absatz \d+ vertieft/i,
  medicalDiagnosis:
    /\b(?:\b(?:can|will|helps?\s+to)\s+diagnos(?:e|is|ing)|\bdiagnos(?:e|is|es|ing)\s+(?:dehydration|disease|illness|conditions?|disorders?)|detects?\s+(?:disease|illness|condition)|identifies?\s+(?:disease|illness|disorder)|(?:clinical|accurate|medical)\s+diagnosis(?:\s+with|\s+of|\s+for))\b/i,
  medicalDeviceClaim:
    /\b(?:(?:is|are)\s+(?:an?\s+)?FDA[- ]approved(?:\s+(?:medical\s+)?device)?|(?:is|are)\s+(?:a\s+)?medical device|clinically\s+proven\s+to\s+(?:cure|treat|diagnose))\b/i,
  replacesDoctor:
    /\b(?:\b(?:we|this app|checkapp|didi|apps?)\s+(?:can\s+)?replace(?:s)?\s+your\s+doctor|instead\s+of\s+seeing\s+a\s+doctor|no\s+(?:longer\s+)?need\s+(?:to\s+)?(?:see|for)\s+(?:a\s+)?doctor)\b/i,
  guaranteedOutcome:
    /\b(?:guaranteed\s+(?:to\s+)?(?:cure|heal|fix|diagnose)|100\s*%\s+accurate\s+(?:diagnosis|detection)|we\s+guarantee\s+(?:your\s+)?(?:health|hydration|recovery))\b/i,
  fakeExpertAuthor:
    /dr\.\s*(?:jane\s+smith|john\s+doe|sarah\s+wellness)|invented\s+expert|certified\s+medical\s+ai/i,
} as const;

export const FORBIDDEN_PATTERN_MESSAGES: Record<keyof typeof FORBIDDEN_PATTERNS, string> = {
  jsxComponent: 'JSX components found — not allowed in MDX',
  anchorId: 'Anchor IDs {#id} found — not allowed in MDX',
  internalAnchorLink: 'Internal anchor links [text](#id) found — not allowed',
  scriptTag: '<script> tag found — not allowed in MDX',
  h1InBody: 'H1 (# Heading) in article body — not allowed',
  yamlBlockTags: 'YAML block array for tags — use an inline array',
  yamlBlockFaq: 'YAML block array for faq — use list syntax in frontmatter',
  imageJsx: '<Image /> JSX — only ![alt](url) is allowed',
  keyTakeaways: '<KeyTakeaways> component — not allowed',
  callout: '<Callout> component — not allowed',
  mockAbsatzFiller: 'Mock copy-paste filler (Absatz N vertieft) — article invalid',
  medicalDiagnosis: 'Medical diagnosis language — use wellness signals / indicators instead',
  medicalDeviceClaim: 'Medical device or FDA claim — CheckApp is a wellness app, not a medical device',
  replacesDoctor: 'Language that replaces professional medical care — not allowed',
  guaranteedOutcome: 'Guaranteed health outcome claim — not allowed',
  fakeExpertAuthor: 'Invented expert author — only canonical CheckApp authors are allowed',
};
