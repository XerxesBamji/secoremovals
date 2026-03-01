tailwind.config = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#111827',

      /* 🟢 Primary – Forest Green */
      primary: {
        DEFAULT: '#356f51',
        50:  '#EDF5F0',
        100: '#D2E8DA',
        200: '#A6D1B6',
        300: '#79BA92',
        400: '#4DA36E',
        500: '#356f51',  /* base */
        600: '#2A5940',
        700: '#1F4330',
        800: '#142C20',
        900: '#0A1610',
      },

      /* 🔵 Secondary – Deep Teal (complements the green) */
      secondary: {
        DEFAULT: '#1A4A5C',
        50:  '#E8F1F5',
        100: '#C5DAE4',
        200: '#8BB5C9',
        300: '#5190AE',
        400: '#326B87',
        500: '#1A4A5C',
        600: '#153B4A',
        700: '#102C37',
        800: '#0A1E25',
        900: '#050F12',
      },

      /* ⚫ Neutral – Text, backgrounds, UI */
      neutral: {
        50:  '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },

      /* 🟡 Accent – Warm Gold (contrast against green) */
      accent: {
        DEFAULT: '#E8A320',
        50:  '#FDF6E7',
        100: '#FAE9C1',
        200: '#F5D283',
        300: '#EFBB45',
        400: '#EAA928',
        500: '#E8A320',
        600: '#BA821A',
        700: '#8C6213',
        800: '#5D410D',
        900: '#2F2106',
      },

      /* ✅ Semantic States */
      success: '#2A7D53',
      error:   '#C2003A',
      warning: '#E8A320',
      info:    '#3A9FBF',
    },

    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.2s ease-in',
      },

      boxShadow: {
        sm:      '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        lg:      '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
      },
    },
  },
}