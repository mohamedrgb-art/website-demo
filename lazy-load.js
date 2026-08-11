'use strict';

const LazyLoader = {
  init() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (!images.length) return;
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.addEventListener('load', () => {
              img.classList.add('loaded');
            });
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      }, {
        rootMargin: '200px'
      });
      
      images.forEach(img => observer.observe(img));
    } else {
      // Fallback: load all
      images.forEach(img => {
        img.src = img.dataset.src;
        if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
        }
        img.removeAttribute('data-src');
      });
    }
  }
};

window.LazyLoader = LazyLoader;
