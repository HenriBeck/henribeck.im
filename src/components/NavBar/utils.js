// @flow

export function scrollToSection(name: string) {
  const section = document.querySelector(`section[data-name="${name}"]`);

  if (section) {
    window.scrollBy({
      top: section.getBoundingClientRect().top - 0.2 * window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
