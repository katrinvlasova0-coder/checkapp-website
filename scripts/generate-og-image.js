const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_PATH = path.join(__dirname, '../public/og-default.png');
const DIDI_BODY = path.join(__dirname, '../public/assets/didi-body-home.png');
const DIDI_AVATAR = path.join(__dirname, '../public/assets/didi-avatar-header.png');

const didiBase64 = fs.existsSync(DIDI_BODY)
  ? `data:image/png;base64,${fs.readFileSync(DIDI_BODY).toString('base64')}`
  : '';

const avatarBase64 = fs.existsSync(DIDI_AVATAR)
  ? `data:image/png;base64,${fs.readFileSync(DIDI_AVATAR).toString('base64')}`
  : '';

// 1200 x 630 SVG with CheckApp brand tokens:
// Forest #0e1f01, Primary Green #588317, Warm paper #f6f8f0, Olive #93b050, Sky #4fa3c4, Sun #e8c547
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1f01" />
      <stop offset="45%" stop-color="#142803" />
      <stop offset="85%" stop-color="#1c3608" />
      <stop offset="100%" stop-color="#0b1701" />
    </linearGradient>

    <radialGradient id="glowGreen" cx="18%" cy="75%" r="65%">
      <stop offset="0%" stop-color="#588317" stop-opacity="0.55" />
      <stop offset="60%" stop-color="#588317" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#588317" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glowSky" cx="82%" cy="25%" r="60%">
      <stop offset="0%" stop-color="#4fa3c4" stop-opacity="0.4" />
      <stop offset="60%" stop-color="#4fa3c4" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#4fa3c4" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="glowMascot" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#93b050" stop-opacity="0.45" />
      <stop offset="50%" stop-color="#4fa3c4" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#0e1f01" stop-opacity="0" />
    </radialGradient>

    <filter id="shadowCard" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.45" />
    </filter>

    <filter id="shadowMascot" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="28" flood-color="#000000" flood-opacity="0.55" />
    </filter>
  </defs>

  <style>
    .font-title { font-family: -apple-system, BlinkMacSystemFont, "Bricolage Grotesque", "Cabinet Grotesk", "Segoe UI", sans-serif; font-weight: 800; }
    .font-body { font-family: -apple-system, BlinkMacSystemFont, "DM Sans", "Inter", "Segoe UI", sans-serif; }
    .font-mono { font-family: ui-monospace, "DM Mono", SFMono-Regular, monospace; }
  </style>

  <!-- Background Base -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Ambient Glows -->
  <rect width="1200" height="630" fill="url(#glowGreen)" />
  <rect width="1200" height="630" fill="url(#glowSky)" />

  <!-- Decorative subtle grid dots -->
  <pattern id="dotPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
    <circle cx="16" cy="16" r="1.2" fill="#f6f8f0" fill-opacity="0.07" />
  </pattern>
  <rect width="1200" height="630" fill="url(#dotPattern)" />

  <!-- LEFT COLUMN: Brand, Headline, Explanation, Badges, Footer -->
  <g transform="translate(72, 60)">
    <!-- Top Pill: Brand + Mascot Avatar -->
    <g>
      <rect width="216" height="46" rx="23" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1.2" />
      <image href="${avatarBase64}" x="7" y="7" width="32" height="32" clip-path="inset(0% round 16px)" />
      <text x="48" y="29" fill="#f6f8f0" class="font-title" font-size="18" font-weight="800" letter-spacing="-0.02em">CheckApp</text>
      <circle cx="146" cy="23" r="3.5" fill="#93b050" />
      <text x="157" y="27" fill="#93b050" class="font-mono" font-size="11" font-weight="700" letter-spacing="0.08em">MEET DIDI</text>
    </g>

    <!-- Main Headline -->
    <g transform="translate(0, 102)">
      <text x="0" y="0" fill="#f6f8f0" class="font-title" font-size="58" font-weight="800" letter-spacing="-0.035em">
        Your AI Health
      </text>
      <text x="0" y="66" fill="#f6f8f0" class="font-title" font-size="58" font-weight="800" letter-spacing="-0.035em">
        Companion.
      </text>
    </g>

    <!-- Clear Explanation of What CheckApp Is -->
    <g transform="translate(0, 248)">
      <text x="0" y="0" fill="#e7eedd" class="font-body" font-size="21" font-weight="500">
        A daily wellness app where <tspan fill="#93b050" font-weight="700">DIDI</tspan> checks in on you,
      </text>
      <text x="0" y="32" fill="#e7eedd" class="font-body" font-size="21" font-weight="500">
        analyzes your tongue scans for hydration signals,
      </text>
      <text x="0" y="64" fill="#e7eedd" class="font-body" font-size="21" font-weight="500">
        and turns healthy habits into a daily conversation.
      </text>
    </g>

    <!-- Feature Badges -->
    <g transform="translate(0, 372)">
      <!-- Badge 1: Daily Check-ins -->
      <g transform="translate(0, 0)">
        <rect width="186" height="42" rx="21" fill="#588317" fill-opacity="0.35" stroke="#93b050" stroke-opacity="0.55" stroke-width="1.2" />
        <circle cx="22" cy="21" r="5" fill="#93b050" />
        <text x="38" y="26" fill="#f6f8f0" class="font-body" font-size="14" font-weight="600">Daily Check-ins</text>
      </g>

      <!-- Badge 2: Tongue Scan AI -->
      <g transform="translate(198, 0)">
        <rect width="186" height="42" rx="21" fill="#4fa3c4" fill-opacity="0.3" stroke="#4fa3c4" stroke-opacity="0.55" stroke-width="1.2" />
        <circle cx="22" cy="21" r="5" fill="#4fa3c4" />
        <text x="38" y="26" fill="#f6f8f0" class="font-body" font-size="14" font-weight="600">Tongue Scan AI</text>
      </g>

      <!-- Badge 3: 4P Prevention -->
      <g transform="translate(396, 0)">
        <rect width="176" height="42" rx="21" fill="#e8c547" fill-opacity="0.25" stroke="#e8c547" stroke-opacity="0.55" stroke-width="1.2" />
        <circle cx="22" cy="21" r="5" fill="#e8c547" />
        <text x="38" y="26" fill="#f6f8f0" class="font-body" font-size="14" font-weight="600">4P Prevention</text>
      </g>
    </g>

    <!-- Footer URL -->
    <g transform="translate(0, 458)">
      <text x="0" y="0" fill="#93b050" class="font-mono" font-size="15" font-weight="700" letter-spacing="0.04em">checkapp.today</text>
      <text x="142" y="0" fill="#ffffff" fill-opacity="0.35" class="font-mono" font-size="15">·</text>
      <text x="160" y="0" fill="#ffffff" fill-opacity="0.75" class="font-body" font-size="15" font-weight="500">Free on iOS &amp; Android</text>
    </g>
  </g>

  <!-- RIGHT COLUMN: Mascot DIDI + Floating Glassmorphism Cards -->
  <!-- Glow Behind Mascot -->
  <circle cx="940" cy="320" r="250" fill="url(#glowMascot)" />

  <!-- Floating Chat Bubble from DIDI (placed higher to avoid overlap) -->
  <g transform="translate(730, 48)" filter="url(#shadowCard)">
    <rect width="390" height="82" rx="22" fill="#f6f8f0" stroke="#ffffff" stroke-width="1.2" />
    <!-- Mini Avatar -->
    <image href="${avatarBase64}" x="16" y="16" width="50" height="50" clip-path="inset(0% round 16px)" />
    <!-- Bubble text -->
    <text x="78" y="38" fill="#0e1f01" class="font-title" font-size="15" font-weight="800">DIDI</text>
    <text x="122" y="38" fill="#5c5c5c" class="font-mono" font-size="11">daily check-in</text>
    <text x="78" y="60" fill="#2d2d2d" class="font-body" font-size="14" font-weight="500">
      Good morning! Ready for a 2-min check-in?
    </text>
  </g>

  <!-- Mascot DIDI Graphic -->
  <g transform="translate(770, 130)" filter="url(#shadowMascot)">
    <image href="${didiBase64}" x="0" y="0" width="310" height="490" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- Floating Hydration Pill at Bottom Right -->
  <g transform="translate(680, 485)" filter="url(#shadowCard)">
    <rect width="230" height="72" rx="20" fill="#142803" stroke="#93b050" stroke-width="1.5" stroke-opacity="0.7" />
    <circle cx="38" cy="36" r="20" fill="#4fa3c4" fill-opacity="0.25" />
    <text x="28" y="42" fill="#4fa3c4" font-size="18">💧</text>
    <text x="70" y="30" fill="#f6f8f0" class="font-title" font-size="16" font-weight="800">Hydration 74%</text>
    <text x="70" y="52" fill="#93b050" class="font-body" font-size="13" font-weight="600">Optimal streak · Day 5</text>
  </g>
</svg>`;

const tempSvgPath = path.join(__dirname, '../public/og-default.svg');
fs.writeFileSync(tempSvgPath, svg, 'utf-8');
console.log('✅ Generated SVG at', tempSvgPath);

try {
  execSync(`sips -s format png "${tempSvgPath}" --out "${OUTPUT_PATH}"`, { stdio: 'inherit' });
  console.log('✅ Converted to PNG via sips:', OUTPUT_PATH);
} catch (e) {
  console.warn('⚠️ sips direct conversion note:', e.message);
}
