'use strict';

const Navigation = {
  init() {
    this.nav = document.getElementById('navbar');
    this.hamburger = document.getElementById('navHamburger');
    this.mobileMenu = document.getElementById('mobileMenu');
    this.backToTop = document.getElementById('backToTop');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
    
    this.setupScrollDetection();
    this.setupActiveTracking();
    this.setupSmoothScroll();
    this.setupMobileMenu();
    this.setupBackToTop();
  },
  
  setupScrollDetection() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 100) {
            this.nav?.classList.add('scrolled');
          } else {
            this.nav?.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  },
  
  setupActiveTracking() {
    if (!('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      threshold: 0.3
    });
    
    this.sections.forEach(section => observer.observe(section));
  },
  
  setupSmoothScroll() {
    const allNavAnchors = document.querySelectorAll('.nav-link, .nav-brand, .mobile-menu .nav-link');
    allNavAnchors.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#hero' || href === '#') {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          if (window.IntroSequence && typeof window.IntroSequence.restartIntro === 'function') {
            window.IntroSequence.restartIntro();
          }
          return;
        }

        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const navHeight = 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  },
  
  setupMobileMenu() {
    if (this.hamburger && this.mobileMenu) {
      this.hamburger.addEventListener('click', () => {
        this.hamburger.classList.toggle('active');
        this.mobileMenu.classList.toggle('active');
        document.body.style.overflow = this.mobileMenu.classList.contains('active') ? 'hidden' : '';
      });
      
      const mobileLinks = this.mobileMenu.querySelectorAll('.nav-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.hamburger.classList.remove('active');
          this.mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.mobileMenu.classList.contains('active')) {
          this.hamburger.classList.remove('active');
          this.mobileMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  },
  
  setupBackToTop() {
    if (this.backToTop) {
      // Initially hidden
      this.backToTop.style.opacity = '0';
      this.backToTop.style.visibility = 'hidden';
      this.backToTop.style.transition = 'all 0.3s ease';
      
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (window.scrollY > 500) {
              this.backToTop.style.opacity = '1';
              this.backToTop.style.visibility = 'visible';
            } else {
              this.backToTop.style.opacity = '0';
              this.backToTop.style.visibility = 'hidden';
            }
            ticking = false;
          });
          ticking = true;
        }
      });
      
      this.backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
};

window.Navigation = Navigation;
