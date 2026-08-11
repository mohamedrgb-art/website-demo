'use strict';

const Cursor = {
  init() {
    // Don't init on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    
    this.cursor = document.getElementById('customCursor');
    this.dot = this.cursor.querySelector('.cursor-dot');
    this.ring = this.cursor.querySelector('.cursor-ring');
    this.text = document.getElementById('cursorText');
    
    if (!this.cursor) return;
    
    this.pos = { x: 0, y: 0 };
    this.dotPos = { x: 0, y: 0 };
    this.ringPos = { x: 0, y: 0 };
    this.visible = false;
    this.state = 'default';
    
    // Add cursor: none to body
    document.body.style.cursor = 'none';
    // Also set cursor: none on all interactive elements
    document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
      el.style.cursor = 'none';
    });
    
    this.bindEvents();
    this.render();
  },
  
  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.pos.x = e.clientX;
      this.pos.y = e.clientY;
      if (!this.visible) {
        this.visible = true;
        this.cursor.style.opacity = '1';
      }
    });
    
    document.addEventListener('mouseleave', () => {
      this.visible = false;
      this.cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
      this.visible = true;
      this.cursor.style.opacity = '1';
    });
    
    // Use mouseover/mouseout for state detection
    document.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.closest('.project-card-media')) {
        this.setState('play');
      } else if (target.closest('.btn') || target.closest('button[type="submit"]')) {
        this.setState('open');
      } else if (target.closest('input') || target.closest('textarea')) {
        this.setState('hidden');
      } else if (target.closest('a:not(.btn)') || target.closest('.nav-link') || target.closest('.social-link') || target.closest('.contact-email')) {
        this.setState('arrow');
      } else {
        this.setState('default');
      }
    });
  },
  
  setState(state) {
    if (this.state === state) return;
    this.state = state;
    
    // Remove all state classes
    this.cursor.className = 'custom-cursor';
    
    switch (state) {
      case 'play':
        this.cursor.classList.add('cursor-play');
        this.text.textContent = 'PLAY';
        break;
      case 'open':
        this.cursor.classList.add('cursor-open');
        this.text.textContent = 'OPEN';
        break;
      case 'arrow':
        this.cursor.classList.add('cursor-arrow');
        this.text.textContent = '';
        break;
      case 'hidden':
        this.cursor.classList.add('cursor-hidden');
        this.text.textContent = '';
        break;
      default:
        this.text.textContent = '';
        break;
    }
  },
  
  lerp(start, end, factor) {
    return start + (end - start) * factor;
  },
  
  render() {
    this.dotPos.x = this.lerp(this.dotPos.x, this.pos.x, 0.2);
    this.dotPos.y = this.lerp(this.dotPos.y, this.pos.y, 0.2);
    this.ringPos.x = this.lerp(this.ringPos.x, this.pos.x, 0.1);
    this.ringPos.y = this.lerp(this.ringPos.y, this.pos.y, 0.1);
    
    this.dot.style.transform = `translate(${this.dotPos.x}px, ${this.dotPos.y}px) translate(-50%, -50%)`;
    this.ring.style.transform = `translate(${this.ringPos.x}px, ${this.ringPos.y}px) translate(-50%, -50%)`;
    
    // Position text centered on ring
    if (this.text) {
      this.text.style.transform = `translate(${this.ringPos.x}px, ${this.ringPos.y}px) translate(-50%, -50%)`;
    }
    
    requestAnimationFrame(() => this.render());
  }
};

window.Cursor = Cursor;
