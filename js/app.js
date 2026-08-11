'use strict';

/* ============================================
   CINEMATIC INTRO SEQUENCE
   ============================================ */
const IntroSequence = {
  timeouts: [],

  init() {
    // Check if intro has already played this session
    if (sessionStorage.getItem('introPlayed')) {
      this.skipIntro();
      return;
    }

    this.playIntro();
  },

  clearTimers() {
    if (this.timeouts && this.timeouts.length) {
      this.timeouts.forEach(t => clearTimeout(t));
      this.timeouts = [];
    }
  },

  resetState() {
    this.clearTimers();

    const heroGreeting = document.getElementById('heroGreeting');
    const brandMohamed = document.getElementById('brandMohamed');
    const brandRGB = document.getElementById('brandRGB');
    const heroRoles = document.getElementById('heroRoles');
    const heroDesc = document.getElementById('heroDesc');
    const heroActions = document.getElementById('heroActions');
    const heroRight = document.getElementById('heroRight');
    const heroInfo = document.getElementById('heroInfo');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const ribbon = document.getElementById('ribbon');

    // Remove reveal and animation classes
    if (heroGreeting) heroGreeting.classList.remove('revealed');
    if (brandMohamed) brandMohamed.classList.remove('revealed');
    if (brandRGB) {
      brandRGB.style.opacity = '';
      brandRGB.classList.remove('glitch', 'glitch-done');
    }
    if (heroRoles) heroRoles.classList.remove('intro-fade-in');
    if (heroDesc) heroDesc.classList.remove('intro-fade-in');
    if (heroActions) heroActions.classList.remove('intro-fade-in');
    if (heroRight) heroRight.classList.remove('intro-fade-in');
    if (heroInfo) heroInfo.classList.remove('revealed');
    if (scrollIndicator) scrollIndicator.classList.remove('intro-fade-in');
    if (ribbon) {
      ribbon.style.opacity = '';
      ribbon.classList.remove('revealed');
    }

    // Reset inline opacities set by skipIntro or playIntro
    document.querySelectorAll('.brand-part').forEach(el => { if (el) el.style.opacity = ''; });
    document.querySelectorAll('.rgb-letter').forEach(el => { if (el) el.style.opacity = ''; });
    [heroRoles, heroDesc, heroActions, heroRight, scrollIndicator, ribbon].forEach(el => {
      if (el) { el.style.opacity = ''; }
    });
  },

  skipIntro() {
    this.clearTimers();
    // Show everything instantly without animations
    const brandParts = document.querySelectorAll('.brand-part');
    const rgbLetters = document.querySelectorAll('.rgb-letter');
    const elements = [
      document.getElementById('heroRoles'),
      document.getElementById('heroDesc'),
      document.getElementById('heroActions'),
      document.getElementById('heroRight'),
      document.getElementById('scrollIndicator'),
      document.getElementById('ribbon')
    ];

    brandParts.forEach(el => {
      if (el) { el.style.opacity = '1'; }
    });
    rgbLetters.forEach(el => {
      if (el) {
        el.style.opacity = '1';
        el.classList.add('glitch-done');
      }
    });
    elements.forEach(el => {
      if (el) { el.style.opacity = '1'; }
    });

    // Show ribbon
    const ribbon = document.getElementById('ribbon');
    if (ribbon) {
      ribbon.style.opacity = '0.6';
    }
  },

  playIntro() {
    this.resetState();

    const heroGreeting = document.getElementById('heroGreeting');
    const brandMohamed = document.getElementById('brandMohamed');
    const brandRGB = document.getElementById('brandRGB');
    const heroRoles = document.getElementById('heroRoles');
    const heroDesc = document.getElementById('heroDesc');
    const heroActions = document.getElementById('heroActions');
    const heroRight = document.getElementById('heroRight');
    const heroInfo = document.getElementById('heroInfo');
    const scrollIndicator = document.getElementById('scrollIndicator');
    const ribbon = document.getElementById('ribbon');

    // Force browser reflow to restart CSS animations cleanly
    void document.body.offsetHeight;

    // 0.3s — Ribbon slowly becomes visible
    this.timeouts.push(setTimeout(() => {
      if (ribbon) ribbon.classList.add('revealed');
    }, 300));

    // 0.4s — "HELLO, I'M" fades in
    this.timeouts.push(setTimeout(() => {
      if (heroGreeting) heroGreeting.classList.add('revealed');
    }, 400));

    // 0.6s — "MOHAMED" appears smoothly
    this.timeouts.push(setTimeout(() => {
      if (brandMohamed) brandMohamed.classList.add('revealed');
    }, 600));

    // 0.8s — "RGB" appears with glitch
    this.timeouts.push(setTimeout(() => {
      if (brandRGB) {
        brandRGB.style.opacity = '1';
        brandRGB.classList.add('glitch');
        this.timeouts.push(setTimeout(() => {
          brandRGB.classList.remove('glitch');
          brandRGB.classList.add('glitch-done');
        }, 250)); // Glitch duration < 0.3s
      }
    }, 800));

    // 1.1s — Roles fade upward
    this.timeouts.push(setTimeout(() => {
      if (heroRoles) heroRoles.classList.add('intro-fade-in');
    }, 1100));

    // 1.4s — Description fades in
    this.timeouts.push(setTimeout(() => {
      if (heroDesc) heroDesc.classList.add('intro-fade-in');
    }, 1400));

    // 1.7s — CTA buttons appear (staggered by CSS)
    this.timeouts.push(setTimeout(() => {
      if (heroActions) heroActions.classList.add('intro-fade-in');
    }, 1700));

    // 2.0s — Portrait and info appear
    this.timeouts.push(setTimeout(() => {
      if (heroRight) heroRight.classList.add('intro-fade-in');
      if (heroInfo) heroInfo.classList.add('revealed');
    }, 2000));

    // 2.5s — Scroll indicator appears
    this.timeouts.push(setTimeout(() => {
      if (scrollIndicator) scrollIndicator.classList.add('intro-fade-in');
    }, 2500));

    // Mark intro as played
    sessionStorage.setItem('introPlayed', 'true');
  },

  restartIntro() {
    this.playIntro();
  }
};

