/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			keyframes: {
        'revealMd': {
          '0%': {
            width:'0px',
            height:'0px',
            borderBottom: '2px solid rgba(117, 112, 131, 0.5)'
          },
          '30%': {
            width:'66.6%',
            height:'0',
          },
          '35%': {
            height:'0',
            width:'66.6%',
          },
          '80%': {
            height:'98px',
            width:'66.6%',
            borderBottom: '2px solid rgba(117, 112, 131, 0.5)'
          },
          '100%':	{
            height:'98px',
            borderBottom: '0 solid rgba(117, 112, 131, 0)'
          }
        },
        'revealSm': {
          '0%': {
            width:'0px',
            height:'0px',
          },
          '30%': {
            width:'66.6%',
            height:'0',
          },
          '35%': {
            height:'0',
            width:'66.6%',
          },
          '80%': {
            height:'42px',
            width:'66.6%',
          },
          '100%':	{
            height:'42px',
          }
        },
        'loadIn': {
            '0%': {
              transform: 'translateY(24px)',
            },
            '100%': {
              transform: 'translateY(0px)',
            }
        },
        'reverseLoadIn': {
          '0%': {
            transform: 'translateY(-24px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          }
        },
        'infoMenu': {
          '0%': {
            opacity: '0',
            visibility: 'hidden'
          },
          '100%': {
            opacity: '0.7',
            visibility: 'visible'
          }
        } 
      },
      animation: {
        'reveal-md': 'revealMd 3s ease 0.1s',
        'reveal-sm': 'revealSm 3s ease 0.1s',
        'load-in': 'loadIn 0.5s ease 2.5s forwards',
        'reverse-load-in': 'reverseLoadIn 0.5s ease 2.5s forwards',
        'info-menu': 'infoMenu 0.5s ease-in 2.5s forwards'
      },
      fontFamily: {
        'hero-font': "Hero-Font",
        'main-font': "Main-Font"
      },
	  },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}