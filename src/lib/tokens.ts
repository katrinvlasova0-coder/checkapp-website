export const tokens = {
  colors: {
    primary: '#588317',
    primaryLight: '#93b050',
    primaryDark: '#658532',
    forest: '#1A3A2A',
    bgWarm: '#F5F3F0',
    cardWhite: '#FFFFFF',
    textPrimary: '#0F1A10',
    textSecondary: '#5A6B5B',
    accentAmber: '#F5A623',
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
