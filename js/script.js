console.log('------------- # 5');
let ask = (question, yes, no) => {
	if (confirm(question)) yes()
	else no();
}
ask(
	"Вы согласны?",
	() => console.log("Вы согласились."),
	() => console.log("Вы отменили выполнение.")
);
console.log('------------- # 6');
let stringOne = 'my-short-string';
let arrOne = stringOne.split('-');
console.log(arrOne);
console.log('------------- # 7');
let arrTwo =  ['JavaScript', 2015];
let StringTwo = arrTwo.join(' ');
console.log(StringTwo);
console.log('------------- # 8');
let usersOne = [
	{id: 1, name: "Vic", age: 21},  
	{id: 2, name: "Petya", age: 30}, 
	{id: 3, name: "Jon", age: 5}
];
let usersOver20 = usersOne.filter(function(item) {return item.age < 20});
console.log(usersOver20);
console.log('------------- # 9');
let names = usersOne.map(item => item.name);
console.log(names);
console.log('------------- # 10');
let arrThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];	
function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arrThree.length; i++) {
	  if (arr[i] < a || arr[i] > b) {
		arr.splice(i, 1);
		i--;
	  }
	}
}
filterRangeInPlace(arrThree, 1, 4);
console.log(arrThree);
console.log('------------- # 11');
function strToArr(str, sep) {
	let arr1 = str.split(sep);
	return arr1;
}
console.log(strToArr(stringOne, '-'));
console.log('------------- # 12');
const arrFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
function slArray(arr, startIndex, endIndex) {
	return arr.slice(startIndex, endIndex);
}
let range = slArray(arrFour, 2, 6);
console.log(range); 
console.log(arrFour);
console.log('------------- # 13');
function sum(...numbs) {
	let sumAll = 0;
	for (let numb of numbs) {sumAll += numb}
	return sumAll;
}
console.log(sum(1, 2, 3, 4, 5));