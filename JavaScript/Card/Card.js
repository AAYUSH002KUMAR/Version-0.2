const card = document.createElement('div');
card.style.height = '400px';
card.style.width = '400px';
card.style.border = "2px solid black";
card.style.borderRadius = "10px 10px 0 0";

const image = document.createElement('img');
image.scr = '/Assets/myTmg.jpeg';
image.style.height = '200px'
image.style.width = '200px'
image.style.borderRadius = '10px 10px 0 0';

const heading = document.createElement('h2');
heading.innerText('Aayush Kumar');

const paragraph = document.createElement('p');
paragraph.innerText("I am a Student of B.tech");

card.append(image);
card.append(heading);
card.append(paragraph);