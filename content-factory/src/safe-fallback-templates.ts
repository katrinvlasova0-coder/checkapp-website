export type FallbackCategory =
  | 'Hydration Science'
  | 'Daily Habits'
  | 'AI & Health'
  | '4P Medicine'
  | 'Preventive Care';

export interface SafeTemplate {
  id: string;
  category: FallbackCategory;
  cluster: string;
  keywordDe: string;
  keywordEn: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  unsplashQuery: string;
  headingsDe: [string, string, string, string, string, string];
  headingsEn: [string, string, string, string, string, string];
  factsDe: string[];
  factsEn: string[];
  listDe: string[];
  listEn: string[];
  tableHeadersDe: [string, string, string];
  tableHeadersEn: [string, string, string];
  tableRows: Array<[string, string, string]>;
  faqDe: Array<{ question: string; answer: string }>;
  faqEn: Array<{ question: string; answer: string }>;
}

function t(
  id: string,
  category: FallbackCategory,
  cluster: string,
  keyword: string,
  title: string,
  description: string,
  unsplashQuery: string,
  headings: SafeTemplate['headingsEn'],
  facts: string[],
  list: string[],
  tableHeaders: SafeTemplate['tableHeadersEn'],
  tableRows: Array<[string, string, string]>,
  faq: Array<{ question: string; answer: string }>,
): SafeTemplate {
  return {
    id,
    category,
    cluster,
    keywordDe: keyword,
    keywordEn: keyword,
    titleDe: title,
    titleEn: title,
    descriptionDe: description,
    descriptionEn: description,
    unsplashQuery,
    headingsDe: headings,
    headingsEn: headings,
    factsDe: facts,
    factsEn: facts,
    listDe: list,
    listEn: list,
    tableHeadersDe: tableHeaders,
    tableHeadersEn: tableHeaders,
    tableRows,
    faqDe: faq,
    faqEn: faq,
  };
}

