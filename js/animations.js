const ScrollAnimations = {
  init() {
    const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    if (elements.length) {
      // Setup stagger delays for children
      this.setupStagger();
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });
      
      elements.forEach(el => observer.observe(el));
    }

    // Initialize Services Section replayable reveal animation
    if (window.ServicesReveal) {
      ServicesReveal.init();
    }
  },
  
  setupStagger() {
    document.querySelectorAll('.stagger-children').forEach(container => {
      const children = container.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
      children.forEach((child, i) => {
        child.setAttribute('data-delay', String(i + 1));
      });
    });
  }
};

/* ============================================
   REPLAYABLE SERVICES REVEAL ANIMATION
   ============================================ */
const ServicesReveal = {
  timeouts: [],

  init() {
    this.section = document.getElementById('services');
    if (!this.section) return;

    this.label = this.section.querySelector('.section-label');
    this.title = this.section.querySelector('.section-title');
    this.cards = Array.from(this.section.querySelectorAll('.service-card'));

    if (!('IntersectionObserver' in window)) {
      this.showAll();
      return;
    }

    this.setupObserver();
  },

  clearTimers() {
    if (this.timeouts && this.timeouts.length) {
      this.timeouts.forEach(t => clearTimeout(t));
      this.timeouts = [];
    }
  },

  showAll() {
    this.clearTimers();
    if (this.label) { this.label.style.opacity = '1'; this.label.style.transform = 'none'; }
    if (this.title) { this.title.style.opacity = '1'; this.title.style.transform = 'none'; }
    this.cards.forEach(c => {
      c.style.opacity = '1';
      c.style.transform = 'none';
    });
  },

  reset() {
    this.clearTimers();

    if (this.label) {
      this.label.style.transition = 'none';
      this.label.style.opacity = '0';
      this.label.style.transform = 'translateY(20px)';
    }
    if (this.title) {
      this.title.style.transition = 'none';
      this.title.style.opacity = '0';
      this.title.style.transform = 'translateY(20px)';
    }
    this.cards.forEach(c => {
      c.style.transition = 'none';
      c.style.opacity = '0';
      c.style.transform = 'translateY(20px)';
    });
  },

  play() {
    this.reset();

    // Force reflow
    void this.section.offsetHeight;

    const ease = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    const duration = '550ms';

    if (this.label) {
      this.label.style.transition = `opacity ${duration} ${ease}, transform ${duration} ${ease}`;
      this.label.style.opacity = '1';
      this.label.style.transform = 'translateY(0)';
    }

    this.timeouts.push(setTimeout(() => {
      if (this.title) {
        this.title.style.transition = `opacity ${duration} ${ease}, transform ${duration} ${ease}`;
        this.title.style.opacity = '1';
        this.title.style.transform = 'translateY(0)';
      }
    }, 110));

    this.cards.forEach((card, index) => {
      this.timeouts.push(setTimeout(() => {
        card.style.transition = `opacity ${duration} ${ease}, transform 0.35s ${ease}, border-color 0.35s ease, box-shadow 0.35s ease, opacity 0.35s ease`;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 210 + index * 90));
    });
  },

  setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.play();
        } else {
          this.reset();
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    observer.observe(this.section);
  }
};

window.ScrollAnimations = ScrollAnimations;
window.ServicesReveal = ServicesReveal;
