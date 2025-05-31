document.addEventListener("DOMContentLoaded", () => {
  const animations = document.querySelectorAll(".animation");

  const animateOnScroll = () => {
    animations.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.transform = "scale(1.05)";
        el.style.opacity = 1;
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  const form = document.querySelector(".hover-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      form.reset();
    });
  }
});
