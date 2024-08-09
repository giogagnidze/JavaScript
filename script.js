// variable = A container that stores a value.
//            Behaves as if it were the value it contains

// 1. declaration     let x;
// 2. assigment       x = 100;

// x = 100;
// console.log(x)

// let age = 25;
// let price = 10.99;
// let gpa = 2.1

// console.log(`You are ${age} years old`)
// console.log(`the price is $${price}`)
// console.log(`Your gpa is: ${gpa}`)

// let firstName = "Giorgi"

// console.log(typeof firstName)  // display type of fristName
// console.log(`your name is ${firstName}`)


// let online = true

// console.log(typeof online)  //boolean
// console.log(`Bro is online: ${online}`)


// let fullName = "Giorgi Gagnidze"
// let age = 15
// let isStudent = true

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `your age is ${age}`;
// document.getElementById("p3").textContent = `enrolled: ${isStudent}`;










// arithmetic operators = operands  (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;


// let students = 30;

// students = students + 1
// students = students - 1
// students = students * 2
// students = students / 2
// students = students ** 2
// students = students % 2

// students += 1
// students -= 1
// students *= 2
// students /= 2
// students **= 2
// students %= 2

// students++
// students--

// console.log(students)


/* 
    operator precedence
    1. paranthesis ()
    2. exponents
    3. multiplication & devision & modulo
    4. addition & subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2

// console.log(result)















// How to accept user input

// 1. EASY WAY = windows prompt
// 2. PROFESSIONAL WAY = HTML textbox


// let username = window.prompt("whats your name? ")
// console.log(username)

// let username;

// document.getElementById("mybtn").onclick = function(){
//     username = document.getElementById("mytxt").value;
//     console.log(username)
//     document.getElementById("myh1").textContent = `Hello ${username}`

// }











// type conversion = change the datatype of a value to another
//                   (string, numeber, booleans)

// let age = window.prompt("How old are you")
// age = Number(age) // making the age variable as int
// age += 1

// console.log(age, typeof age)



// circle radius

// const PI = 3.14159;
// let radius;
// let circumferance;


// document.getElementById("mybtn").onclick = function() {
//     radius = document.getElementById("mytxt").value;
//     radius = Number(radius)
//     circumferance = 2 * PI * radius
//     document.getElementById("myh3").textContent = circumferance + "cm"
// }









// COUNTER PROGRAM 

// const decreaseBtn = document.getElementById("decreaseBtn")
// const resetBtn = document.getElementById("resetBtn")
// const increaseBtn = document.getElementById("increaseBtn")
// const countLabel = document.getElementById("countLabel")
// let count = 0

// increaseBtn.onclick = function() {
//     count++
//     countLabel.textContent = count
// }
// decreaseBtn.onclick = function () {
//     count--
//     countLabel.textContent = count
// }
// resetBtn.onclick = function () {
//     count = 0
//     countLabel.textContent = count
// }



// Math = built-in object provides a
//        collection of properties and methods

// console.log(Math.PI)
// console.log(Math.E)

// let x = 3.21
// let y = 2
// let z;

// z = Math.round(x)
// z = Math.floor(x)
// z = Math.ceil(x)
// z = Math.trunc(x)
// z = Math.pow(x)
// z = Math.scrt(x)
// z = Math.log(x)
// z = Math.sin(x)
// z = Math.cos(x)
// z = Math.tan(x)
// z = Math.abs(x)
// z = Math.sign(x)
// let max = Math.max(x, y, z)
// let min = Math.min(x, y, z)







//RANDOM NUMBER GENERATOR

// const mybtn = document.getElementById("mybtn")
// const mylabel = document.getElementById("mylabel")
// const min = 1
// const max = 6
// let randomNum

// mybtn.onclick = function() {
//     randomNum = Math.floor(Math.random() * max) + min
//     mylabel.textContent = randomNum
// }















// IF STATMENTS = if a condition is true, excute some code
//                if not, do something else


// let age = 12

// if(age >= 18) {
//     console.log("You are old enough to enter this site")
// }
// else{
//     console.log("You must be 18+ to enter this site")
// }


// let time = 9

// if(time < 12){
//     console.log("Good morning")
// }
// else{
//     console.log("Good afternoon")
// }


// let isStudent = true

// if (isStudent){
//     console.log("you are a student")
// }
// else{
//     console.log("you are not a student")
// }

// let age = 19
// let hasLicense = false

// if(age >= 18){
//     console.log("You are old enough to drive")

//     if(hasLicense){
//         console.log("You have your license")
//     }
//     else{
//         console.log("You do not have your license yet")
//     }
// }
// else{
//     console.log("You must be 18+ to have a license")
// }




// const mytxt = document.getElementById("mytxt")
// const mybtn = document.getElementById("mybtn")
// const result = document.getElementById("result")
// let age 

// mybtn.onclick = function() {

//     age = mytxt.value;
//     age = Number(age)

//     if(age >= 18){
//         result.textContent = `You are old enough to enter this site`
//     }
//     else if(age == 0){
//         result.textContent = `you can't enter. you were just born`
//     }
//     else if(age < 0){
//         result.textContent = `Your age can't be below 0`
//     }
//     else if(age >= 100){
//         result.textContent = `You are too old to enter this site`
//     }
//     else{
//         result.textContent = `you must be 18+ to enter this site`
//     }
// }














// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

// const myCheckBox = document.getElementById("mycheckbox")
// const visaBtn = document.getElementById("visabtn")
// const masterCard = document.getElementById("mastercard")
// const PayPal = document.getElementById("paypal")
// const mybtn = document.getElementById("mybtn")
// const result = document.getElementById("result")
// const payment = document.getElementById("payment")

// mybtn.onclick = function() {
//     if(myCheckBox.checked){
//         result.textContent = `You are subscribed`
//     }
//     else{
//         result.textContent = `You are not subscribed`
//     }

//     if(visaBtn.checked){
//         payment.textContent = `You are paying with Visa`
//     }
//     else if(masterCard.checked){
//         payment.textContent = `You are paying with MasterCard`
//     }
//     else if(PayPal.checked){
//         payment.textContent = `You are paying with PayPal`
//     }
//     else{
//         payment.textContent = `You must select a payment type`
//     }
// }











// ternary operator = a shortcut to if{} and else{} statments
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : CodeIfFalse

// bad way
// let agee = 21
// let messagee;

// if(age += 18){
//     messagee = "youre adult"
// }
// else{
//     messagee = "youre minor"
// }



// // good way
// let age = 21
// let message = age >= 18 ? "youre an adult" : "youre a minor"
// console.log(message)


// // თუ ასაკი მეტია ან ტოლი 18 ზე, ცვლად message ში შეინახება სტრინგი youre an adult, ხოლო წინააღმდეგ შემთხვევაში youre minor


// let time = 16;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon"
// console.log(greeting)


// let isStudent = true;
// let message1 = isStudent ? "you are a student" : "yyou are not a student"
// console.log(message1)


// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0
// console.log(`your total is ${purchaseAmount - purchaseAmount * (discount/100)}`) 












// SWITCH = can be an efficient replacement to many else if statmets

// let day = 1

// switch(day){
//     case 1: 
//         console.log(" it is monday") // if day == 1 console log monday
//         break
//     case 2:
//         console.log("it is tuesday")
//         break
//     case 3:
//         console.log("it is wednesday")
//         break
//     case 4:
//         console.log("it is thursday")
//         break
//     case 5:
//         console.log("it is friday")
//         break
//     case 6:
//         console.log("it is saturday")
//         break
//     case 7:
//         console.log("it is sunday")
//         break
//     default:  // no matching case
//         console.log(`${day} is not a day`)
//         break
// }



// let testScore = 92
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = "A"
//         break
// }
// console.log(letterGrade)
















// string methods = allow you to manipulate and work with text (strings)

// let userName = "TheCodeCrafter   "
// console.log(userName.charAt(0)) // first charachter of userName "T"
// console.log(userName.indexOf("C")) // calculating index of the "C"
// console.log(userName.lastIndexOf("C")) // calculating second "C" index
// console.log(userName.length) // same as len in py
// console.log(userName.trim()) // removing whitespaces from string
// console.log(userName.toUpperCase()) // making string uppercase
// console.log(userName.toLocaleLowerCase()) // making string lowercase
// console.log(userName.startsWith(" "))// გამოაქვს true ან false, თუ სტრინგში გვექნება space გამოიტანს true ს






// string slicing = creating a substring
//                  from a portion of another string
//                  string.slice(start,end)


// const fullName = "TheCodeCrafter"

// let firstName = fullName.slice(3, 7)
// let lastName = fullName.slice(-7)

// let firstChar = fullName.slice(0, 1)
// let lastChar = fullName.slice(-1)

// console.log(firstName)  // code
// console.log(lastName) // crafter



// GMAIL PROJECT
// const email = "giogagnidze@gmail.com"
// let username = email.slice(0, email.indexOf("@"))
// let extension = email.slice(email.indexOf("@"))
// console.log(username)
// console.log(extension)


















// Method Chaining = Calling one method after another
//                   in one conticuous line of code.



//  ----  NO METHOD CHAINING  ----
// let username = window.prompt("Enter your username: ")
// username = username.trim()   //romoving whitespaces

// let letter = username.charAt(0)  // taking first char from username
// letter = letter.toUpperCase() // making first char big

// let extaChar = username.slice(1)
// extaChar = extaChar.toLocaleLowerCase()
// username = letter + extaChar

// console.log(username)



//  ---- METHOD CHAINING ----
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()














//logical operators = used to combine or manipulate boolean values
//                    (true or false)

//                    and == &&
//                    or == ||
//                    not == !


// const temp = 30;

// if(temp > 0 && temp <= 30){
//     console.log("weather is good")
// }
// else{
//     console.log("the weather is bad")
// }

// if(temp > 0 || temp <= 30){
//     console.log("weather is good")
// }
// else{
//     console.log("the weather is bad")
// }

// const isSunny = true

// if(!isSunny){
//     console.log("it is cloudy")
// }
// else{
//     console.log("it is sunny")
// }



















//  = assigment operator
//  == comprasion operatorn (compare if value are equal)
//  === strict equalation opeartor (compare if value & datatype are equal)
//  != inequality operator
//  !== strict inequality operator


// const PI = 3.14

// if(PI == "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }
 

// if(PI === "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }


// if(PI != "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }


// if(PI !== "3.14"){
//     console.log("that is PI")
// }
// else{
//     console.log("that in not PI")
// }



















// while loop = repeat some code WHILE some condition is true


// let username = ""

// while(username === ""){
//     username = window.prompt(`enter your name`)
// }
// console.log(`hello ${username}`)


// let loggedIn = false
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`enter your username`)
//     password = window.prompt(`enter your password`)

//     if(username === "giorgi" && password === "gio123"){
//         loggedIn = true
//         console.log("you are logged in");
//     }
//     else{
//         console.log("invalid crendentials! please try again");
//     }
// }



















// for loops = repeat some code a limited amount of times

// for(let i = 1; i <= 11; i++){
//     console.log(i);
// }



// for(let i = 10; i > 0; i--){
//     console.log(i);
// }



// for(i = 1; i <= 20; i++){
//     if(i == 13){
//         continue   // 13 ricxvs daskipavs  10 11 12 14 15
//     }
//     else{
//         console.log(i);
//     }
// }


// for(i = 1; i <= 20; i++){
//     if(i == 13){
//         break  // 13 ze sewydeba da 13 ar iwereba
//     }
//     else{
//         console.log(i);
//     }
// }












// NUMBER GUESSING GAME
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0
// let guess 
// let running = true

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
//     guess = Number(guess)  // making it int

//     if(isNaN(guess)){  // is this not a number
//         window.alert("Please enter a valid number")
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number")
//     }
//     else{
//         attempts++
//         if (guess < answer) {
//             window.alert("TOO LOW! TRY AGAIN");
//         } else if (guess > answer) {
//             window.alert("TOO HIGH! TRY AGAIN");
//         } else {
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
   
//     }
// }















// function = A sectopn of reusable code.
//            declare code once, use it whenever you want
//            Call the function to excute that code


// function happyBirthday(username, age){
//     console.log("Happy birthday to you!")
//     console.log("Happy birthday to you!")
//     console.log(`Happy birthday dear ${username}!`)
//     console.log("Happy birthday to you!")
//     console.log(`You are ${age} year old`)
// }

// happyBirthday("Gio", 16)
// happyBirthday("SpongeBob", 30) 




// function add(x, y){
//     return x + y
// }
// function substract(){
//     return x - y
// }
// function multiplay(x, y){
//     return x * y
// }
// function devide(x, y){
//     return x / y
// }



// function isEven(number){

//     if(number % 2 === 0){
//         return true
//     }
//     else{
//         return false;
//     }
// }


// function isEven(number){
//     return number % 2 === 0 ? true : false
// }


// function isValidEmail(email){
    
//     if(email.includes("@")){
//         return true
//     }
//     else{
//         return false
//     }

// }




// function isValidEmail(email){
    
//     return email.includes("@") ? true : false

// }

















// variable scope = where a variable is recognized 
//                  and accessible (local vs global)

// let x = 1
// let x = 2 // error

// function function1(){
//     let x = 1
//     console.log(x)
// }
// function function2(){
//     let x = 2
//     console.log(x)
// }


// function function1(){
//     let x = 1
//     console.log(y)
// }
// function function2(){
//     let y = 2
//     console.log(x)    // local scope
// }


// let x = 3

// function function1(){
//     let x = 1
//     console.log(x)
// }
// function function2(){
//     let x = 2
//     console.log(x)      // global scope
// }



// function1()
// function2()















// // TEMPERATURE CONVERSION PROGRAM

// const textBox = document.getElementById("textBox")
// const toFahrenheit = document.getElementById("toFahrenheit")
// const toCelcius = document.getElementById("toCelcius")
// const result = document.getElementById("result")
// let temp


// function convert(){

//     if(toFahrenheit.checked){
//         temp = Number(textBox.value)
//         temp = temp * 9 / 5 + 32
//         result.textContent = temp.toFixed(1) + "°F" 
//     }
//     else if(toCelcius.checked){
//         temp = Number(textBox.value)
//         temp = (temp - 32) * (5 / 9)
//         result.textContent = temp.toFixed(1) + "°C" 
//     }
//     else{
//         result.textContent = "Select a unit"
//     }
// }












// array = a variable like structure that can hold 
//         more than 1 value

// let fruits = ["apple", "orange", "banana"]

// fruits[1] = "coconut"  // change value for second item in list
// fruits.push("kiwi")   // push at last item
// fruits.pop()    // pop last element
// fruits.unshift("mango")   // first zero item in list
// fruits.shift()  // removes item from the beggining


// let numOfFruins = fruits.length
// let index = fruits.indexOf("apple")

// console.log(numOfFruins);
// console.log(index);








// spread operator = ... allows an iterable suck as an
//                   array or string to be ecpanded
//                   into seperate elements
//                   (unpack the elements)

// let number = [1, 2, 3, 4, 5]
// let max = Math.max(...number)
// let min = Math.min(...number)  // without spead operator its Nan

// console.log(max);   



// let username = "TheCodeCrafter"
// let letters = [...username].join("-")

// console.log(letters); // T-h-e-C-o-d-e-C-r-a-f-t-e-r



// let fruits = ["apple", "orange", "banana"]
// let vegetables = ["carrots", "potato"]
// let foods = [...fruits, ...vegetables, "eggs", "milk"] // adding


// console.log(foods);















//rest parameters = (...rest) allow a function work wit a variable
//                  number of arguments by bundling them into an array

//                  spread = expands an array into seperate elements
//                  rest = bundles seperate elements into an array

// function openFridge(...foods) {
//     console.log(...foods);
// }
// function gerFood(...foods){
//     return foods
// }

// const food1 = "pizza"
// const food2 = "hanburger"
// const food3 = "sushi"
// const food4 = "hotdog"
// const food5 = "ramen"

// // openFridge(food1, food2, food3, food4, food5)
// const foods = gerFood(food1, food2, food3, food4, food5)

// console.log(foods)



// function sum(...numbers){

//     let result = 0
//     for(let number of numbers){
//         result += number
//     }
//     return result
// }
// // const total = sum(1, 2, 3, 4, 5)

// // console.log(`your total is ${total}`);


// function gerAvarage(...numbers){

//     let result = 0
//     for(let number of numbers){
//         result += number
//     }
//     return result / numbers.length
// }
// const total = gerAvarage(75, 100, 85, 90, 15)
// console.log(total);


// function combineString(...strings){
//     return strings.join(" ")
// }

// const fullname = combineString("mr", "spongebob", "squarepants", "III")

// console.log(fullname);










// callback = a function that is passed as an argument
//            to another function



// hello(ola)

// function hello(callback) {
//     console.log("Hello");
//     callback(); // gamoitans pirvels
// }



// function ola() {
//     console.log("goodbye");
// }











// forEach = method uset to iterate over the elements
//           of an array and apply a specified function (callback)
//           array.forEach(callback)


// let numbers = [1, 2, 3, 4, 5]

// numbers.forEach(double)
// numbers.forEach(display)

// function double(element, index, array){
//     array[index] = element * 2
// }

// function display(element){
//     console.log(element);
// }






// .map = accepts a callback and applies that function
//        to each element of an array, than return a new array

// const numbers = [1, 2, 3, 4, 5]

// const squares = numbers.map(square)

// console.log(square)

// function square(element){
//     return Math.pow(element, 2)
// }



// const students = ["Spongebob", "Patrich", "Sandy"]
// const studentsUpeper = students.map(upperCase)

// console.log(studentsUpeper);

// function upperCase(element){
//     return element.toUpperCase()
// }





// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]

// const date = dates.map(formatDates)

// console.log(date);

// function formatDates(element) {
//     const parts = element.split("-")
//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }











// .filter() = creates a new array by filtering
//             out elements


// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let evenNums = numbers.filter(isEven)
// let oddNums = numbers.filter(isOdd)

// console.log(evenNums);
// console.log(oddNums);


// function isEven(element) {
//     return element % 2 === 0
    
// }

// function isOdd(element) {
//     return element % 2 !== 0
    
// }




// const ages = [16, 17, 18, 18, 19, 20, 60]
// const adults = ages.filter(isAdult)
// const childs = ages.filter(isChild)

// console.log(adults);
// console.log(childs);



// function isAdult(element) {
//     return element >= 18
// }
// function isChild(element) {
//     return element < 18
// }










// .reduce() = reduce the elements of an array
//             to a singe value



// const prices = [5, 30, 10, 25, 15, 20]

// const total = prices.reduce(sum)

// console.log(`$${total.toFixed(2)}`);


// function sum(accumulator, elements) {
//     return accumulator + elements
// }



// const grades = [75, 50, 90, 80, 65, 95]

// const maximum = grades.reduce(getMax)

// console.log(maximum);


// function getMax(accumulator, elements) {
//     return Math.max(accumulator, elements)
// }











// function axpressions = a way to define functions as 
//                        values or variables

// setTimeout(function(){
//     console.log("Hello");
    
// }, 3000)   // 3 wamshi gamoitans "Hello"



// const numbers = [1, 2, 3, 4, 5, 6]
// const squares = numbers.map(function(elements) {
//     return Math.pow(elements, 2)
// })

// console.log(squares);















// arrow functions =  a concise way to write functions expressions
//                    good for simple functions that you use only once
//                    (parameters) => some code



// function hello(){
//     console.log("Hello");      //same
// }


// const hello = function(){
//     console.log("Hello");       //same
// }  

// const hello = (name) => {console.log(`Hello ${name}`)}        //same

// hello("gio")












// object = A collection of related properties and/or methods
//          Can represent real word objects (people, procucts, places)
//          object = {key:value,
//                    function()}


// const person = {
//     firstName: "Gio",
//     lastName: "Gagnidze",
//     age: "16",
//     isStudent: true,
//     sayHello: () => console.log("Hello im Gio Gagnidze")

// }

// const person1 = {
//     firstName: "gela",
//     lastName: "gelashvili",
//     age: "16",
//     isStudent: true,
//     sayHello: () => console.log("Im Gelaa")
    
// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.isStudent);

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isStudent);

// person.sayHello()
// person1.sayHello()
















// this = reference to the object where THIS is udes 
//        (the object depends on the immediate dontext)
//        person.name = this.name



// const person = {
//     name: "gio",
//     favFood: "kartofili",
//     sayHello: function() {
//         console.log(`hi im ${this.name}`)
//     }
// }

// person.sayHello()













// constructor = special method for defining the
//               properties and methods of objects


// function Car(make, model, year, color) {
//     this.make = make
//     this.model = model
//     this.year = year
//     this.color = color
//     this.drive = function() {
//         console.log(`you drive this ${this.model}`);
//     }
// }

// const car1 = new Car("Ford", "Mustand", 2024, "red")
// const car2 = new Car("toyota", "supra", 2000, "pruple")

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);


// car1.drive()
// car2.drive()

















// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance


// class Product{
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }

//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }

// const salesTax = 0.05

// const product1 = new Product("Shirt", 19.99)
// const product2 = new Product("Pants", 22.50)
// const product3 = new Product("Underwear", 100.00)

// product1.displayProduct()
// product2.displayProduct()
// product3.displayProduct()

// const total = product1.calculateTotal(salesTax)
// console.log(`Total price (with tax): ${total.toFixed(2)}`);

// const total1 = product2.calculateTotal(salesTax)
// console.log(`Total price (with tax): ${total1.toFixed(2)}`);

// const total2 = product3.calculateTotal(salesTax)
// console.log(`Total price (with tax): ${total2.toFixed(2)}`);

















// static = keyword that defines properties or methods that belong
//          to a class itself rather that the objects created
//          from that class (class owns anything static, not the onjects)


// class MathUtil{
//     static PI = 3.12159

//     static getDiameter(radius){
//         return radius * 2
//     }

//     static getcircumferance(radius){
//         return 2 * this.PI * radius
//     }

//     static getArea(radius){
//         return this.PI * radius * radius
//     }
// }


// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getcircumferance(10));
// console.log(MathUtil.getArea(10));









// class User{
//     static userCount = 0

//     constructor(username){
//         this.username = username
//         User.userCount++
//     }


//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
        
//     }
// }

// const user1 = new User("Gela")
// const user2 = new User("Geltmeni")

// user1.sayHello()
// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);





















// inheritance = allows a new class inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code resusablity


// class Animal{
//     alive = true

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit"
// }
// class Fish extends Animal{
//     name = "fish"
// }
// class Hawk extends Animal{
//     name = "hawk"
// }

// const rabbit = new Rabbit()
// const fish = new Fish()
// const hawk = new Hawk()

// rabbit.alive = false

// console.log(rabbit.alive);
// rabbit.eat()
// rabbit.sleep()


















// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent


// class Animal{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }


// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age)
//         this.name = name
//         this.age = age
//         this.runSpeed = runSpeed
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age)
//         this.name = name
//         this.age = age
//         this.swimSpeed = swimSpeed
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age)
//         this.name = name
//         this.age = age
//         this.flySpeed = flySpeed
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25)
// const fish = new Fish("fish", 2, 12)
// const hawk = new Hawk("hawk", 3, 15)

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);





















// getter = special mothod that makes a property readable
// setter = special method that makea a property weiteable

// validate and modify a value whem reading/writing a property



// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }else{
//             console.error("height must be a postove number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight
//         }else{
//             console.error("width must be a postove number")
//         }
//     }

//     get width(){
//         return this._width
//     }
//     get height(){
//         return this._height
//     }_

//     get area(){
//         return this._width * this._height
//     }
// }

// const rectangle = new Rectangle(3, 4)


// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);









// class Person{

//     constructor(firstName, lastName, age){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }

//     set firstName(newFirtstName){
//         if(typeof newFirtstName === "string" && newFirtstName.length > 0){
//             this._firstName = newFirtstName
//         }else{
//             console.error("First name must be a non-empty string")
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName
//         }else{
//             console.error("Last name must be a non-empty string")
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0 ){
//             this._age = newAge
//         }else{
//             console.error("Age must be a non-negative number")
//         }
//     }


//     get firstName(){
//         return this._firstName
//     }

//     get lastName(){
//         return this._lastName
//     }

//     get age(){
//         return this._age
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName + " " +this._age + " wlis"
//     }
// }

// const person = new Person("gio", "gagnidze", 16)

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName);
















// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples


// ---------- EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);




// -------- EXAMPLE 2 --------
// SWAP 2 ELEMENTS IN AN ARRAY 

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);


// ---------- EXAMPLE 3 ------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColod, thirdColor, ...extraColors] = colors

// console.log(firstColor);
// console.log(secondColod);
// console.log(thirdColor);
// console.log(extraColors);



// ------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName: "Gio",
//     lastName: "Gagnidze",
//     age: 16,
//     job: "Programmer",
// }
// const person2 = {
//     firstName: "Gela",
//     lastName: "Gelashvili",
//     age: 17,
// }

// const {firstName, lastName, age, job} = person1

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// const {firstName, lastName, age, job="Unemployed"} = person2

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);





// ----------- EXAMPLE 5 ------------
//  DESTRUCTURE IN FUCTION PARAMETERS

// function displayPerson({firstName, lastName, age, job}) {
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// const person1 = {
//     firstName: "Gio",
//     lastName: "Gagnidze",
//     age: 16,
//     job: "Programmer",
// }
// displayPerson(person1)












// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Adress{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// const person = {
//     fullName: "Gio Gagnidze",
//     age: 30,
//     isStudent: true,
//     hobbie: ["coding", "cooking", "build websites"],

//     address: {
//         street: "Unknown",
//         country: "Georgia",
//     }

// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbie[0]);
// console.log(person.address.country);
// console.log(person.address.street);



// for(const property in person.address){
//     console.log(person.address[property])   //only nested obj
// }










// class Person{
//     constructor(name, age, ...address){
//         this.name = name
//         this.age = age
//         this.address = new Address(...address)
//     }
// }


// class Address{
//     constructor(street, city, country){
//         this.street = street
//         this.city = city
//         this.country = country
//     }
// }

// const person1 = new Person("Gio", 16, "Unknown", "Rustavi", "Georgia")

// console.log(person1);


















// Date objects = Objects that contain values that represens dates and time
//                These date objects can be changed and formatted
//                Date(year, month, day, hour, minete, seconds, ms)


// const date = new Date(2024, 0, 1, 2, 3, 4)

// const date = new Date()
// const year = date.getFullYear()  //2024

// console.log(year);














// closure = A funtion defined inside of another function
//           the inner function jas access to the variables
//           and scope of outer function
//           allow for private variables and state maintenance
//           used frequently is JS frameworks: React, Vue, Angular


// function outer() {
    
//     let message = "Hello"

//     function inner(){
//         console.log(message);
//     }

//     inner()
// }

// outer()   //  SCOPE







// function createCounter(){
//     let count = 0

//     function increment(){
//         count++
//         console.log(`Count increase to ${count}`);
//     }
    
//     return {increment:increment}
// }

// const counter = createCounter()

// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()



















// setTimeout() = function in Javascript that allows you to schedule
//                the execution of a funcion after an amount time (millisecons)
//                Times are apporximate (vaties based on the wordload of the JavaScript runtime env.)

//                setTimeout(callback, delay)