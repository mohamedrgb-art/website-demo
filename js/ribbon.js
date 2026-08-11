'use strict';

const Ribbon = {
  init() {
    // Only on desktop
    if (window.innerWidth < 768) return;
    
    this.ribbon = document.getElementById('ribbon');
    if (!this.ribbon) return;
    
    this.svg = this.ribbon.querySelector('.ribbon-svg');
    this.scrollY = 0;
    this.targetScrollY = 0;
    this.isAnimating = false;
    
    this.generatePath();
    this.bindEvents();
    this.animate();
  },
  
  generatePath() {
    // Create the undulating ribbon path
    const height = 2000;
    const centerX = 100;
    const amplitude = 40;
    const ribbonWidth = 6;
    
    // Generate smooth S-curve control points
    const points = [];
    const segments = 8;
    for (let i = 0; i <= segments; i++) {
      const y = (i / segments) * height;
      const x = centerX + Math.sin(i * 0.8) * amplitude;
      points.push({ x, y });
    }
    
    // Create left and right edges of the ribbon
    let pathLeft = `M ${points[0].x - ribbonWidth/2} ${points[0].y}`;
    let pathRight = '';
    
    for (let i = 1; i < points.length; i++) {
      const cpY = (points[i-1].y + points[i].y) / 2;
      pathLeft += ` Q ${points[i-1].x - ribbonWidth/2} ${cpY} ${points[i].x - ribbonWidth/2} ${points[i].y}`;
    }
    
    // Right side (reverse)
    for (let i = points.length - 1; i >= 0; i--) {
      if (i === points.length - 1) {
        pathRight += ` L ${points[i].x + ribbonWidth/2} ${points[i].y}`;
      } else {
        const cpY = (points[i+1].y + points[i].y) / 2;
        pathRight += ` Q ${points[i+1].x + ribbonWidth/2} ${cpY} ${points[i].x + ribbonWidth/2} ${points[i].y}`;
      }
    }
    
    const pathD = pathLeft + pathRight + ' Z';
    
    // Create SVG content
    this.svg.innerHTML = `
      <defs>
        <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#39A8FF" stop-opacity="0" />
          <stop offset="20%" stop-color="#39A8FF" stop-opacity="0.15" />
          <stop offset="50%" stop-color="#39A8FF" stop-opacity="0.25" />
          <stop offset="80%" stop-color="#39A8FF" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#39A8FF" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path d="${pathD}" fill="url(#ribbonGradient)" />
    `;
  },
  
  bindEvents() {
    window.addEventListener('scroll', () => {
      this.targetScrollY = window.scrollY;
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.animate();
      }
    }, { passive: true });
    
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        this.ribbon.style.display = 'none';
      } else {
        this.ribbon.style.display = '';
        this.generatePath();
      }
    });
  },
  
  animate() {
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.05;
    
    // Translate the ribbon based on scroll (parallax-like, slower than scroll)
    const translateY = -this.scrollY * 0.15;
    this.svg.style.transform = `translateY(${translateY}px)`;
    
    if (Math.abs(this.targetScrollY - this.scrollY) > 0.5) {
      requestAnimationFrame(() => this.animate());
    } else {
      this.isAnimating = false;
    }
  }
};

window.Ribbon = Ribbon;
