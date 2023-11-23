// clear, plus, minus, divide, multiplication, equal, delete, numbers
let result = "";
const display = document.querySelector("#display");

const one = document.querySelector("#one");
one.addEventListener("click", () => {
  console.log("clicked");
  result += 1;
  console.log(result);
  display.value = result;
});

const two = document.querySelector("#two");
two.addEventListener("click", () => {
  console.log("clicked");
  result += 2;
  console.log(result);
  display.value = result;
});
const three = document.querySelector("#three");
three.addEventListener("click", () => {
  console.log("clicked");
  result += 3;
  console.log(result);
  display.value = result;
});
const four = document.querySelector("#four");
four.addEventListener("click", () => {
  console.log("clicked");
  result += 4;
  console.log(result);
  display.value = result;
});
const five = document.querySelector("#five");
five.addEventListener("click", () => {
  console.log("clicked");
  result += 5;
  console.log(result);
  display.value = result;
});
const six = document.querySelector("#six");
six.addEventListener("click", () => {
  console.log("clicked");
  result += 6;
  console.log(result);
  display.value = result;
});
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
  console.log("clicked");
  result += 7;
  console.log(result);
  display.value = result;
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
  console.log("clicked");
  result += 8;
  console.log(result);
  display.value = result;
});
const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
  console.log("clicked");
  result += 9;
  console.log(result);
  display.value = result;
});
const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  console.log("clicked");
  result += 0;
  console.log(result);
  display.value = result;
});
const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  console.log("clicked");
  result += "+";
  console.log(result);
  display.value = result;
});
const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
  console.log("clicked");
  result += "-";
  console.log(result);
  display.value = result;
});
const multiplier = document.querySelector("#multiplier");
multiplier.addEventListener("click", () => {
  console.log("clicked");
  result += "*";
  console.log(result);
  display.value = result;
});
const divider = document.querySelector("#divider");
divider.addEventListener("click", () => {
  console.log("clicked");
  result += "/";
  console.log(result);
  display.value = result;
});
const equal = document.querySelector("#equal");
equal.addEventListener("click", function () {
  result = eval(result);
  display.value = result;
  result = "";
});
const c = document.querySelector("#c");
c.addEventListener("click", function () {
  result = "";
  display.value = result;
});
