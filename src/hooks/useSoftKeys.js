export const softkeyCallback = {
  left: function () {
    console.log("You click on SoftLeft");
  },
  center: function () {
    console.log("You click on Enter");
  },
  enter: function () {
    console.log("You click on Enter");
  },
  backspace: function () {
    console.log("You click on Enter");
  },
  right: function () {
    console.log("You click on SoftRight");
  },
  arrowRight: function () {
    console.log("You click on SoftRight");
  },
  arrowUp: function () {
    console.log("You click on SoftRight");
  },
  arrowDown: function () {
    console.log("You click on SoftRight");
  },
  arrowLeft: function () {
    console.log("You click on SoftRight");
  },
};
function handleKeyDown(evt) {
  switch (evt.key) {
    case "SoftLeft":
      // Action case press left key
      softkeyCallback.left();
      break;

    case "SoftRight":
      // Action case press right key
      softkeyCallback.right();
      break;
    case "ArrowRight":
      // Action case press right key
      softkeyCallback.arrowRight();
      break;
    case "ArrowLeft":
      // Action case press right key
      softkeyCallback.arrowLeft();
      break;
    case "ArrowDown":
      // Action case press right key
      softkeyCallback.arrowDown();
      break;
    case "ArrowUp":
      // Action case press right key
      softkeyCallback.arrowUp();
      break;
    case "Backspace":
      // Action case press right key
      softkeyCallback.backspace();
      break;
    case "Enter":
      // Action case press center key
      softkeyCallback.enter();
      break;
    default:
      break;
  }
}

export function useSoftKeys({ softkeyCallback }) {
  document.addEventListener("keydown", (event) =>
    handleKeyDown(event, softkeyCallback)
  );
}
