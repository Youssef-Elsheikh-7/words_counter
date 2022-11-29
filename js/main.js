let inputText = document.getElementById("text-input");
let count = document.getElementById("count");
let reset = document.getElementById("reset");
let countCh = document.getElementById("countChar");

inputText.oninput = function (text) {
  text = inputText.value;
  if (inputText.value === undefined) {
    count.innerHTML = 0;
    countCh.innerHTML = 0;
  }
  regExFin = text.match(/(\w+)/gi);
  let wordCount = regExFin.length;
  let charCount = text.match(/./gi).length;
  countCh.innerHTML = charCount;
  count.innerHTML = wordCount;
};

reset.onclick = function () {
  inputText.value = "";
  count.innerHTML = 0;
  countCh.innerHTML = 0;
};