const TestimonialCarousel = {
  init() {
    this.track = document.getElementById('testimonialTrack');
    this.slides = document.querySelectorAll('.testimonial-slide');
    this.prevBtn = document.getElementById('testimonialPrev');
    this.nextBtn = document.getElementById('testimonialNext');
    this.counter = document.getElementById('testimonialCounter');
    this.section = document.getElementById('testimonials');

    if (!this.track || !this.slides.length) return;

    this.currentIndex = 0;

    this.setupNavigation();
    this.setupDragScroll();
    this.updateCounter();
  },

  setupNavigation() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Keyboard navigation when section is visible
    document.addEventListener('keydown', (e) => {
      if (!this.section) return;
      const rect = this.section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible) return;

      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });

    // Touch/swipe support
    let touchStartX = 0;
    this.track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    this.track.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) this.next();
      if (touchEndX > touchStartX + 50) this.prev();
    }, {passive: true});
  },

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Loop to last
      this.currentIndex = this.slides.length - 1;
    }
    this.scrollToIndex(this.currentIndex);
    this.updateCounter();
  },

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      // Loop to first
      this.currentIndex = 0;
    }
    this.scrollToIndex(this.currentIndex);
    this.updateCounter();
  },

  scrollToIndex(index) {
    const target = this.slides[index];
    if (!target) return;

    // Calculate scroll position to center the target card within the track
    const trackRect = this.track.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetCenter = targetRect.left + targetRect.width / 2;
    const trackCenter = trackRect.left + trackRect.width / 2;
    const scrollOffset = targetCenter - trackCenter;

    this.track.scrollBy({
      left: scrollOffset,
      behavior: 'smooth'
    });
  },

  updateCounter() {
    if (!this.counter) return;
    const current = this.currentIndex + 1;
    const total = this.slides.length;
    this.counter.textContent = `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  },

  setupDragScroll() {
    let isDown = false;
    let startX;
    let scrollStart;

    this.track.addEventListener('mousedown', (e) => {
      if (e.target.closest('a')) return;
      isDown = true;
      this.track.classList.add('dragging');
      startX = e.pageX;
      scrollStart = this.track.scrollLeft;
    });

    this.track.addEventListener('mouseleave', () => {
      if (isDown) {
        isDown = false;
        this.track.classList.remove('dragging');
        this.snapToNearest();
      }
    });

    this.track.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        this.track.classList.remove('dragging');
        this.snapToNearest();
      }
    });

    this.track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX) * 1.2;
      this.track.scrollLeft = scrollStart - walk;
    });

    // Update currentIndex on scroll end
    let scrollTimeout;
    this.track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.detectCurrentIndex();
        this.updateCounter();
      }, 150);
    }, { passive: true });
  },

  snapToNearest() {
    this.detectCurrentIndex();
    this.scrollToIndex(this.currentIndex);
  },

  detectCurrentIndex() {
    const trackRect = this.track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    let closest = 0;
    let closestDist = Infinity;

    this.slides.forEach((slide, i) => {
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const dist = Math.abs(slideCenter - trackCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    this.currentIndex = closest;
  },


};

/* ============================================
   CONTACT FORM
   ============================================ */
const ContactForm = {
  init() {
    this.form = document.getElementById('contactForm');
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  },

  handleSubmit(e) {
    e.preventDefault();

    const name = this.form.querySelector('#name');
    const email = this.form.querySelector('#email');
    const message = this.form.querySelector('#message');

    this.clearErrors();

    let isValid = true;

    if (!name.value.trim()) {
      this.showError(name, 'Name is required');
      isValid = false;
    }

    if (!email.value.trim() || !this.isValidEmail(email.value)) {
      this.showError(email, 'Valid email is required');
      isValid = false;
    }

    if (!message.value.trim()) {
      this.showError(message, 'Message is required');
      isValid = false;
    }

    if (isValid) {
      // Hide form fields
      const formGroups = this.form.querySelectorAll('.form-group, .btn');
      formGroups.forEach(el => { el.style.display = 'none'; });

      // Show success
      const success = this.form.querySelector('.form-success');
      if (success) success.classList.add('active');
    }
  },

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  showError(input, message) {
    input.style.borderColor = '#ff4444';
    const error = document.createElement('span');
    error.className = 'form-error';
    error.textContent = message;
    error.style.cssText = 'color: #ff4444; font-size: 0.75rem; margin-top: 0.25rem; display: block;';
    input.parentElement.appendChild(error);
  },

  clearErrors() {
    this.form.querySelectorAll('.form-error').forEach(el => el.remove());
    this.form.querySelectorAll('input, textarea').forEach(el => {
      el.style.borderColor = '';
    });
  }
};

/* ============================================
   ABOUT PARALLAX
   ============================================ */
const AboutParallax = {
  init() {
    this.portrait = document.querySelector('.about-portrait-img');
    if (!this.portrait) return;

    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      const moveX = x * -10;
      const moveY = y * -10;
      
      this.portrait.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
};

/* ============================================
   INITIALIZATION
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Core modules
  if (window.ThemeManager) ThemeManager.init();
  if (window.Navigation) Navigation.init();
  if (window.ScrollAnimations) ScrollAnimations.init();
  if (window.LazyLoader) LazyLoader.init();

  // Visual effects
  if (window.Particles) Particles.init();
  if (window.Cursor) Cursor.init();
  if (window.Ribbon) Ribbon.init();
  AboutParallax.init();

  // Page transitions
  if (window.PageTransitions) PageTransitions.init();

  // Cinematic intro sequence
  IntroSequence.init();

  // Interactive components
  if (window.ProjectCarousel) ProjectCarousel.init();
  TestimonialCarousel.init();
  ContactForm.init();
});
