'use strict';

const PageTransitions = {
  init() {
    this.overlay = document.getElementById('pageTransition');
    if (!this.overlay) return;

    this.bars = this.overlay.querySelectorAll('.transition-bar');

    // Check if arriving from a transition
    if (sessionStorage.getItem('pageTransition') === 'entering') {
      sessionStorage.removeItem('pageTransition');
      this.playExitTransition();
    }

    // Attach to all transition links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-transition]');
      if (!link) return;

      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href) return;

      this.navigateTo(href);
    });
  },

  navigateTo(url) {
    sessionStorage.setItem('pageTransition', 'entering');
    this.playEnterTransition(() => {
      window.location.href = url;
    });
  },

  playEnterTransition(callback) {
    this.overlay.classList.add('active', 'entering');

    this.bars.forEach((bar, i) => {
      bar.style.transitionDelay = `${i * 0.06}s`;
    });

    setTimeout(() => {
      if (callback) callback();
    }, 600);
  },

  playExitTransition() {
    this.overlay.classList.add('active', 'entered');

    // Force reflow
    this.overlay.offsetHeight;

    requestAnimationFrame(() => {
      this.overlay.classList.add('exiting');

      this.bars.forEach((bar, i) => {
        bar.style.transitionDelay = `${i * 0.06}s`;
      });

      setTimeout(() => {
        this.overlay.classList.remove('active', 'entered', 'exiting');
        this.bars.forEach(bar => {
          bar.style.transitionDelay = '';
        });
      }, 700);
    });
  }
};

window.PageTransitions = PageTransitions;
