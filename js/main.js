/* =========================================================================
   Anson Chiu — Portfolio interactions
   i18n · theme · project render/filter · modal · lightbox · scroll UX
   ========================================================================= */
(() => {
  'use strict';

  /* ----------------------------- i18n ----------------------------------- */
  const DICTS = {};            // { en: {...}, zh: {...} }
  let lang = localStorage.getItem('lang') || 'zh';   // default: Chinese

  const t = (key) =>
    (DICTS[lang] && DICTS[lang][key]) ??
    (DICTS.en && DICTS.en[key]) ??
    key;

  const escapeHtml = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // light markdown: **bold** -> <strong>
  const mdBold = (s) =>
    escapeHtml(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  function applyLang() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = mdBold(t(el.dataset.i18nHtml));
    });
    const btn = document.getElementById('langBtn');
    if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';
  }

  async function loadDicts() {
    const [en, zh] = await Promise.all([
      fetch('assets/translations/en.json?v=12').then((r) => r.json()),
      fetch('assets/translations/zh.json?v=12').then((r) => r.json())
    ]);
    DICTS.en = en;
    DICTS.zh = zh;
  }

  /* ----------------------------- Theme ---------------------------------- */
  function initTheme() {
    const saved = localStorage.getItem('theme');
    const theme = saved || 'light';   // default: light (unless user chose otherwise)
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
  }
  function updateThemeIcon(theme) {
    const i = document.querySelector('#themeBtn i');
    if (i) i.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  function toggleTheme() {
    const next =
      document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
  }

  /* ----------------------------- Projects ------------------------------- */
  const catClass = { industry: 'cat-industry', academic: 'cat-academic', personal: 'cat-personal' };
  const catLabelKey = { industry: 'industry-project', academic: 'academic-project', personal: 'weekend-project' };

  function renderFilters() {
    const wrap = document.getElementById('filters');
    if (!wrap) return;
    wrap.innerHTML = PROJECT_CATEGORIES.map((c, i) =>
      `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${c.key}" data-i18n="${c.labelKey}"></button>`
    ).join('');
    wrap.addEventListener('click', (e) => {
      const b = e.target.closest('.filter-btn');
      if (!b) return;
      wrap.querySelectorAll('.filter-btn').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      filterProjects(b.dataset.filter);
    });
  }

  function renderProjects() {
    const grid = document.getElementById('projGrid');
    if (!grid) return;
    const ordered = [...PROJECTS].sort(
      (a, b) => CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category]
    );
    grid.innerHTML = ordered.map((p) => {
      const img = PROJECT_IMG + (p.thumb || p.images[0]);   // optional custom card cover
      const tags = p.tags.slice(0, 4).map((tg) => `<span class="tag">${tg}</span>`).join('');
      const award = p.award
        ? `<span class="proj-card__award"><i class="fa-solid fa-trophy"></i><span data-i18n="award-text"></span></span>`
        : '';
      return `
      <article class="proj-card" data-id="${p.id}" data-cat="${p.category}">
        <div class="proj-card__media">
          <span class="proj-card__bg" style="background-image:url('${img}')"></span>
          <img src="${img}" alt="" loading="lazy">
          <span class="proj-card__cat ${catClass[p.category]}" data-i18n="${catLabelKey[p.category]}"></span>
          ${award}
        </div>
        <div class="proj-card__body">
          <h3 class="proj-card__title" data-i18n="${p.titleKey}"></h3>
          <p class="proj-card__desc" data-i18n="${p.descKey}"></p>
          <div class="proj-card__tags">${tags}</div>
          <span class="proj-card__more"><span data-i18n="btn-details"></span> <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </article>`;
    }).join('');

    grid.querySelectorAll('.proj-card').forEach((card) => {
      card.addEventListener('click', () => openProjectModal(card.dataset.id));
    });
  }

  /* ----------------------------- Skills --------------------------------- */
  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || typeof SKILL_GROUPS === 'undefined') return;
    grid.innerHTML = SKILL_GROUPS.map((g) => {
      const chips = g.items.map((it) => {
        const icon = it.icon ? `<i class="${it.icon}"></i>` : '';
        const cls = 'chip' + (it.core ? ' core' : '') + (g.exploring ? ' learning' : '');
        const label = it.labelKey ? `<span data-i18n="${it.labelKey}"></span>` : it.name;
        return `<span class="${cls}">${icon}${label}</span>`;
      }).join('');
      return `
      <div class="skill-card reveal">
        <h3><i class="${g.icon}"></i><span data-i18n="${g.titleKey}"></span></h3>
        <div class="chips">${chips}</div>
      </div>`;
    }).join('');
  }

  function filterProjects(key) {
    document.querySelectorAll('.proj-card').forEach((card) => {
      const show = key === 'all' || card.dataset.cat === key;
      card.style.display = show ? '' : 'none';
      if (show) { card.style.animation = 'none'; void card.offsetWidth; card.style.animation = ''; }
    });
  }

  /* ----------------------------- Project modal -------------------------- */
  const modal = document.getElementById('modal');

  function openProjectModal(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    const box = modal.querySelector('.modal__box');

    const videoLink = p.links.find((l) => l.type === 'video');
    const media = videoLink
      ? `<div class="modal__media"><iframe src="https://www.youtube.com/embed/${videoLink.id}" title="video" allowfullscreen></iframe></div>`
      : '';

    const gallery = p.images.length
      ? `<div class="modal__gallery">${p.images
          .map((im) => `<img src="${PROJECT_IMG + im}" alt="" loading="lazy" data-lb>`)
          .join('')}</div>`
      : '';

    const tags = p.tags.map((tg) => `<span class="tag">${tg}</span>`).join('');

    const actions = p.links
      .filter((l) => LINK_META[l.type])
      .map((l) => {
        const m = LINK_META[l.type];
        if (l.type === 'video') {
          return `<button class="btn btn-ghost" data-scroll-video><i class="${m.icon}"></i><span data-i18n="${m.labelKey}"></span></button>`;
        }
        return `<a class="btn btn-ghost" href="${l.url}" target="_blank" rel="noopener"><i class="${m.icon}"></i><span data-i18n="${m.labelKey}"></span></a>`;
      })
      .join('');

    box.innerHTML = `
      <button class="modal__close" aria-label="close"><i class="fa-solid fa-xmark"></i></button>
      ${media}
      ${gallery}
      <div class="modal__content">
        <span class="modal__cat ${catClass[p.category]}" data-i18n="${catLabelKey[p.category]}"></span>
        <h3 data-i18n="${p.titleKey}"></h3>
        <div class="proj-card__tags">${tags}</div>
        <p class="modal__desc" data-i18n-html="${p.descKey}"></p>
        <div class="modal__actions">${actions}</div>
      </div>`;

    box.querySelector('.modal__close').addEventListener('click', closeModal);
    const scrollVideoBtn = box.querySelector('[data-scroll-video]');
    if (scrollVideoBtn) {
      scrollVideoBtn.addEventListener('click', () =>
        box.querySelector('.modal__media')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      );
    }
    box.querySelectorAll('[data-lb]').forEach((im) =>
      im.addEventListener('click', () => openLightbox(im.src))
    );

    applyLang();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.querySelector('.modal__box').innerHTML = '';   // stops any playing video
    document.body.style.overflow = '';
  }

  /* ----------------------------- Lightbox ------------------------------- */
  const lightbox = document.getElementById('lightbox');
  function openLightbox(src) {
    lightbox.querySelector('img').src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    if (!modal.classList.contains('open')) document.body.style.overflow = '';
  }

  /* ----------------------------- Experience toggles --------------------- */
  function initExperienceToggles() {
    document.querySelectorAll('.tl-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.tl-item');
        const open = item.classList.toggle('open');
        const span = btn.querySelector('span');
        const i = btn.querySelector('i');
        span.dataset.i18n = open ? 'btn-show-less' : 'btn-show-more';
        span.textContent = t(span.dataset.i18n);
      });
    });
    // experience screenshots + photo gallery open in lightbox
    document.querySelectorAll('.tl-shots img, .gallery img').forEach((im) =>
      im.addEventListener('click', () => openLightbox(im.src))
    );
  }

  /* ----------------------------- Scroll UX ------------------------------ */
  function initScrollUX() {
    const bar = document.getElementById('progress');
    const toTop = document.getElementById('toTop');
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      if (bar) bar.style.width = (scrolled * 100) + '%';
      if (toTop) toTop.classList.toggle('show', h.scrollTop > 400);
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // reveal on scroll
    const revIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revIO.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => revIO.observe(el));

    // scrollspy
    const links = [...document.querySelectorAll('.nav__links a')];
    const spyIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach((s) => spyIO.observe(s));
  }

  /* ----------------------------- Nav / menu ----------------------------- */
  function initNav() {
    const burger = document.getElementById('burger');
    const links = document.getElementById('navLinks');
    burger?.addEventListener('click', () => links.classList.toggle('open'));
    links?.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );

    document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
    document.getElementById('langBtn')?.addEventListener('click', () => {
      lang = lang === 'en' ? 'zh' : 'en';
      localStorage.setItem('lang', lang);
      applyLang();
    });
  }

  /* ----------------------------- Global keys ---------------------------- */
  function initGlobal() {
    modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('.lightbox__close')) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (lightbox.classList.contains('open')) closeLightbox();
        else if (modal.classList.contains('open')) closeModal();
      }
    });
  }

  /* ----------------------------- Boot ----------------------------------- */
  function safe(fn) { try { fn(); } catch (e) { console.error(fn.name, e); } }

  async function boot() {
    // Visual + navigation first, so the page is never left blank if a
    // later step (e.g. project rendering) throws.
    safe(initTheme);
    safe(initNav);
    safe(initGlobal);
    safe(renderFilters);
    safe(renderProjects);
    safe(renderSkills);
    safe(initExperienceToggles);
    // initScrollUX last: it observes .reveal elements, including the
    // dynamically rendered skill cards, so they must exist by now.
    safe(initScrollUX);
    try { await loadDicts(); } catch (e) { console.error('loadDicts', e); }
    safe(applyLang);
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
