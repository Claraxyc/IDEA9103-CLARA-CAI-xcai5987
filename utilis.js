let rectangle = document.getElementById('myRectangle');

console.log(rectangle);

rectangle.setAttribute("height", "350");

let r = Math.round(0.5* 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);
rectangle.setAttribute('fill', `rgb(${r}, ${g}, ${b})`
);

const svg = document.getElementById("base_svg");
console.log(svg);

const circleQuan = document.getElementById('Quan');
console.log(Quan);

let r1 = Math.round(Math.random() * 255);
let g1 = Math.round(Math.random() * 255);
let b1 = Math.round(Math.random() * 255);
console.log(`rgb(${r1}, ${g1}, ${b1})`);

circleQuan.setAttribute('fill', `rgb(${r1},${g1},${b1})`);


const circleNewQuan = document.getElementById('NewQuan');
console.log(NewQuan);

let r2 = Math.round(Math.random() * 255);
let g2 = Math.round(Math.random() * 255);
let b2 = Math.round(Math.random() * 255);
console.log(`rgb(${r1}, ${g1}, ${b1})`);

circleNewQuan.setAttribute('fill', `rgb(${r2},${g2},${b2})`);



const circleNewQuan1 = document.getElementById('NewQuan1');
console.log(NewQuan1);

let r3 = Math.round(Math.random() * 255);
let g3 = Math.round(Math.random() * 255);
let b3 = Math.round(Math.random() * 255);
console.log(`rgb(${r3}, ${g3}, ${b3})`);

circleNewQuan1.setAttribute('fill', `rgb(${r3},${g3},${b3})`);



const circleNewQuan2 = document.getElementById('NewQuan2');
console.log(NewQuan2);

let r4 = Math.round(Math.random() * 255);
let g4 = Math.round(Math.random() * 255);
let b4 = Math.round(Math.random() * 255);
console.log(`rgb(${r4}, ${g4}, ${b4})`);

circleNewQuan2.setAttribute('fill', `rgb(${r4},${g4},${b4})`);


