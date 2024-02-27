const DEFAULT_NAME = 'TULASI';

const sayHello = (name) => {
  console.log('Hi ' + name);
};

// sayHello('parth');

const sayHello1 = (greeting , name = DEFAULT_NAME) => {
  console.log(`${greeting}, My name is ${name} `);
};

const sayHello2 = () =>{
  console.log('Hey, my name is Parth!');
};

const sayHello3 = (greeting , name) => {
  return(`${greeting}, je ma'pelle ${name} `);
};

sayHello('Parth' );
sayHello1('Namaste');
sayHello2();
console.log(sayHello3('Bonjour','Parth'));

// const cb = () => {
//  alert('INVALID INPUT');
// }

// const checkInput = (...strings) => {
//   if(!strings.length){
//     cb();
//   }
//   for(let string of strings){
//     if(!string){
//       cb();
//     }
//   }
// };

// checkInput('buiq','buiq', '', 'buiq', 'buiq', 'buiq', 'buiq',);

const checkInput = (cb, ...strings) => {
  let isTextEmpty = false;

  for(let text of strings){
    if(!text){
      isTextEmpty = true;
      break;
    }  
  }
  if(!isTextEmpty){
     cb();
  }
}

checkInput( () => {
console.log('ALL NOT EMPTY');
}, '', 'prasad', 'tulasi', 'praneeth');