export const SAFE_TEMPLATES: SafeTemplate[] = [
  t(
    'hydration-signals',
    'Hydration Science',
    'Hydration',
    'daily hydration signals',
    'Daily Hydration Signals: What Your Body Tells You Before You Feel Thirsty',
    'Learn everyday hydration signals — thirst, urine color, energy dips — and how to respond without medical jargon or fear-based claims.',
    'glass of water morning wellness',
    [
      'What Are Everyday Hydration Signals?',
      'Why Do Signals Appear Before Severe Dehydration?',
      'How Can You Track Hydration Without Obsessing?',
      'What Limits Do Wellness Apps Have?',
      'How Do Habits Make Hydration Stick?',
      'What Should You Do When Signals Conflict?',
    ],
    [
      'Thirst is a late signal for some people. Earlier cues include dry mouth, darker urine, afternoon fatigue, and reduced focus during routine tasks.',
      'Fluid needs vary with climate, activity, and body size. The WHO emphasizes adequate intake rather than a single magic number for everyone.',
      'Wellness tracking works best when it is lightweight: a morning glass of water, a mid-day check-in, and a simple note about energy — not hourly anxiety.',
      'Apps like CheckApp can highlight patterns and send conversational reminders. They do not assess clinical dehydration or replace professional evaluation.',
      'Habit stacking — pairing water with coffee, meals, or a daily check-in — beats willpower alone for most adults building a routine.',
      'If you feel dizzy, confused, or unwell, hydration tips are not enough. Seek professional medical care for acute symptoms.',
    ],
    [
      'Drink a glass of water within 30 minutes of waking.',
      'Pair each meal with one glass of water.',
      'Check urine color once daily as a rough guide, not a verdict.',
      'Set a conversational reminder instead of a silent alarm.',
      'Review weekly patterns rather than chasing perfect daily scores.',
      'Keep a refill bottle visible on your desk or counter.',
    ],
    ['Signal', 'What it may indicate', 'Simple response'],
    [
      ['Thirst', 'Fluid deficit building', 'Drink 250–500 ml water'],
      ['Dark urine', 'Possible low intake', 'Add one extra glass today'],
      ['Afternoon fog', 'Many causes — hydration is one', 'Water + short walk'],
      ['Dry lips', 'Environmental or low intake', 'Sip regularly for an hour'],
    ],
    [
      {
        question: 'What are early hydration signals?',
        answer:
          'Early signals can include thirst, dry mouth, darker urine, mild headache, and afternoon fatigue. They are wellness cues, not a diagnosis.',
      },
      {
        question: 'How much water should most adults drink?',
        answer:
          'Many adults aim for roughly 2–3 liters daily, but needs vary. WHO guidance focuses on adequate intake for your context rather than one fixed rule.',
      },
      {
        question: 'Are wellness apps medical devices for hydration?',
        answer:
          'No. Wellness apps can track habits and highlight patterns. They are not medical devices and do not identify disease.',
      },
      {
        question: 'What is habit stacking for hydration?',
        answer:
          'Habit stacking links drinking water to an existing routine — for example, a glass before coffee or after brushing teeth.',
      },
      {
        question: 'When should I see a doctor about hydration?',
        answer:
          'Seek medical care for persistent vomiting, confusion, dizziness, or other acute symptoms. Everyday wellness tips are not emergency treatment.',
      },
    ],
  ),
  t(
    'daily-check-in',
    'Daily Habits',
    'Habits',
    'daily wellness check-in',
    'The Two-Minute Daily Wellness Check-In: A Practical Framework',
    'A simple daily check-in framework for hydration, movement, and mood — designed for consistency, not perfection.',
    'journal wellness morning routine',
    [
      'Why Do Short Check-Ins Beat Long Health Plans?',
      'What Belongs in a Two-Minute Check-In?',
      'How Do Streaks Help Without Burning You Out?',
      'What Can AI Companions Add?',
      'What Are the Limits of Self-Tracking?',
      'How Do You Restart After Missing a Day?',
    ],
    [
      'Long plans fail when friction is high. A two-minute check-in lowers the bar enough that busy adults actually return tomorrow.',
      'Pick three domains: water, movement, mood. Yes/no or a 1–5 scale is enough. Detailed logging can come later if you want it.',
      'Streaks motivate when they celebrate return, not perfection. Missing one day should not erase the identity of someone who checks in.',
      'Conversational companions like DIDI can ask one question at a time instead of dumping a dashboard. That tone matters for adherence.',
      'Self-tracking describes patterns; it does not identify medical conditions. Mood dips and fatigue have many causes beyond hydration or sleep.',
      'Restart rules: one missed day = resume tomorrow, no doubling workouts or water to “catch up.” Consistency beats compensation.',
    ],
    [
      'Choose a fixed time anchor (after breakfast, before bed).',
      'Answer three prompts: water, movement, mood.',
      'Log in under 120 seconds — stop when time is up.',
      'Celebrate showing up, not the score.',
      'Review trends weekly, not hourly.',
      'Share progress with an accountability partner if helpful.',
    ],
    ['Domain', 'Example prompt', 'Why it matters'],
    [
      ['Water', 'Did you drink with meals?', 'Hydration supports energy'],
      ['Movement', '10+ minutes intentional?', 'Breaks sedentary blocks'],
      ['Mood', '1–5 stress level?', 'Spot patterns early'],
      ['Sleep', 'Rough hours last night?', 'Context for today’s energy'],
    ],
    [
      {
        question: 'How long should a daily wellness check-in take?',
        answer: 'About two minutes. The goal is a repeatable ritual, not a clinical intake form.',
      },
      {
        question: 'Do I need wearables for a check-in?',
        answer: 'No. A simple journal or app prompt is enough. Devices can add detail later if you want them.',
      },
      {
        question: 'What if I miss a day?',
        answer: 'Resume the next day without punishment stacking. One gap does not reset your progress permanently.',
      },
      {
        question: 'Can AI replace a wellness coach?',
        answer: 'AI can prompt and remember patterns, but it is not a licensed clinician and does not provide medical treatment.',
      },
      {
        question: 'How often should I review trends?',
        answer: 'Weekly review is enough for most people. Daily obsession often increases stress without improving outcomes.',
      },
    ],
  ),
  t(
    'ai-companion-basics',
    'AI & Health',
    'AI Companion',
    'AI wellness companion',
    'AI Wellness Companions: What They Do Well (and What They Cannot Do)',
    'An educational overview of AI wellness companions — proactive check-ins, pattern memory, and clear limits around medical advice.',
    'smartphone wellness app conversation',
    [
      'What Is an AI Wellness Companion?',
      'How Is It Different From a Generic Chatbot?',
      'What Data Helps Personalization?',
      'What Are Responsible Limits?',
      'How Should You Evaluate an App?',
      'Where Do Human Professionals Fit?',
    ],
    [
      'A wellness companion is software designed for ongoing health habits — reminders, questions, and lightweight analysis — not episodic Q&A.',
      'Generic chatbots wait for prompts. Companions can initiate check-ins, remember streaks, and reference your recent answers.',
      'Useful inputs include hydration logs, sleep notes, and optional photos users choose to share. More data is not always better without consent.',
      'Responsible apps state they are not medical devices, avoid clinical claims, and escalate acute symptoms to professional care.',
      'Look for transparent privacy policies, clear disclaimers, and specialization (hydration, habits) rather than vague “AI doctor” marketing.',
      'Doctors, dietitians, and therapists remain essential for medical evaluation, prescribing, and crisis care. Apps support daily behavior between visits.',
    ],
    [
      'Read the disclaimer before relying on any suggestion.',
      'Prefer apps with a narrow wellness focus.',
      'Check how photos and messages are stored.',
      'Test whether reminders feel helpful or nagging.',
      'Confirm escalation guidance for emergencies.',
      'Combine app use with periodic professional checkups.',
    ],
    ['Feature', 'Wellness use', 'Not a substitute for'],
    [
      ['Daily check-in', 'Habit accountability', 'Clinical intake'],
      ['Pattern memory', 'Spot recurring dips', 'Lab interpretation'],
      ['Photo hints', 'Visual wellness signals', 'Diagnosis'],
      ['Streaks', 'Motivation', 'Treatment plans'],
    ],
    [
      {
        question: 'What is an AI wellness companion?',
        answer:
          'Software that proactively supports daily wellness habits through check-ins, reminders, and personalized context — not episodic search.',
      },
      {
        question: 'Can AI replace a clinician?',
        answer: 'Wellness apps should not provide medical conclusions. They may highlight patterns and suggest general education.',
      },
      {
        question: 'Is CheckApp a medical device?',
        answer: 'No. CheckApp and DIDI are wellness tools for habit support and education, not FDA-regulated medical devices.',
      },
      {
        question: 'How is DIDI different from ChatGPT?',
        answer:
          'DIDI is specialized for daily wellness: proactive messages, hydration tracking, and optional tongue photos as wellness indicators.',
      },
      {
        question: 'Should I stop seeing my doctor if an app helps?',
        answer: 'No. Continue regular medical care. Apps complement professional guidance; they do not replace it.',
      },
    ],
  ),
  t(
    '4p-prevention',
    '4P Medicine',
    '4P Medicine',
    '4P medicine prevention',
    '4P Medicine in Plain English: Predictive, Preventive, Personalized, Participative',
    'Understand 4P medicine as a daily-life framework — without hype, without diagnosis claims, and with practical habit examples.',
    'preventive health planning notebook',
    [
      'What Does 4P Medicine Mean?',
      'How Is It Different From Reactive Care?',
      'What Does Personalized Mean in Daily Life?',
      'Why Does Participative Matter?',
      'What Can You Do This Week?',
      'What Are Realistic Limits?',
    ],
    [
      '4P stands for predictive, preventive, personalized, and participative — a research framework for shifting care earlier and involving patients.',
      'Reactive care responds after problems escalate. Preventive care invests in small daily actions and early pattern awareness.',
      'Personalized does not require exotic tests. It can mean adjusting hydration and sleep based on your schedule, climate, and feedback.',
      'Participative care invites you to track, question, and co-own data instead of passively receiving instructions once a year.',
      'This week: pick one signal (water, sleep, mood), log it daily, and review Friday. That is 4P at household scale.',
      'Population frameworks do not guarantee individual outcomes. Genetics, access, and acute illness still require professional care.',
    ],
    [
      'Pick one metric to observe for seven days.',
      'Write one sentence nightly about energy or mood.',
      'Share questions with your clinician at the next visit.',
      'Adjust one habit based on patterns, not guilt.',
      'Use reminders that ask rather than scold.',
      'Re-evaluate monthly instead of daily overhaul.',
    ],
    ['Pillar', 'Daily example', 'Professional tie-in'],
    [
      ['Predictive', 'Notice recurring afternoon slumps', 'Discuss labs if persistent'],
      ['Preventive', 'Water + walk breaks', 'Screenings on schedule'],
      ['Personalized', 'Adjust intake for travel days', 'Clinician adjusts plan'],
      ['Participative', 'You bring logs to visits', 'Shared decision-making'],
    ],
    [
      {
        question: 'What is 4P medicine?',
        answer:
          'A framework emphasizing predictive, preventive, personalized, and participative approaches to health — often discussed in research and policy.',
      },
      {
        question: 'Can I practice 4P without special tests?',
        answer: 'Yes. Daily tracking, habit experiments, and prepared questions for clinicians are participative and preventive at home scale.',
      },
      {
        question: 'Does 4P replace doctors?',
        answer: 'No. It describes how care can evolve. Medical diagnosis and treatment remain with licensed professionals.',
      },
      {
        question: 'How does CheckApp relate to 4P?',
        answer:
          'CheckApp supports participative daily check-ins and pattern awareness — wellness education, not clinical 4P implementation in a hospital.',
      },
      {
        question: 'Is 4P proven to extend lifespan?',
        answer:
          'Research is ongoing. Daily habits may support wellbeing, but no app or article should guarantee longevity outcomes.',
      },
    ],
  ),
  t(
    'preventive-habits',
    'Preventive Care',
    'Preventive Care',
    'preventive wellness habits',
    'Preventive Wellness Habits That Cost Less Than Reactive Fixes',
    'Compare preventive daily habits with reactive crisis care at a practical, non-clinical level — focused on behavior and planning.',
    'healthy lifestyle prevention wellness',
    [
      'What Is Preventive Wellness?',
      'Why Do Small Costs Compound?',
      'Which Habits Have the Best Return?',
      'How Do Apps Lower Friction?',
      'When Is Reactive Care Still Right?',
      'How Do You Build a Sustainable Plan?',
    ],
    [
      'Preventive wellness means investing in sleep, hydration, movement, and stress buffers before you hit a crisis week.',
      'Reactive fixes — urgent visits, lost workdays, crash diets — often cost more time and stress than steady micro-habits.',
      'High-return habits: consistent sleep window, meal-time water, brief walks, and weekly review of energy patterns.',
      'Apps reduce friction with one-tap check-ins and conversational nudges. They should educate, not shame.',
      'Reactive care is appropriate for acute pain, infection, injury, or mental health crises. Prevention does not mean delaying needed care.',
      'Sustainable plans change one variable at a time for two weeks before adding another. Overhaul lists rarely survive contact with Monday.',
    ],
    [
      'Protect a 7-hour sleep opportunity nightly.',
      'Drink water with each meal this week.',
      'Walk ten minutes after lunch.',
      'Batch stressful tasks away from bedtime.',
      'Review energy notes every Sunday.',
      'Schedule overdue screenings with your clinician.',
    ],
    ['Approach', 'Upfront cost', 'Common risk'],
    [
      ['Preventive habits', 'Minutes daily', 'Drift without reminders'],
      ['Reactive sprint', 'High stress spike', 'Burnout rebound'],
      ['Professional screening', 'Appointment time', 'Skipped follow-ups'],
      ['App check-ins', 'Low daily friction', 'Over-trusting non-medical tips'],
    ],
    [
      {
        question: 'What is preventive wellness?',
        answer: 'Daily actions that support baseline health — sleep, hydration, movement — before problems become urgent.',
      },
      {
        question: 'Does prevention eliminate doctor visits?',
        answer: 'No. Preventive habits complement screenings and professional care; they do not replace them.',
      },
      {
        question: 'Which habit should I start with?',
        answer: 'Pick the smallest change you can repeat daily — often meal-time water or a fixed sleep window.',
      },
      {
        question: 'Can wellness apps save money?',
        answer: 'They may reduce forgotten routines and support consistency, but they do not guarantee medical cost savings.',
      },
      {
        question: 'When is reactive care necessary?',
        answer: 'Seek urgent or professional care for acute symptoms, injuries, or mental health emergencies.',
      },
    ],
  ),
  t(
    'oral-wellness',
    'Hydration Science',
    'Oral Wellness',
    'oral wellness signals',
    'Oral Wellness Signals: What Tongue and Mouth Cues Can (and Cannot) Tell You',
    'Learn about tongue moisture, coating, and mouth feel as general wellness signals — with clear limits and no diagnostic claims.',
    'wellness water fresh mouth health',
    [
      'Why Do Clinicians Look at the Mouth?',
      'What Are Common Wellness Signals?',
      'How Does Hydration Connect?',
      'Can Photos Help Daily Awareness?',
      'What Should Never Be Diagnosed at Home?',
      'How Do You Use Signals Responsibly?',
    ],
    [
      'Mouth and tongue appearance can reflect hydration, breathing habits, and oral hygiene — context clinicians weigh alongside history.',
      'Dryness, coating, or color changes can have many causes: dehydration, diet, medication, or oral care gaps.',
      'Saliva supports comfort and digestion. Regular sips and meal-time water often improve how the mouth feels within hours.',
      'Some wellness apps analyze tongue photos as indicators, not diagnoses. Results should be framed as prompts to hydrate or consult if concerned.',
      'Ulcers that do not heal, bleeding, severe pain, or sudden asymmetry need professional evaluation — not app interpretation.',
      'Treat signals as conversation starters with yourself and your dentist or doctor, not as labels for disease.',
    ],
    [
      'Brush and floss on your usual schedule.',
      'Note mouth dryness alongside water intake.',
      'Avoid smoking and excessive alcohol.',
      'Use lip balm in dry climates.',
      'Photograph only if your app privacy policy is clear.',
      'Book dental checkups on your recommended interval.',
    ],
    ['Signal', 'Possible benign cause', 'Action'],
    [
      ['Dry tongue', 'Low fluid intake', 'Increase water gradually'],
      ['White coating', 'Hygiene or diet', 'Review brushing + dentist if persistent'],
      ['Bad breath', 'Dry mouth, food', 'Hydrate + dental check if chronic'],
      ['Cracked lips', 'Weather, dehydration', 'Water + barrier balm'],
    ],
    [
      {
        question: 'Can tongue appearance show dehydration?',
        answer:
          'Dryness or coating can correlate with low fluid intake among other causes. It is a wellness signal, not a standalone diagnosis.',
      },
      {
        question: 'Should I use tongue photos for health?',
        answer:
          'Optional photos may support awareness in wellness apps. They do not replace dental or medical exams.',
      },
      {
        question: 'Are tongue scans on CheckApp medical tests?',
        answer: 'No. DIDI uses tongue photos as hydration and wellness indicators, not clinical lab results.',
      },
      {
        question: 'When should I see a dentist urgently?',
        answer: 'Persistent pain, non-healing sores, or bleeding without cause warrant professional evaluation.',
      },
      {
        question: 'How much water helps oral comfort?',
        answer: 'Regular sips and meal-time water often help mild dryness. Individual needs vary.',
      },
    ],
  ),
];
