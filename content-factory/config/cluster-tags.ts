/** Map content-plan cluster names to canonical blog tags */
export const CLUSTER_TAG: Record<string, { de: string; en: string }> = {
  Hydration: { de: 'Hydration', en: 'Hydration' },
  'AI Companion': { de: 'AI Companion', en: 'AI Companion' },
  Habits: { de: 'Daily Habits', en: 'Daily Habits' },
  '4P Medicine': { de: '4P Medicine', en: '4P Medicine' },
  'Preventive Care': { de: 'Preventive Care', en: 'Preventive Care' },
  'Oral Wellness': { de: 'Oral Wellness', en: 'Oral Wellness' },
};

export function clusterTagDe(cluster: string): string {
  return CLUSTER_TAG[cluster]?.de ?? cluster;
}

export function clusterTagEn(cluster: string): string {
  return CLUSTER_TAG[cluster]?.en ?? cluster;
}
