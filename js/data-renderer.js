// Reads /data/projects.js (and resume.js where applicable) and renders cards / detail pages / resume.
// Loaded as type="module".

import { projects } from '../data/projects.js';
import { resume } from '../data/resume.js';

// --- Utilities ---

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (v == null) return;
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c == null) return;
    if (typeof c === 'string') node.appendChild(document.createTextNode(c));
    else node.appendChild(c);
  });
  return node;
}

function imageOrPlaceholder(src, alt, placeholderClass = 'card__placeholder') {
  // Always render <img>; on error swap in the placeholder.
  const img = el('img', { src, alt: alt || '', loading: 'lazy' });
  const placeholder = el('div', { class: placeholderClass }, `[ ${src} ]`);
  img.addEventListener('error', () => {
    img.remove();
    placeholder.style.display = 'flex';
  });
  // Hide placeholder initially; reveal on error.
  placeholder.style.display = 'none';
  // If src is empty, show placeholder immediately.
  if (!src) { img.remove(); placeholder.style.display = 'flex'; }
  return [img, placeholder];
}

function isVideo(src) {
  return /\.(mp4|mov|webm)$/i.test(src);
}

function mediaElement(item, alt, placeholderClass) {
  const { src, caption } = typeof item === 'string' ? { src: item, caption: null } : item;
  const tag = caption ? 'figure' : 'div';
  const cls = 'project-image' + (caption ? ' project-image--captioned' : '');

  let media;
  if (isVideo(src)) {
    media = el('video', { controls: '', playsinline: '', preload: 'metadata', src });
  } else {
    media = imageOrPlaceholder(src, alt, placeholderClass);
  }

  const children = Array.isArray(media) ? [...media] : [media];
  if (caption) children.push(el('figcaption', {}, caption));
  return el(tag, { class: cls }, children);
}

function parseBody(body) {
  if (!body) return [];
  return body.split(/\n\s*\n/).map((block) => {
    const trimmed = block.trim();
    const lines = trimmed.split('\n');
    const bulletLines = lines.filter((l) => l.trimStart().startsWith('- '));
    if (bulletLines.length === lines.length) {
      return el('ul', { class: 'project-list' }, lines.map((l) => el('li', {}, l.trimStart().slice(2))));
    }
    return el('p', {}, trimmed);
  });
}

function projectCard(p) {
  const isUpcoming = p.upcoming === true;
  const card = el('a', {
    class: 'card reveal' + (isUpcoming ? ' card--upcoming' : ''),
    href: `project.html?id=${encodeURIComponent(p.id)}`,
    'aria-label': `${p.title} project`
  }, [
    el('div', { class: 'card__media' }, [
      ...imageOrPlaceholder(p.coverImage, `${p.title} cover image`),
      isUpcoming ? el('span', { class: 'card__badge' }, 'Coming Soon') : null,
      el('div', { class: 'card__arrow', 'aria-hidden': 'true', html: arrowSVG() })
    ]),
    el('div', { class: 'card__body' }, [
      el('div', { class: 'card__meta' }, [
        el('span', {}, p.timeline || ''),
        el('span', { class: 'accent' }, p.category || '')
      ]),
      el('h3', { class: 'card__title' }, p.title),
      el('p', { class: 'card__impact' }, p.impact || p.summary || ''),
      el('div', { class: 'card__tools' }, (p.tools || []).slice(0, 4).map((t) => el('span', { class: 'tool-chip' }, t)))
    ])
  ]);
  return card;
}

function arrowSVG() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
}

// --- Renderers ---

function workTile(p) {
  const isUpcoming = p.upcoming === true;
  return el('a', {
    class: 'work-tile reveal' + (isUpcoming ? ' work-tile--upcoming' : ''),
    href: `project.html?id=${encodeURIComponent(p.id)}`,
    'aria-label': `${p.title} project`
  }, [
    el('img', { src: p.coverImage || '', alt: p.title, class: 'work-tile__img', loading: 'lazy' }),
    el('div', { class: 'work-tile__overlay' }),
    el('span', { class: 'work-tile__name' }, p.title),
    isUpcoming ? el('span', { class: 'work-tile__badge' }, 'Coming Soon') : null
  ]);
}

function renderEngineeringGrid(root) {
  const engineering = [...projects]
    .filter((p) => p.category === 'Engineering')
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
  const grid = el('div', { class: 'work-grid' });
  engineering.forEach((p) => grid.appendChild(workTile(p)));
  root.appendChild(grid);
}

