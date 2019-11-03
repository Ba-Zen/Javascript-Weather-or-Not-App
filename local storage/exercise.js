// store data in local storage
localStorage.setItem('name', 'barry');
localStorage.setItem('age', 50);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);

// updating data
localStorage.setItem('name', 'bazen');
localStorage.age = '26';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// deleting data
//localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name, age);

localStorage.clear();
console.log(name, age);

// store array - JSON to parsed

const todos = [
  { text: 'play games', author: 'harry' },
  { text: 'play chess', author: 'larry' },
  { text: 'play myself', author: 'barry' }
];

//console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');
console.log(JSON.parse(stored));
