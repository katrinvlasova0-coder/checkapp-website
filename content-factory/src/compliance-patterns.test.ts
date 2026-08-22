import { FORBIDDEN_PATTERNS } from '../config/forbidden-patterns';

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function shouldMatch(pattern: RegExp, text: string, label: string): void {
  assert(pattern.test(text), `expected to MATCH (${label}): ${text}`);
}

function shouldNotMatch(pattern: RegExp, text: string, label: string): void {
  assert(!pattern.test(text), `expected NOT to match (${label}): ${text}`);
}

shouldNotMatch(
  FORBIDDEN_PATTERNS.medicalDiagnosis,
  'Tongue photos may show hydration indicators for wellness awareness, not a clinical diagnosis.',
  'educational wellness signal language',
);

shouldMatch(
  FORBIDDEN_PATTERNS.medicalDiagnosis,
  'This app diagnoses dehydration with clinical accuracy.',
  'diagnosis claim',
);

shouldNotMatch(
  FORBIDDEN_PATTERNS.medicalDeviceClaim,
  'CheckApp is a wellness app, not an FDA-approved medical device.',
  'educational not-a-device sentence',
);

shouldMatch(
  FORBIDDEN_PATTERNS.medicalDeviceClaim,
  'CheckApp is FDA-approved to treat hypertension.',
  'FDA treatment claim',
);

shouldNotMatch(
  FORBIDDEN_PATTERNS.replacesDoctor,
  'Apps complement professional guidance; they do not replace your doctor.',
  'educational doctor complement',
);

shouldMatch(
  FORBIDDEN_PATTERNS.replacesDoctor,
  'You no longer need to see a doctor if you use this app.',
  'replaces doctor claim',
);

shouldNotMatch(
  FORBIDDEN_PATTERNS.guaranteedOutcome,
  'No wellness app can guarantee perfect hydration every day.',
  'educational no-guarantee',
);

shouldMatch(
  FORBIDDEN_PATTERNS.guaranteedOutcome,
  'We guarantee your hydration will reach 100% accuracy.',
  'guaranteed outcome',
);

console.log('✅ compliance-patterns.test.ts passed');
