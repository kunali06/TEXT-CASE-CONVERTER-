const textArea = document.getElementById("text");

document.getElementById("upper").addEventListener("click", () => {
  textArea.value = textArea.value.toUpperCase();
});

document.getElementById("lower").addEventListener("click", () => {
  textArea.value = textArea.value.toLowerCase();
});

document.getElementById("title").addEventListener("click", () => {
  const words = textArea.value.toLowerCase().split(" ");
  const titleCase = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
  textArea.value = titleCase;
});

document.getElementById("clear").addEventListener("click", () => {
  textArea.value = "";
});
