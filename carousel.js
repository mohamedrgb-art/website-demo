'use strict';

const ProjectCarousel = {
  init() {
    this.track = document.getElementById('projectsTrack');
    if (!this.track) return;

    this.renderDynamicSlides();

    this.slides = document.querySelectorAll('.project-slide');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.prevBtn = document.getElementById('carouselPrev');
    this.nextBtn = document.getElementById('carouselNext');
    this.counter = document.getElementById('carouselCounter');

    if (!this.slides.length) return;

    this.currentIndex = 0;
    this.filteredSlides = [...this.slides];
    this.isAnimating = false;

    this.setupFilters();
    this.setupNavigation();
    this.setupVideoAutoplay();
    this.setupDragScroll();
    this.updateCounter();
  },

  renderDynamicSlides() {
    if (!this.track || !window.ProjectsManager) return;
    const projects = window.ProjectsManager.getAll();
    if (!projects || !projects.length) return;

    this.track.innerHTML = projects.map(p => `
      <article class="project-slide" data-category="${(p.category || 'all').toLowerCase()}" onclick="window.location.href='${p.url}'" style="cursor: pointer;">
        <div class="project-video-frame">
          <img src="${p.thumbnail || p.coverImage}" alt="${p.title}" width="1200" height="675" loading="lazy">
          ${p.badge ? `<span class="project-status-badge">${p.badge}</span>` : ''}
        </div>
        <div class="project-meta">
          <div class="project-meta-top">
            <span class="project-industry">${p.category}</span>
            <span class="project-type">${p.subCategory}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.subtitle}</p>
          <div class="project-roles">
            ${(p.rolesList || []).map(r => `<span class="role-badge">${r}</span>`).join('')}
          </div>
          <span class="project-cta" data-transition>View Case Study &rarr;</span>
        </div>
      </article>
    `).join('');
  },

  setupFilters() {
    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        // Update active state
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter slides
        this.slides.forEach(slide => {
          const category = slide.dataset.category;
          if (filter === 'all' || category === filter) {
            slide.style.display = '';
            slide.classList.remove('filtered-out');
          } else {
            slide.classList.add('filtered-out');
            setTimeout(() => {
              slide.style.display = 'none';
            }, 400);
          }
        });

        // Reset scroll position
        this.currentIndex = 0;
        setTimeout(() => {
          this.filteredSlides = [...this.slides].filter(s => s.style.display !== 'none');
          this.scrollToIndex(0);
          this.updateCounter();
        }, 50);
      });
    });
  },

  setupNavigation() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const projectsSection = document.getElementById('projects');
      if (!projectsSection) return;
      const rect = projectsSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (!isVisible) return;

      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });
  },

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToIndex(this.currentIndex);
      this.updateCounter();
    }
  },

  next() {
    this.filteredSlides = [...this.slides].filter(s => s.style.display !== 'none');
    if (this.currentIndex < this.filteredSlides.length - 1) {
      this.currentIndex++;
      this.scrollToIndex(this.currentIndex);
      this.updateCounter();
    }
  },

  scrollToIndex(index) {
    this.filteredSlides = [...this.slides].filter(s => s.style.display !== 'none');
    const target = this.filteredSlides[index];
    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  },

  updateCounter() {
    if (!this.counter) return;
    this.filteredSlides = [...this.slides].filter(s => s.style.display !== 'none');
    const current = Math.min(this.currentIndex + 1, this.filteredSlides.length);
    const total = this.filteredSlides.length;
    this.counter.textContent = `${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  },

  setupVideoAutoplay() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video');
        if (!video) return;

        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, {
      threshold: [0, 0.5, 1]
    });

    this.slides.forEach(slide => observer.observe(slide));
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
      isDown = false;
      this.track.classList.remove('dragging');
    });

    this.track.addEventListener('mouseup', () => {
      isDown = false;
      this.track.classList.remove('dragging');
      this.snapToNearest();
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
    this.filteredSlides = [...this.slides].filter(s => s.style.display !== 'none');
    const trackRect = this.track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width * 0.3;
    let closest = 0;
    let closestDist = Infinity;

    this.filteredSlides.forEach((slide, i) => {
      const slideRect = slide.getBoundingClientRect();
      const dist = Math.abs(slideRect.left - trackRect.left);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    this.currentIndex = closest;
  }
};

window.ProjectCarousel = ProjectCarousel;
