/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./pages/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                'pastel-green': '#B8E6CC',
                'pastel-blue': '#B8D4E6',
                'pastel-purple': '#D4B8E6',
                'pastel-yellow': '#E6E6B8',
                'bg-dark': '#0a0a0a',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            animation: {
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'fade-in': {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                'pulse': {
                    '0%, 100%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '0.3',
                    },
                },
                'pan-y': {
                    '0%': {
                        'object-position': 'center top',
                    },
                    '100%': {
                        'object-position': 'center bottom',
                    },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.8s ease-out forwards',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pan-y': 'pan-y 40s linear infinite',
            },
        },
    },
    plugins: [],
}