//  hamburger btn code

const bodyItem = document.getElementsByName('body');

let navbarMenu = document.querySelector('.navbar');

let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) {
    navbarMenu.classList.add('open');
    menuOpen = true;
  } else {
    navbarMenu.classList.remove('open');
    menuOpen = false;
  }
}

window.addEventListener('resize', function() {
  let windowWidth = window.innerWidth;

  if (windowWidth > 1080) {
    navbarMenu.style.transform = 'translateX(221px)';
  } else {
    navbarMenu.style.transform = '';
  }
});

// elements from left (main) animation code

const hiddenElementsLeft = document.querySelectorAll('.hidden');

const hiddenElementsRight = document.querySelectorAll('.hiddenRight');

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const observerRight = new IntersectionObserver((entriess) => {
  entriess.forEach((entryy) => {
    if (entryy.isIntersecting) {
      entryy.target.classList.add('show1');
    }
  });
});

hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

hiddenElementsRight.forEach((ell) => observerRight.observe(ell));

// accordions transition code

const accordions = document.querySelectorAll('.accordion__input');

accordions.forEach((accordion) => {
  accordion.addEventListener('change', function () {
    const content = this.nextElementSibling;

    if (this.checked) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});

// header and navbar btn behaviour code

let isScrolling = false;

let activeSection = null;

const pagrindinisSection = document.querySelector('.main-title-wrapper');
const apieSection = document.querySelector('.about');
const dukSection = document.querySelector('.duk-accordion-container');
const kontaktaiSection = document.querySelector('.kontaktai-content-wrapper');

function scrollToPagrindinis() {
  if (isScrolling) return;

  const pagrindinisSectionRect = pagrindinisSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const sectionHeight = pagrindinisSectionRect.height;

  const sectionOffset = pagrindinisSectionRect.top - (windowHeight / 2) + (sectionHeight / 2);

  const isTopInView = pagrindinisSectionRect.top >= 0 && pagrindinisSectionRect.top <= windowHeight;
  const isBottomInView = pagrindinisSectionRect.bottom >= 0 && pagrindinisSectionRect.bottom <= windowHeight;

  if (isTopInView && isBottomInView) {
    return null;
  } else if (navbarMenu.classList.contains('open')) {
    navbarMenu.classList.remove('open');
    menuOpen = false;
  }

  isScrolling = true;
  window.scrollTo({
    top: sectionOffset,
    behavior: 'smooth'
  });

  setTimeout(() => {
    isScrolling = false;
  }, 1000);


}

function scrollToApie() {
  if (isScrolling) return;

  const apieSectionRect = apieSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const isTopInView = apieSectionRect.top >= 0 && apieSectionRect.top <= windowHeight;

  if (isTopInView) {
    return;
  } else if (navbarMenu.classList.contains('open')) {
    navbarMenu.classList.remove('open');
    menuOpen = false;
  }

  isScrolling = true;

  const higherOffset = apieSection.offsetTop - 100; // Adjust the offset as needed

  const initialScroll = window.pageYOffset;
  const distance = higherOffset - initialScroll;
  const duration = 1000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const easeInOutCubic = progress < duration ? easeInOutCubicFn(progress / duration) : 1;

    window.scroll(0, initialScroll + distance * easeInOutCubic);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      isScrolling = false;
    }
  }

  function easeInOutCubicFn(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  window.requestAnimationFrame(step);
}

function scrollToDuk() {
  if (isScrolling) return;

  const dukSectionRect = dukSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const isTopInView = dukSectionRect.top >= 0 && dukSectionRect.top <= windowHeight;

  if (isTopInView) {
    return;
  } else if (navbarMenu.classList.contains('open')) {
    navbarMenu.classList.remove('open');
    menuOpen = false;
  }

  isScrolling = true;

  const higherOffset = dukSection.offsetTop - 100; // Adjust the offset as needed

  const initialScroll = window.pageYOffset;
  const distance = higherOffset - initialScroll;
  const duration = 1000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const easeInOutCubic = progress < duration ? easeInOutCubicFn(progress / duration) : 1;

    window.scroll(0, initialScroll + distance * easeInOutCubic);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      isScrolling = false;
    }
  }

  function easeInOutCubicFn(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  window.requestAnimationFrame(step);
}