function renderFeatured() {
  const root = document.getElementById('featured-work');
  if (!root) return;
  renderEngineeringGrid(root);
}

function renderAllWork() {
  const root = document.getElementById('all-work');
  if (!root) return;

  root.appendChild(el('div', { class: 'section-label reveal' }, 'Engineering'));
  renderEngineeringGrid(root);

  const sorted = [...projects].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
  const nonEng = sorted.filter((p) => p.category !== 'Engineering');
  if (nonEng.length) {
    root.appendChild(el('div', { class: 'section-break reveal' }, [
      el('div', { class: 'section-break__line' })
    ]));
    root.appendChild(el('div', { class: 'section-label reveal' }, 'Non-Engineering'));
    const neGrid = el('div', { class: 'work-grid work-grid--2col' });
    nonEng.forEach((p) => neGrid.appendChild(workTile(p)));
    root.appendChild(neGrid);
  }
}

function renderProjectDetail() {
  const root = document.getElementById('project-root');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const p = projects.find((x) => x.id === id);

  if (!p) {
    root.appendChild(el('div', { class: 'container section' }, [
      el('h1', {}, 'Project not found'),
      el('p', { class: 'muted' }, `No project with id "${id || '(none)'}". `),
      el('a', { href: 'work.html', class: 'btn' }, 'Back to all work')
    ]));
    document.title = 'Not found — Drew Guardiola';
    return;
  }

  document.title = `${p.title} — Drew Guardiola`;

  if (p.upcoming) {
    root.appendChild(el('section', { class: 'project-hero container' }, [
      el('div', { class: 'project-hero__eyebrow reveal' }, p.category || 'Project'),
      el('h1', { class: 'project-hero__title reveal' }, p.title),
      el('p', { class: 'project-hero__summary reveal', style: 'margin-top: var(--space-6); color: var(--color-text-muted);' }, 'This project page is coming soon — check back later.'),
      el('a', { href: 'work.html', class: 'btn', style: 'margin-top: var(--space-5); align-self: flex-start;' }, '← Back to all work')
    ]));
    return;
  }

  // Hero block
  const hero = el('section', { class: 'project-hero container' }, [
    el('div', { class: 'project-hero__eyebrow reveal' }, p.category || 'Project'),
    el('h1', { class: 'project-hero__title reveal' }, p.title),
    el('p', { class: 'project-hero__summary reveal' }, p.summary || ''),
    p.impact ? el('div', { class: 'project-hero__impact reveal' }, p.impact) : null
  ]);
  root.appendChild(hero);

  // Cover image
  const cover = el('div', { class: 'container' }, [
    el('div', { class: 'project-cover reveal' }, imageOrPlaceholder(p.coverImage, `${p.title}`, 'project-cover__placeholder'))
  ]);
  root.appendChild(cover);

  // Metadata strip
  const meta = el('div', { class: 'container' }, [
    el('div', { class: 'project-meta reveal' }, [
      metaCell('Timeline', p.timeline),
      metaCell('Role', p.role),
      metaCell('Tools', (p.tools || []).join(' · ')),
      metaCell('Tags', (p.tags || []).join(' · '))
    ])
  ]);
  root.appendChild(meta);

  // Links
  if (Array.isArray(p.links) && p.links.length > 0) {
    const linksRow = el('div', { class: 'container' }, [
      el('div', { class: 'project-links reveal' },
        p.links.map((link) => el('a', {
          class: 'btn',
          href: link.url,
          target: '_blank',
          rel: 'noopener noreferrer'
        }, [link.label, el('span', { class: 'btn__arrow', html: arrowSVG() })]))
      )
    ]);
    root.appendChild(linksRow);
  }

  // Sections
  const sectionsWrap = el('div', { class: 'container' });
  (p.sections || []).forEach((s) => {
    const items = (s.images || []).map((e) => typeof e === 'string' ? { src: e, caption: null } : e);
    const mediaEls = items.map((item) => mediaElement(item, s.heading, 'project-image__placeholder'));
    let gridMod = '';
    if (items.length === 2) gridMod = ' is-pair';
    else if (items.length === 3) gridMod = ' is-trio';
    else if (items.length >= 4) gridMod = ' is-grid';
    const imagesContainer = mediaEls.length
      ? el('div', { class: 'project-section__images' + gridMod }, mediaEls)
      : null;
    sectionsWrap.appendChild(el('section', { class: 'project-section reveal' }, [
      el('h2', { class: 'project-section__heading' }, s.heading || ''),
      el('div', { class: 'project-section__body' }, [
        ...parseBody(s.body),
        imagesContainer
      ])
    ]));
  });
  root.appendChild(sectionsWrap);

  // Prev / Next
  const sorted = [...projects].sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
  const idx = sorted.findIndex((x) => x.id === p.id);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const navEl = el('nav', { class: 'project-nav container', 'aria-label': 'Project navigation' }, [
    prev
      ? el('a', { class: 'project-nav__link', href: `project.html?id=${prev.id}` }, [
          el('span', { class: 'project-nav__label' }, '← Previous'),
          el('span', { class: 'project-nav__title' }, prev.title)
        ])
      : el('div', {}, []),
    next
      ? el('a', { class: 'project-nav__link project-nav__link--next', href: `project.html?id=${next.id}` }, [
          el('span', { class: 'project-nav__label' }, 'Next →'),
          el('span', { class: 'project-nav__title' }, next.title)
        ])
      : el('div', {}, [])
  ]);
  root.appendChild(navEl);
}

