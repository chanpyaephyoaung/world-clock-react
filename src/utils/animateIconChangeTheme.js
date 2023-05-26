export default function animateIconChangeTheme(option) {
  const { counter } = option;
  const [line1, line2, line3] = option.elements;
  if (counter === -1) {
    line1.style.left = "50%";
    line2.style.left = "50%";
    line2.style.transform = "translate(-50%, -50%) rotate(0)";
    line3.style.left = "50%";
    line3.style.opacity = "0";
    line3.style.transform = "translate(-50%, -50%) rotate(0)";
  }
  option.updateCounter();
  if (counter === 1) {
    line3.style.opacity = "0";
    line1.style.left = "43%";
    line2.style.left = "57%";
  } else if (counter === 2) {
    line3.style.opacity = "1";
    line1.style.left = "36%";
    line2.style.left = "64%";
  } else if (counter === 3) {
    line3.style.transform = "translate(-50%, -50%) rotate(-15deg)";
    line3.style.left = "43%";
    line2.style.transform = "translate(-50%, -50%) rotate(15deg)";
    option.resetCounter();
  }
}
