// var orders = prompt("Welcome to Futures Fund Food Truck!\n How many orders do you want:");

// let j = 0;
// let condition = true;
// while(condition){
//   condition = j < 4;
//   console.log(j);
//   console.log(condition);
//   j++;
// }

// for( let i = 0; i < orders; i = i + 1){

//   console.log(`This is order number ${i+1}` );

//   var food = prompt("What is your order? You can pick from the following just type the number: \n 1.Crawfish & Ketchup \n 2. Water \n 3. Soup \n 4. Grits and Ketchup");

//   if (food == 1){
//     console.log("Crawfish and ketchup for you!");
//   }
//   else if (food == 2){
//     console.log('Here is your dasani');
//   }
//   else if (food == 3){
//     console.log('Tomato soup to go');
//   }
//   else {
//     console.log('Here is your grits and ketchup, disgusting!')
//   }

// }

function orderFunction(){
 var food = document.getElementById('orderNum').value;
  if (food == 1){
    document.getElementById('orderarea').innerHTML = "Crawfish and ketchup for you!";
  }
  else if (food == 2){
    document.getElementById('orderarea').innerHTML = 'Here is your dasani';
  }
  else if (food == 3){
    document.getElementById('orderarea').innerHTML = 'Tomato soup to go';
  }
  else {
    document.getElementById('orderarea').innerHTML = 'Here is your grits and ketchup, disgusting!'
  }
}

console.log("Your order was number " + orderFunction());

// function timesTwo(a){
//   var value = a * 2;
//   return value;
// }

// console.log("2 times 3 is " + timesTwo(3));


