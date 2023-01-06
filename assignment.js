const bodyRef = document.body;

const colorMapper = [
  { threshold: 1200, color: "gold" },
  { threshold: 700, color: "plum" },
  { threshold: 400, color: "skyblue" },
  { threshold: 0, color: "khaki" },
];

function updateBackgroundColor(windowInnerWidth) {
  colorMapper.forEach(element => {
    if (element.threshold < windowInnerWidth) {
      colorMapper
        .map(e => e.color)
        .forEach(color => bodyRef.classList.remove(color));
      bodyRef.classList.add(element.color);
      return;
    }
  });
  console.log(`${bodyRef.classList}`);
}

window.addEventListener("resize", event => {
  updateBackgroundColor(window.innerWidth);
});

updateBackgroundColor(window.innerWidth);
