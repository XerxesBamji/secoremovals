tailwind.config = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#111827',

      /* 🔴 Primary – Fire / CTA */
      primary: {
        DEFAULT: '#D62828',
        50: '#FDEAEA',
        100: '#F9C7C7',
        200: '#F29A9A',
        300: '#EB6D6D',
        400: '#E63F3F',
        500: '#D62828',
        600: '#B22121',
        700: '#861919',
        800: '#5B1011',
        900: '#320907',
      },

      /* 🔵 Secondary – Trust / Security */
      secondary: {
        DEFAULT: '#002644',
        50: '#E6ECF2',
        100: '#C0D0E0',
        200: '#99B3CC',
        300: '#7397B8',
        400: '#4D7AA3',
        500: '#002644',
        600: '#00223D',
        700: '#001B30',
        800: '#001423',
        900: '#000D16',
      },

      /* ⚫ Neutral – Text, backgrounds, UI */
      neutral: {
        50: '#F9FAFB',
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

      /* 🟡 Accent – Highlights & secondary CTAs */
      accent: {
        DEFAULT: '#FFB703',
        50: '#FFF7E5',
        100: '#FFEAC0',
        200: '#FFD98A',
        300: '#FFC654',
        400: '#FFB31E',
        500: '#FFB703',
        600: '#CC9402',
        700: '#997001',
        800: '#664C00',
        900: '#332600',
      },

      /* ✅ Semantic States */
      success: '#00976A',
      error: '#C2003A',
      warning: '#FFB703',
      info: '#5CC4FF',
    },

    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.2s ease-in',
      },

      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT:
          '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        lg:
          '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
      },
    },
  },
}