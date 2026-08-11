'use strict';

const ThemeManager = {
  init() {
    this.toggle = document.getElementById('themeToggle');
    this.html = document.documentElement;
    this.sunIcon = document.getElementById('sunIcon');
    this.moonIcon = document.getElementById('moonIcon');
    
    // Determine initial theme
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    
    this.setTheme(theme, false); // false = no transition on first load
    
    this.toggle?.addEventListener('click', () => this.toggleTheme());
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  },
  
  setTheme(theme, animate = true) {
    if (!animate) {
      this.html.style.transition = 'none';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.html.style.transition = '';
        });
      });
    }
    this.html.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    
    // Update icons
    if (this.sunIcon && this.moonIcon) {
      this.sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
      this.moonIcon.style.display = theme === 'light' ? 'block' : 'none';
    }
    
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  },
  
  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
};

window.ThemeManager = ThemeManager;
