'use strict';

const Particles = {
  init() {
    this.canvas = document.getElementById('particlesCanvas');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.isVisible = true;
    this.animationId = null;
    
    // Check reduced motion
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.resize();
    this.createParticles();
    
    window.addEventListener('resize', () => this.resize());
    
    // Track mouse for subtle interaction
    document.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    
    // Visibility observer
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
          if (this.isVisible && !this.animationId) {
            this.animate();
          }
        });
      }, { threshold: 0 });
      
      const heroSection = document.getElementById('hero');
      if (heroSection) observer.observe(heroSection);
    }
    
    if (!this.reducedMotion) {
      this.animate();
    } else {
      this.drawStatic();
    }
  },
  
  resize() {
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.offsetWidth;
    this.canvas.height = parent.offsetHeight;
  },
  
  createParticles() {
    const count = Math.min(60, Math.floor(this.canvas.width / 25));
    this.particles = [];
    
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        speedY: -(Math.random() * 0.3 + 0.1), // Slow upward drift
        speedX: (Math.random() - 0.5) * 0.2, // Slight horizontal sway
        phase: Math.random() * Math.PI * 2 // For sine wave sway
      });
    }
  },
  
  drawStatic() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(57, 168, 255, ${p.opacity})`;
      this.ctx.fill();
    });
  },
  
  animate() {
    if (!this.isVisible) {
      this.animationId = null;
      return;
    }
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(p => {
      // Update position
      p.phase += 0.005;
      p.x += p.speedX + Math.sin(p.phase) * 0.1;
      p.y += p.speedY;
      
      // Mouse interaction (very subtle push)
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100 * 0.5;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }
      
      // Wrap around
      if (p.y < -10) p.y = this.canvas.height + 10;
      if (p.x < -10) p.x = this.canvas.width + 10;
      if (p.x > this.canvas.width + 10) p.x = -10;
      
      // Draw
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(57, 168, 255, ${p.opacity})`;
      this.ctx.fill();
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
};

window.Particles = Particles;
