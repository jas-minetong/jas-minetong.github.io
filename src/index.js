let variables = "owo";
variables = "uwu";

const owo = "owo";
owo = "uwu"; // Give you an error

function add(a, b) {
  let owo = a;
  return owo + b;
}

const add2 = (a, b) => {
  let owo = a;
  return owo + b;
};

/*
const add2 = function (a, b) {
  let owo = a;
  return owo + b;
}
*/


if (true === true) {

} else if (true !== false) {

} else {

}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

const list = [0, 1, 2, 3];
for (let item of list) {
  console.log(item);
}
list.forEach(item => {
  console.log(item);
});

// true OR false AND false
let math = (true || false) && false;
