/** CheckApp Figma v2.0 — mirrored from the mobile app `constants/designTokens.ts` */
export const tokens = {
  colors: {
    primary: '#588317',
    primaryLight: '#93b050',
    primaryDark: '#658532',
    forest: '#0e1f01',
    forestMid: '#283b0f',
    bgWarm: '#f6f8f0',
    cardWhite: '#ffffff',
    textPrimary: '#2d2d2d',
    textSecondary: '#5c5c5c',
    accentAmber: '#ff8c00',
    bubbleDidi: '#e7eedd',
    bubbleUser: '#e8e8e8',
  },
  radius: {
    card: '24px',
    button: '100px',
    image: '20px',
  },
  spacing: {
    sectionDesktop: '80px',
    sectionMobile: '48px',
  },
} as const;

export type DesignTokens = typeof tokens;
