const inputs = document.querySelectorAll("input");
var base = document.querySelector(".base");
var spacing = document.querySelector(".spacing");
var blur = document.querySelector(".blur");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
