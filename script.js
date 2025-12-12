// Scroll-based fade-in for sections
const sections = document.querySelectorAll("[data-scroll]");

function handleScroll() {
  const trigger = window.innerHeight * 0.8;

  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();

// Parallax lag for background accents
const accents = document.querySelectorAll(".accent");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  accents.forEach((acc, index) => {
    const depth = 0.1 + index * 0.06; // slightly different speeds
    const offset = scrollY * depth;
    acc.style.transform = `translateY(${offset}px)`;
  });
});
