function handleDPad(e) {
  console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      nav(-1);
      break;
    case "ArrowDown":
      nav(1);
      break;
    case "ArrowRight":
      nav(1);
      break;
    case "ArrowLeft":
      nav(-1);
      break;
    default:
      console.log("No where to go");
  }
}

function nav(move) {
  const currentIndex = document.activeElement.tabIndex;
  const next = currentIndex + move;
  const items = document.querySelectorAll(".navigationItem");
  const targetElement = items[next];
  try {
    targetElement.focus();
  } catch (error) {}
}

export default function useDPadNavigation() {
  document.activeElement.addEventListener("keydown", handleDPad);
}
