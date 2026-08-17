'use strict';

/**
 * Case Study Page — Interactive Components
 * Handles: timeline animation, expandable notes, video player, scroll progress
 */

const CaseStudyPage = {
  init() {
    if (!document.body.classList.contains('case-study-page')) return;

    this.hydrateCaseStudy();
    this.setupScrollProgress();
    this.setupNotesAccordion();
    this.setupVideoPlayer();
    this.setupPrevNextNavigation();
    this.setupTimelineAnimation();
    this.setupEntryAnimation();
  },

  hydrateCaseStudy() {
    if (!window.ProjectsManager) return;
    const fullPath = window.location.pathname;
    const currentFilename = fullPath.substring(fullPath.lastIndexOf('/') + 1) || 'case-study-1.html';
    
    const urlParams = new URLSearchParams(window.location.search);
    const paramId = urlParams.get('id') || urlParams.get('project') || urlParams.get('slug');

    const project = window.ProjectsManager.getById(paramId) || window.ProjectsManager.getByUrl(currentFilename);
    if (!project) return;

    document.title = `${project.title} — MOHAMEDRGBART Case Study`;

    const heroImg = document.querySelector('.cs-hero-media img');
    if (heroImg) {
      heroImg.src = project.coverImage || project.thumbnail;
      heroImg.alt = project.title;
    }
    const heroTitle = document.querySelector('.cs-title');
    if (heroTitle) heroTitle.textContent = project.title;

    const heroTagline = document.querySelector('.cs-tagline');
    if (heroTagline) heroTagline.textContent = project.subtitle;

    const metaValues = document.querySelectorAll('.cs-meta-value');
    if (metaValues.length >= 5) {
      metaValues[0].textContent = project.client;
      metaValues[1].textContent = project.industry;
      metaValues[2].textContent = project.year;
      metaValues[3].textContent = project.role;
      metaValues[4].textContent = project.duration;
    }

    const goalHeading = document.querySelector('.cs-challenge .cs-heading');
    if (goalHeading && project.projectGoal?.heading) goalHeading.textContent = project.projectGoal.heading;

    const goalParagraphs = document.querySelectorAll('.cs-challenge .cs-text');
    if (goalParagraphs.length >= 1 && project.projectGoal?.en) goalParagraphs[0].textContent = project.projectGoal.en;
    if (goalParagraphs.length >= 2 && project.projectGoal?.ar) goalParagraphs[1].textContent = project.projectGoal.ar;

    const approachHeading = document.querySelector('.cs-approach .cs-heading');
    if (approachHeading && project.myApproach?.heading) approachHeading.textContent = project.myApproach.heading;

    const approachParagraphs = document.querySelectorAll('.cs-approach .cs-text');
    if (approachParagraphs.length >= 1 && project.myApproach?.en) approachParagraphs[0].textContent = project.myApproach.en;
    if (approachParagraphs.length >= 2 && project.myApproach?.ar) approachParagraphs[1].textContent = project.myApproach.ar;

    const challengesHeading = document.querySelector('.cs-problems .cs-heading');
    if (challengesHeading && project.challenges?.heading) challengesHeading.textContent = project.challenges.heading;

    const challengesParagraphs = document.querySelectorAll('.cs-problems .cs-text');
    if (challengesParagraphs.length >= 1 && project.challenges?.en) challengesParagraphs[0].textContent = project.challenges.en;
    if (challengesParagraphs.length >= 2 && project.challenges?.ar) challengesParagraphs[1].textContent = project.challenges.ar;

    const softwareGrid = document.querySelector('.cs-software-grid');
    if (softwareGrid && project.software?.length) {
      softwareGrid.innerHTML = project.software.map(sw => `
        <div class="cs-software-item reveal-up">
          <div class="cs-software-icon">
            <span>${sw.icon}</span>
          </div>
          <span class="cs-software-name">${sw.name}</span>
        </div>
      `).join('');
    }

    const processSteps = document.querySelectorAll('.cs-process-step');
    if (processSteps.length > 0 && project.workflow?.length) {
      processSteps.forEach((stepEl, idx) => {
        const item = project.workflow[idx];
        if (!item) return;
        const labelEl = stepEl.querySelector('.cs-process-label');
        if (labelEl) labelEl.textContent = item.label;
        
        let subtextEl = stepEl.querySelector('.cs-process-subtext');
        if (!subtextEl && item.subtext) {
          subtextEl = document.createElement('p');
          subtextEl.className = 'cs-process-subtext';
          stepEl.appendChild(subtextEl);
        }
        if (subtextEl && item.subtext) {
          subtextEl.textContent = item.subtext;
        }
      });
    }

    const iframes = document.querySelectorAll('.cs-video-frame iframe');
    if (iframes.length > 0 && project.video && project.video.startsWith('http')) {
      if (iframes[0]) iframes[0].setAttribute('src', project.video);
      if (iframes[1] && project.video2 && project.video2.startsWith('http')) {
        iframes[1].setAttribute('src', project.video2);
      }
    }

    const videoTag = document.querySelector('.cs-video-frame video');
    if (videoTag) {
      if (project.coverImage || project.thumbnail) {
        videoTag.setAttribute('poster', project.coverImage || project.thumbnail);
      }
      const sourceTag = videoTag.querySelector('source');
      if (sourceTag && project.video) {
        sourceTag.setAttribute('src', project.video);
        videoTag.load();
      }
    }
  },

  setupScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'cs-scroll-progress';
    document.body.appendChild(bar);

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${progress}%`;
        ticking = false;
      });
    }, { passive: true });
  },

  setupNotesAccordion() {
    const notes = document.querySelectorAll('.cs-note');
    notes.forEach(note => {
      const summary = note.querySelector('summary');
      if (!summary) return;

      summary.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = note.hasAttribute('open');

        // Close all others
        notes.forEach(n => {
          if (n !== note && n.hasAttribute('open')) {
            n.removeAttribute('open');
          }
        });

        if (isOpen) {
          note.removeAttribute('open');
        } else {
          note.setAttribute('open', '');
        }
      });
    });
  },

  setupVideoPlayer() {
    const frames = document.querySelectorAll('.cs-video-frame');
    frames.forEach(frame => {
      const video = frame.querySelector('video');
      const img = frame.querySelector('img');
      const iframe = frame.querySelector('iframe');

      if (iframe) {
        if (frame.style.height) frame.style.height = '';

        let aspect = frame.getAttribute('data-aspect');
        if (!aspect && window.ProjectsManager) {
          const fullPath = window.location.pathname;
          const currentFilename = fullPath.substring(fullPath.lastIndexOf('/') + 1) || 'case-study-1.html';
          const proj = window.ProjectsManager.getByUrl(currentFilename);
          if (proj && proj.aspectRatio) {
            aspect = proj.aspectRatio;
            frame.setAttribute('data-aspect', aspect);
          }
        }

        if (aspect === '9:16' || aspect === '9/16') {
          frame.classList.add('ratio-9-16');
          frame.classList.remove('ratio-16-9');
        } else if (aspect === '4:3' || aspect === '4/3') {
          frame.classList.add('ratio-4-3');
          frame.classList.remove('ratio-16-9', 'ratio-9-16');
        } else if (aspect && aspect.includes('/')) {
          frame.style.setProperty('--aspect-ratio', aspect.replace('/', ' / '));
        } else {
          frame.classList.add('ratio-16-9');
        }
      }

      const applyAspect = (width, height) => {
        if (!width || !height) return;
        const ratio = width / height;
        frame.style.aspectRatio = `${width} / ${height}`;

        if (ratio < 0.8) {
          // Vertical (e.g. 9:16)
          frame.style.maxWidth = '420px';
        } else if (ratio < 1.25) {
          // Square / Portrait (e.g. 1:1, 4:5)
          frame.style.maxWidth = '600px';
        } else {
          // Landscape (e.g. 16:9)
          frame.style.maxWidth = '960px';
        }
      };

      if (video) {
        // Automatic Poster Generation if poster attribute is missing
        if (!video.hasAttribute('poster') || video.getAttribute('poster').trim() === '') {
          video.preload = 'auto';

          video.addEventListener('loadeddata', () => {
            if (video.duration > 0.5) {
              video.currentTime = Math.min(1.0, video.duration / 2);
            }
          }, { once: true });

          video.addEventListener('seeked', () => {
            try {
              const canvas = document.createElement('canvas');
              canvas.width = video.videoWidth || 1280;
              canvas.height = video.videoHeight || 720;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
                if (dataUrl && dataUrl.length > 100) {
                  video.setAttribute('poster', dataUrl);
                }
              }
            } catch (e) {
              // Browser native seek preview fallback
            }
          }, { once: true });
        }

        // Apply aspect ratio matching from video metadata
        if (video.readyState >= 1 && video.videoWidth) {
          applyAspect(video.videoWidth, video.videoHeight);
        } else {
          video.addEventListener('loadedmetadata', () => {
            applyAspect(video.videoWidth, video.videoHeight);
          });
        }
      }

      if (img) {
        if (img.complete && img.naturalWidth) {
          applyAspect(img.naturalWidth, img.naturalHeight);
        } else {
          img.addEventListener('load', () => {
            applyAspect(img.naturalWidth, img.naturalHeight);
          });
        }
      }
    });

    const playOverlays = document.querySelectorAll('.cs-video-play-overlay');
    playOverlays.forEach(overlay => {
      overlay.addEventListener('click', () => {
        const frame = overlay.closest('.cs-video-frame');
        if (!frame) return;

        overlay.innerHTML = '<div class="cs-play-message">Video Coming Soon</div>';
        overlay.style.background = 'rgba(6, 11, 19, 0.85)';
        overlay.style.cursor = 'default';
      });
    });
  },

  setupTimelineAnimation() {
    if (!('IntersectionObserver' in window)) return;

    const items = document.querySelectorAll('.cs-timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    items.forEach(item => observer.observe(item));
  },

  setupEntryAnimation() {
    // Animate hero content on page load
    const heroContent = document.querySelector('.cs-hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.classList.add('cs-hero-revealed');
      }, 300);
    }
  },

  async getProjectsList() {
    try {
      const response = await fetch('index.html');
      if (response.ok) {
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const slides = doc.querySelectorAll('#projectsTrack .project-slide');

        if (slides.length > 0) {
          const list = [];
          slides.forEach(slide => {
            const linkEl = slide.querySelector('a.project-cta');
            const titleEl = slide.querySelector('.project-title');
            const imgEl = slide.querySelector('.project-video-frame img');

            if (linkEl && titleEl) {
              const href = linkEl.getAttribute('href');
              const title = titleEl.textContent.trim();
              const image = imgEl ? imgEl.getAttribute('src') : '';
              list.push({ href, title, image });
            }
          });
          if (list.length > 0) return list;
        }
      }
    } catch (err) {
      // Ignore fetch error when running under strict local file:// origin
    }

    return window.PORTFOLIO_PROJECTS || [
      { href: 'case-study-1.html', title: 'Formula One Promo', image: 'assets/images/f1-cover.png' },
      { href: 'case-study-2.html', title: 'Italian Course Commercial', image: 'assets/images/italy-cover.png' },
      { href: 'case-study-3.html', title: 'The Craft', image: 'assets/images/project-3.jpg' },
      { href: 'case-study-4.html', title: 'Midnight Drive', image: 'assets/images/project-4.jpg' }
    ];
  },

  setupPrevNextNavigation() {
    const navSection = document.querySelector('.cs-next-project');
    if (!navSection) return;

    const fullPath = window.location.pathname;
    const currentFilename = fullPath.substring(fullPath.lastIndexOf('/') + 1) || 'case-study-1.html';

    const navData = window.ProjectsManager ? window.ProjectsManager.getPrevNext(currentFilename) : null;
    if (!navData || !navData.prev || !navData.next) return;

    const { prev, next } = navData;

    navSection.innerHTML = `
      <div class="container">
        <div class="cs-nav-grid">
          <a href="${prev.url}" class="cs-nav-link cs-prev-link" data-transition>
            <span class="cs-nav-label">&larr; Previous Project</span>
            <div class="cs-next-thumb-wrapper">
              <img src="${prev.thumbnail || prev.coverImage}" alt="${prev.title}" width="600" height="337" loading="lazy">
            </div>
            <h3 class="cs-next-title">${prev.title}</h3>
            <div class="cs-next-arrow cs-prev-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </div>
          </a>

          <a href="${next.url}" class="cs-nav-link cs-next-link" data-transition>
            <span class="cs-nav-label">Next Project &rarr;</span>
            <div class="cs-next-thumb-wrapper">
              <img src="${next.thumbnail || next.coverImage}" alt="${next.title}" width="600" height="337" loading="lazy">
            </div>
            <h3 class="cs-next-title">${next.title}</h3>
            <div class="cs-next-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </a>
        </div>
      </div>
    `;
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  CaseStudyPage.init();

  // Also init shared modules for case study pages
  if (window.ThemeManager) ThemeManager.init();
  if (window.Navigation) Navigation.init();
  if (window.ScrollAnimations) ScrollAnimations.init();
  if (window.LazyLoader) LazyLoader.init();
  if (window.Cursor) Cursor.init();
  if (window.Ribbon) Ribbon.init();
  if (window.PageTransitions) PageTransitions.init();
});
