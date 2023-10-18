const num1 = document.getElementById("btnNum1");
const num2 = document.getElementById("btnNum2");
const num3 = document.getElementById("btnNum3");
const btnNumaddzero = document.getElementById("btnNumaddzero");
const btnNumaddzeroTow = document.getElementById("btnNumaddzeroTow");
const num4 = document.getElementById("btnNum4");
const swi = document.getElementById("switch");
const btnNumaddze = document.getElementById("btnNumaddze");
const body = document.getElementById("body");
const num5 = document.getElementById("btnNum5");
const num6 = document.getElementById("btnNum6");
const flexContainer = document.getElementById("flex-container");
const num7 = document.getElementById("btnNum7");
const num8 = document.getElementById("btnNum8");
const num9 = document.getElementById("btnNum9");
const btnOprationAdd = document.getElementById("btnOprationAdd");
const btnOprationNegtive = document.getElementById("btnOprationNegtive");
const btnOprationzar = document.getElementById("btnOprationzar");
const btnOprationtagh = document.getElementById("btnOprationtagh");
const result = document.getElementById("result");
const btnsub = document.getElementById("btnsub");
btnOprationNegtive.addEventListener("click", () => {
  result.value += btnOprationNegtive.innerText;
});

btnOprationAdd.addEventListener("click", () => {
  result.value += btnOprationAdd.innerText;
});

btnOprationzar.addEventListener("click", () => {
  result.value += btnOprationzar.innerText;
});

btnOprationtagh.addEventListener("click", () => {
  result.value += btnOprationtagh.innerText;
});
btnNumaddzero.addEventListener("click", () => {
  result.value += btnNumaddzero.innerText;
});
btnNumaddzeroTow.addEventListener("click", () => {
  result.value += btnNumaddzeroTow.innerText;
});
num1.addEventListener("click", () => {
  result.value += num1.innerText;
});
num2.addEventListener("click", () => {
  result.value += num2.innerText;
});
num3.addEventListener("click", () => {
  result.value += num3.innerText;
});
num4.addEventListener("click", () => {
  result.value += num4.innerText;
});
num5.addEventListener("click", () => {
  result.value += num5.innerText;
});
num6.addEventListener("click", () => {
  result.value += num6.innerText;
});
num7.addEventListener("click", () => {
  result.value += num7.innerText;
});
num8.addEventListener("click", () => {
  result.value += num8.innerText;
});
num9.addEventListener("click", () => {
  result.value += num9.innerText;
});
btnNumaddze.addEventListener("click", () => {
  result.value += btnNumaddze.innerText;
});
btnsub.addEventListener("click", () => {
  result.value = eval(result.value);
});
swi.addEventListener("click", () => {
  body.classList.toggle("body-light");
  flexContainer.classList.toggle("flex-container-light");
  num1.classList.toggle("btn-light");
  btnNumaddze.classList.toggle("btn-light");
  num2.classList.toggle("btn-light");
  num3.classList.toggle("btn-light");
  num4.classList.toggle("btn-light");
  num5.classList.toggle("btn-light");
  num6.classList.toggle("btn-light");
  num7.classList.toggle("btn-light");
  num8.classList.toggle("btn-light");
  num9.classList.toggle("btn-light");
  btnNumaddzeroTow.classList.toggle("btn-light");
  btnOprationzar.classList.toggle("btn-light");
  btnOprationAdd.classList.toggle("btn-light");
  btnOprationNegtive.classList.toggle("btn-light");
  result.classList.toggle("display-light");
  btnNumaddzero.classList.toggle("btn-light");
  btnsub.classList.toggle("btn-light");
  btnOprationtagh.classList.toggle("btn-light");
});
