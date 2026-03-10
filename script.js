

    tailwind.config = {
      theme: {
        extend: {
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translateY(40px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            }
          }
        }
      }
    }



    function toggleMenu() {
        const menu = document.getElementById('mobileMenu');
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        const body = document.body;

        // Toggle Menu
        menu.classList.toggle('translate-x-full');
        body.classList.toggle('menu-open'); // Triggers staggered animation
        body.classList.toggle('overflow-hidden'); // Prevent scroll when menu is open

        // Animate Hamburger to "X"
        line1.classList.toggle('rotate-45');
        line1.classList.toggle('translate-y-[8px]');
        line2.classList.toggle('opacity-0');
        line3.classList.toggle('-rotate-45');
        line3.classList.toggle('-translate-y-[8px]');
    }