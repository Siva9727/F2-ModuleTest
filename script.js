pic1 = document.getElementById('pic1');
pic2 = document.getElementById('pic2');
pic3 = document.getElementById('pic3');
pic4 = document.getElementById('pic4');

pic4.style.pointerEvents = 'none';
pic3.style.pointerEvents = 'none';
pic2.style.pointerEvents = 'none';
const bt = document.getElementById('f');
bt.style.pointerEvents = 'none';

let a = [];

function p1c() {
  fr();
}

function p2c() {
  const f = document.querySelector('.form2');
  f.style.display = 'flex';
  dp();
}

function dp() {
  const p1 = document.getElementById('n');
  p1.innerText = a[0].name;
  const p3 = document.getElementById('u');
  p3.innerText = a[0].username;
  pic3.style.pointerEvents = 'auto';
  pic2.style.pointerEvents = 'none';
}

function p3c() {
  const f2 = document.querySelector('.form2');
  f2.style.display = 'none';
  f2.onlclick = 'none';
  const f3 = document.querySelector('.form3');
  f3.style.display = 'flex';
}

function fr() {
  const f = document.querySelector('.form1');
  f.style.display = 'flex';
}

function sb() {
  const f1 = document.getElementById('f1').value;
  const f2 = document.getElementById('f2').value;
  const f3 = document.getElementById('f3').value;

  ValidateEmail(f1, f2, f3);
}

function ValidateEmail(f1, f2, f3) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (f2.match(validRegex)) {
    check(f1, f2, f3);

    return true;
  } else {
    alert('Invalid email address!');

    document.form1.text1.focus();

    return false;
  }
}

function check(f1, f2, f3) {
  if (
    f1.length == 0 ||
    f1 == null || f3.length == 0 || f3 == null ||
    (f1 == '' && f2.length == 0 && f3.length == 0)
  ) {
    console.log('o');
  } else {
    a.push({ name: f1, email: f2, username: f3 });
    console.log(a[0].name);
    const f = document.querySelector('.form1');
    f.style.display = 'none';
    pic1.onclick = 'none';
    pic2.style.pointerEvents = 'auto';
    pic1.style.pointerEvents = 'auto';
  }
}

let i = 0;
let m = [];

function p4c() {
  const f3 = document.querySelector('.form3');
  f3.style.display = 'none';
  pic4.onclick = 'none';
  const f4 = document.querySelector('.form4');
  f4.style.display = 'flex';
  const g = document.getElementById('g');
  i = iiid(12);
  g.innerText = i;
  pic1.style.pointerEvents = 'none';
  pic2.style.pointerEvents = 'none';
  pic3.style.pointerEvents = 'none';
  pic4.style.pointerEvents = 'none';
}

function iiid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

let k = 0;

function tr() {
  if (k <= 0) {
    const f4 = document.querySelector('.form3');
    f4.style.display = 'none';
    pic2.style.pointerEvents = 'auto';
    const f2 = document.getElementById('try');
    f2.style.display = 'none';
    const e = document.getElementById('e');
    e.innerText = '';
    i = 0;
    const bt = document.getElementById('f');
    bt.style.pointerEvents = 'none';
    m = [];
    k += 1;
  } else {
    const f4 = document.querySelector('.form3');
    f4.style.display = 'none';
    f4.style.pointerEvents;
    const f5 = document.querySelector('.form5');
    f5.style.display = 'flex';
  }
}

function d() {
  if (i <= 2) {
    r = Math.floor(Math.random() * 6) + 1;
    const e = document.getElementById('e');
    e.innerText = r;
    m.push(r);
    i += 1;
  }
  const bt = document.getElementById('f');
  bt.style.pointerEvents = 'auto';
}

function f() {
  t = m[0] + m[1] + m[2];
  const e = document.getElementById('e');
  e.innerText = `Total = ${t}`;
  if (t >= 10) {
    pic4.style.pointerEvents = 'auto';
  } else {
    const f2 = document.getElementById('try');
    f2.style.display = 'flex';
  }
}