function metaCell(label, value) {
  return el('div', { class: 'project-meta__cell' }, [
    el('span', { class: 'project-meta__label' }, label),
    el('span', { class: 'project-meta__value' }, value || '[PLACEHOLDER]')
  ]);
}

function renderResume() {
  const root = document.getElementById('resume-root');
  if (!root) return;

  // Education
  if (resume.education) {
    root.appendChild(resumeSection('Education', resume.education.map((e) => entry({
      title: e.school,
      org: e.degree,
      when: e.timeline,
      bullets: e.notes || []
    }))));
  }

  // Experience
  if (resume.experience) {
    root.appendChild(resumeSection('Technical Experience', resume.experience.map((e) => entry({
      title: e.role,
      org: e.org + (e.location ? ' · ' + e.location : ''),
      when: e.timeline,
      bullets: e.bullets || []
    }))));
  }

  // Leadership
  if (resume.leadership) {
    root.appendChild(resumeSection('Leadership', resume.leadership.map((e) => entry({
      title: e.role,
      org: e.org,
      when: e.timeline,
      bullets: e.bullets || []
    }))));
  }

  // Skills
  if (resume.skills) {
    const listItems = Object.entries(resume.skills).map(([k, v]) =>
      el('li', {}, [
        el('span', { class: 'label' }, k),
        el('span', { class: 'value' }, Array.isArray(v) ? v.join(' · ') : v)
      ])
    );
    root.appendChild(resumeSection('Skills', [el('ul', { class: 'resume-list' }, listItems)]));
  }

  // Awards & Activities
  if (resume.awards) {
    const listItems = resume.awards.map((a) =>
      el('li', {}, [
        el('span', { class: 'label' }, a.label || ''),
        el('span', { class: 'value' }, a.value || '')
      ])
    );
    root.appendChild(resumeSection('Awards & Activities', [el('ul', { class: 'resume-list' }, listItems)]));
  }
}

function resumeSection(heading, children) {
  return el('section', { class: 'resume-section reveal' }, [
    el('div', { class: 'resume-section__layout' }, [
      el('h2', { class: 'resume-section__heading' }, heading),
      el('div', {}, children)
    ])
  ]);
}

function entry({ title, org, when, bullets }) {
  return el('div', { class: 'resume-entry' }, [
    el('div', { class: 'resume-entry__head' }, [
      el('div', {}, [
        el('div', { class: 'resume-entry__title' }, title || ''),
        el('div', { class: 'resume-entry__org' }, org || '')
      ]),
      el('div', { class: 'resume-entry__when' }, when || '')
    ]),
    bullets.length
      ? el('ul', {}, bullets.map((b) => el('li', {}, b)))
      : null
  ]);
}

// --- Boot ---
document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderAllWork();
  renderProjectDetail();
  renderResume();

  // Re-run motion observer for newly-injected .reveal nodes.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const newReveal = document.querySelectorAll('.reveal:not(.is-visible)');
  if (reduce) {
    newReveal.forEach((n) => n.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
  newReveal.forEach((n) => io.observe(n));
});