function scrollToKontaktai() {
  if (isScrolling) return;

  const kontaktaiSectionRect = kontaktaiSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const isTopInView = kontaktaiSectionRect.top >= 0 && kontaktaiSectionRect.top <= windowHeight;

  if (isTopInView) {
    return;
  } else if (navbarMenu.classList.contains('open')) {
    navbarMenu.classList.remove('open');
    menuOpen = false;
  }

  isScrolling = true;

  const higherOffset = kontaktaiSection.offsetTop - 100; // Adjust the offset as needed

  const initialScroll = window.pageYOffset;
  const distance = higherOffset - initialScroll;
  const duration = 1000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const easeInOutCubic = progress < duration ? easeInOutCubicFn(progress / duration) : 1;

    window.scroll(0, initialScroll + distance * easeInOutCubic);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      isScrolling = false;
    }
  }

  function easeInOutCubicFn(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  window.requestAnimationFrame(step);
}

// header buttons

const headerPagrindinisBtn = document.querySelector('.pagrindinis');

const headerApieBtn = document.querySelector('.apie');

const headerDukBtn = document.querySelector('.duk');

const headerKontaktaiBtn = document.querySelector('.kontaktai');

//  navbar buttons

const navbarPagrindinisBtn = document.querySelector('.first-section-btn');

const navbarApieBtn = document.querySelector('.second-section-btn1');

const navbarDukBtn = document.querySelector('.second-section-btn2');

const navbarKontaktaiBtn = document.querySelector('.second-section-btn3');

////////////////////////

const pagrBtnObserver = new IntersectionObserver((pagrEntries) => {
  pagrEntries.forEach((pagrEntry) => {
    if (pagrEntry.isIntersecting) {
      headerPagrindinisBtn.classList.add('pagrClick');
      navbarPagrindinisBtn.classList.add('first-section-btnClick');
    } else {
      headerPagrindinisBtn.classList.remove('pagrClick');
      navbarPagrindinisBtn.classList.remove('first-section-btnClick');
    }
  });
});

pagrBtnObserver.observe(pagrindinisSection);

const apieBtnObserver = new IntersectionObserver((apieEntries) => {
  apieEntries.forEach((apieEntry) => {
    if (apieEntry.isIntersecting) {
      headerApieBtn.classList.add('otherBtnStyles');
      navbarApieBtn.classList.add('otherBtnStyles');
    } else {
      headerApieBtn.classList.remove('otherBtnStyles');
      navbarApieBtn.classList.remove('otherBtnStyles');
    }
  });
});

apieBtnObserver.observe(apieSection);

const dukBtnObserver = new IntersectionObserver((dukEntries) => {
  dukEntries.forEach((dukEntry) => {
    if (dukEntry.isIntersecting) {
      headerDukBtn.classList.add('otherBtnStyles');
      navbarDukBtn.classList.add('otherBtnStyles');
    } else {
      headerDukBtn.classList.remove('otherBtnStyles');
      navbarDukBtn.classList.remove('otherBtnStyles');
    }
  });
});

dukBtnObserver.observe(dukSection);

const kontaktaiBtnObserver = new IntersectionObserver((kontaktaiEntries) => {
  kontaktaiEntries.forEach((kontaktaiEntry) => {
    if (kontaktaiEntry.isIntersecting) {
      headerKontaktaiBtn.classList.add('otherBtnStyles');
      navbarKontaktaiBtn.classList.add('otherBtnStyles');
    } else {
      headerKontaktaiBtn.classList.remove('otherBtnStyles');
      navbarKontaktaiBtn.classList.remove('otherBtnStyles');
    }
  });
});

kontaktaiBtnObserver.observe(kontaktaiSection);
/////////////////////////