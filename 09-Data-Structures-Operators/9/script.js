'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startor, main) {
    return [this.categories[startor], this.mainMenu[main]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ time, address, startor, main }) {
    console.log(
      `Ordered Received ${this.categories[startor]} and ${this.mainMenu[main]} at Address ${address} Time ${time}Am`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicius Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};
// spread operator(...)
const arr = [3, 4, 5];
const NewBadArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(NewBadArr);

// Now here by using the spread operator show we can get all the elements or index at the same time without writing it manually.
const goodArr = [1, 2, ...arr];
// here in the below we did not use the spread operator then we get the array inside the array as array to get proper guardlines see the Output.
const goodarr = [1, 2, arr];
// console.log(goodArr, goodarr);

// if we went to get the individual value of the array mean we get the values out side the array.
// console.log(...goodArr);

// Here samply we create a new array in below and add the new element inside it. the spread operator work as the desturing of the array here it can not create the new the array.
// const newMein = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMein);

// now here we learn the how to merge two array together spread oprator and to how create shallow copy of the array.

// fisrt here we create a shallow copy of the resturet.mainMenu array.
const mainManuCopy = [...restaurant.mainMenu];
// console.log(mainManuCopy);

// merging the two array.
const manu = [1, 2, 3, 4];
const startor1 = [...restaurant.mainMenu, ...manu];
// console.log(startor1);

// iterables:array,string,map or sets. Not Objects means see out of the below.
const str = 'Hamid Ali';
const letter = [...str, ' ', 'S'];
// here we canconvert string single element into individual sperate elements by using the spread operator.

// inside the templates iterals we can not use the spread oprator becuse there they accept only single value.like as below. or we get the syntex error or unexpected token... .
// console.log(`${...str}`);

// show we can only use the spread operator only went we need to get the multiples arrguments in the function. or when we went to merge the two or more array or wents to make shallow copy or when to build the new array.

// console.log(letter);

// now here we write own function that accepts the multiples arrguments with the spread oprator.

// here we the muliples inputs from the user and store in inside the ingredients array and then we convert the array all elements into individuals elements to pass as the arguements.

// Real World Examples
// const ingredients = [
//   prompt("Let's make pasta ingredients 1?,"),
//   prompt('ingredients 2?'),
//   prompt('Ingredients 3?'),
// ];
// console.log(...ingredients);
//
// restaurant.orderPasta(...ingredients);

// we can use the spread operator with objects and but object not Iterables and after es2018 we can use the objects with the spread operator here we has the Examples.

const NewResturents = {
  Founder: 'Hamid_Ali',
  ...restaurant,
  FounderYear: 1999,
};
console.log(NewResturents);

// we can also create the shallow copy with the spread operator.if we did not create the copy then we can change the both objects here we create the copy of the object and we get the differents Names.
const resturentsCopy = { ...restaurant };

resturentsCopy.name = 'Hamid ALi';
console.log(resturentsCopy.name);
console.log(restaurant.name);
// const arr = [2, 3, 4];

// Array destructing.
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// desturturing array from right hand side. There is always need to set the const or let to declate the variable.Here we just destruturing the array means the unpacking the array not desturb or damage thex
// const [x, y, z] = arr;

// console.log(`a = ${a},b = ${b},c = ${c},x = ${x},y = ${y},z = ${z}`);
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// if the user like to change the second into first and the first on the second place with out destructuring. see below.

// create a variable like temporay as temp.
// const temp = first;
// first = second;
// second = temp;

// now with out temp variable.
// [first, second] = [second, first];
// console.log(first, second);

// by using the function inside the array getting the data or destructing the array.
// console.log(restaurant.order(2, 0));

// receive 2 retrun value from functions.
// const [satarter, maincourse] = restaurant.order(2, 0);
// console.log(satarter, maincourse);

// const nested = [2, 3, [5, 4]];
// const [i, , j] = nested;
// console.log(i, j);

// This is the nested destructuring means destructuring inside the destructuring.
// const [e, , [f, g]] = nested;
// console.log(e, f, g);
// console.log(`A=${e},b=${f},c=${g},i=${i},j=${j}`);

// default Values
// const [p = 1, q = 1, r = 1] = [3, 4];
// console.log(p, q, r);

//
//
//
// Destructing the Objects:
//
//
//

// To destructing the object we use the curly Braces. because this is how we create the object.

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// this the fundamental to retrive the data from object.

// if we like to use the name as reference of the property of the object.
// const {
//   name: ResturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(ResturantName, hours, tags);

// Default Values in objects.

// const {
//   menu = [
//     /*This is default value from the property that not exact*/
//   ],
//   menua
/*If we did not provide the default value to undefined property so they show us the undefine*/
// ,
// starterMenu:
/*Here we rename the property according to us with default value that show us on the time when we do'n have the value.*/
//     starters = [],
// } = restaurant;
// console.log(menu, starters, menua);

// Mutating the Variable in the objects.

// let a = 999;
// let b = 111;
// const obj = { a: 20, b: 15, c: 12 };
// if here i use the let in place of the const after the obj object to destructur the object they provide me the error and if i use the let then they generate the new variable. so we get the solution to rap in side the brackets.
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const { fri } = openingHours;
// console.log(fri);

// Nested inside Nested.

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const {
// here we rename the property of the object(open into o and close into c).
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//   main: 2,
//   startor: 1,
//   time: '20:30',
//   address: 'NadraNarowalPakistan',
// });
