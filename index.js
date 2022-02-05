
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// };

let doc = document
// ================= Задача #2 ===================
let day = doc.querySelector('.day')
time = doc.querySelector('.time-now')


now = new Date()
second = now.getSeconds()
milliseconds = now.getMilliseconds()
date = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

if (milliseconds > 99) {
   milliseconds = String(milliseconds).substring(0, 2)

}

var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

day.innerHTML = `Сегодня ${days[now.getDay()]}`
time.innerHTML = `Текущее время : <br \/>
${date} : ${second < 10 ? '0' + second : second} : ${milliseconds}`


// =================== Задача #2/2 ====================

const reverseNumber = () => {
   let input = doc.querySelector('.task-two-two').value
   input = String(input)
   input = Array.from(input).reverse().join('')
   return console.log(input);

}

// =================== Задача #2/3 ====================
function factorial() {
   let input = doc.querySelector('.task-two-three').value
   input = Number(input)
   let factorial = 1;
   for (let i = 1; i < input + 1; i++) {
      factorial *= i
   }
   return console.log(factorial);;
}

// =================== Задача #2/4 ====================

const letterCheck = () => {
   let input = doc.querySelector('.task-two-four').value.substring(0, 1)

   if (input == input.toUpperCase()) {
      console.log('string is upper case');
   } else {
      console.log('string is lower case');
   }
}

// =================== Задача #2/5 ====================


let myColor = ["Красный", "Зеленый", "Белый", "Черный"];

function concatenateStrings() {
   return console.log(myColor.join(", "));

}

// =================== Задача #2/6 ====================

const month_name = (dt) => {
   let arrayMonth =
      ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   return console.log(arrayMonth[dt.getMonth()]);
};
let monthNameBtn = doc.querySelector('.month_name')

monthNameBtn.addEventListener('click', () => {
   let input = doc.querySelector('.input-two-six').value
   month_name(new Date(input))

})

// =================== Задача #2/7 ====================

function largerNumber() {
   let inputOne = doc.querySelector('.task-two-three-input').value
   let inputTwo = doc.querySelector('.task-two-three-input-two').value
   if (inputOne > inputTwo) {
      return console.log(inputOne);
   } else {
      return console.log(inputTwo);
   }

}

// =================== Задание 1 =======================
function taskOne() {
   let string = doc.querySelector('#string-1').textContent
   string2 = doc.querySelector('#string-2').textContent
   string3 = doc.querySelector('#string-3').textContent
   string4 = doc.querySelector('#string-4').textContent
   string5 = doc.querySelector('#string-5').textContent
   string6 = doc.querySelector('#string-6').textContent

   return console.log(`
                       ${string3}
                       ${string5} 
                       ${string2} 
                       ${string6} 
                       ${string4} 
                       ${string} 
                       `);
   }


// =================== Задание 2 =======================

function taskTwo() {
   let elements = doc.querySelectorAll('.element')
   elements = Array.from(elements)

   for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (i <= 2) {
         element.style.color = 'red'

      } else {
         element.style.color = 'green'
      }


   }
}


// =================== Задание 3 =======================

let ol = doc.querySelector('#todo-list')

var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];


function renderTodo() {

   tasks.map(todo => {
      let li = doc.createElement('li')
      li.className = 'task'
      li.innerHTML = todo
      ol.append(li)
   })
}

// ===========================  Задание 4  ==================

function taskFour() {
   let p = doc.querySelectorAll('article p')

   for (let i = 0; i < p.length; i++) {
      const element = p[i];
      element.insertAdjacentHTML('afterend', '<hr/>');
   }
}


// =================== Задание 5 =======================

function taskFive() {
   let newText = doc.createTextNode("Canned Fish");
   let cart = doc.getElementById('cart-items');
   cart.children[1].remove();
   cart.replaceChild(newText, cart.children[3]);
}



function taskSix() {
   let ul = doc.querySelector('.todo-task');



   while (true) {
      let newTodo = prompt("Введите задачу");


      if (newTodo === null || newTodo === '') {
         break;
      } else {
         let li = doc.createElement('li');
         li.appendChild(doc.createTextNode(newTodo));
         ul.appendChild(li);
      }
   }
}




function myFace() {
   let c = document.getElementById("mycanvas");
   let draw = c.getContext("2d");
   draw.fillStyle = "green"
   draw.arc(75, 75, 50, 0, Math.PI * 2, true);
   draw.closePath();
   draw.fill();
}
function myEye() {
   var c = document.getElementById("mycanvas");
   var eye = c.getContext("2d");
   eye.moveTo(55, 50);
   eye.beginPath();
   eye.fillStyle = "black";
   eye.arc(60, 60, 4, 0, Math.PI * 2, true);
   eye.closePath();
   eye.fill();
   eye.moveTo(103, 49)
   eye.beginPath();
   eye.fillStyle = "black";
   eye.arc(90, 60, 4, 0, Math.PI * 2, true);
   eye.closePath();
   eye.fill();
}
function mySmile() {
   var c = document.getElementById("mycanvas");
   var smile = c.getContext("2d");
   smile.moveTo(105, 75);

   smile.strokeStyle = "black";
   smile.arc(75, 75, 30, 0, Math.PI, false);
   smile.stroke();
}
function bodyLoad() {
   myFace();
   myEye();
   mySmile();
}


















