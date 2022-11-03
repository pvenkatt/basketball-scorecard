let s1 = 0;
let s2 = 0;
let curr1 = document.getElementById("score1");
let curr2 = document.getElementById("score2");

function one1() {
  s1 = s1 + 1;
  curr1.innerText = s1;
}
function two1() {
  s1 = s1 + 2;
  curr1.innerText = s1;
}
function three1() {
  s1 = s1 + 3;
  curr1.innerText = s1;
}

function one2() {
  s2 = s2 + 1;
  curr2.innerText = s2;
}
function two2() {
  s2 = s2 + 2;
  curr2.innerText = s2;
}
function three2() {
  s2 = s2 + 3;
  curr2.innerText = s2;
}

function reset() {
  s1 = 0;
  s2 = 0;
  curr1.innerText = s1;
  curr2.innerText = s2;
}
