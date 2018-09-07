// @flow strict-local

// This is needed for server side rendering because window will not be defined on the server
const offsetTop = typeof window === 'undefined' ? 0 : window.innerHeight * 0.15;
const offsetBottom = typeof window === 'undefined' ? 0 : window.innerHeight * 0.75;
const maxViewport = typeof window === 'undefined' ? 0 : window.innerHeight * 0.6;

function scrollToSection(name: string) {
  const section = document.querySelector(`section[data-name="${name}"]`);

  if (section) {
    window.scrollBy({
      top: section.getBoundingClientRect().top - 0.2 * window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}

const defaultSection = {
  calculatedSpace: 0,
  section: null,
};

function getCurrentSection(sections: $ReadOnlyArray<HTMLElement>) {
  return sections.reduce((currentSection, section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top > offsetBottom || rect.bottom < offsetTop) {
      return currentSection;
    }

    const top = Math.max(offsetTop, rect.top);
    const bottom = Math.min(offsetBottom, rect.bottom);
    const calculatedSpace = (bottom - top) / maxViewport;

    if (calculatedSpace > currentSection.calculatedSpace) {
      return {
        calculatedSpace,
        section,
      };
    }

    return currentSection;
  }, defaultSection);
}

export {
  scrollToSection,
  getCurrentSection,
};
