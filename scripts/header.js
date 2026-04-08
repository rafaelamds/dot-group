export function initLinesAnimation() {
  const paths = document.querySelectorAll(".lines-svg path");

  paths.forEach((path, index) => {
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.style.animation = "drawLine 3s ease forwards";
    path.style.animationDelay = `${index * 0.1}s`;
  });
}

export function initHeaderAnimation(element) {
  const container = element.querySelector(".header-container");
  if (!container) return;

  container.classList.add("animate");
}