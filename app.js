//Sets and Maps

//ES 5

//set
let set = Object.create(null);
set.foo = true;
// проверка за съществуване
if (set.foo) {
	// направи нещо
}


console.log('.'.repeat(20));

//map0

let map = Object.create(null);

map.foo = 'bar'; // ключ foo
//izvlichane na stoinosti
let value = map.foo;

console.log(value);


//ES 6
console.log('.'.repeat(20));
// Set

let set1 = new Set();
set1.add(5);
set1.add('5');
set1.add(5); //дублирането се игнорира

console.log(set1.size); // 2

console.log('.'.repeat(20));

let set2 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 6]); //ignore 5
console.log(set2.size); //6

console.log('.'.repeat(20));

//test sets

let set3 = new Set();
set3.add(5);
set3.add('5');
console.log(set3.has(5)); //true
console.log(set3.has(6)); //false


console.log('.'.repeat(20));


//delete() and clear()

let set4 = new Set();
set4.add(5);
set4.add('5');

console.log(set4.has(5)); //true

set4.delete(5);

console.log(set4.has(5)); //false
console.log(set4.size); // 1

set4.clear();

console.log(set4.has('5')); //false
console.log(set4.size); //0

console.log('.'.repeat(20));


// set   forEach

let set5 = new Set([1, 2]);

set5.forEach(function(value, key, ownerSet) { //value===key
	console.log(key + ' ' + value);
	console.log(ownerSet === set5);
});
// 1 1 true
// 2 2 true

console.log('.'.repeat(20));

let set6 = new Set([1, 2]),
	processor = {
		output(value) {
				console.log(value);
			},
			process(dataSet) {
				dataSet.forEach((value) => this.output(value)); //this
			}
	};
processor.process(set6);


console.log('.'.repeat(20));

//Конвентриране на set in Array with spread(...)

let set7 = new Set([1, 2, 3, 4, 5, 5, 5, 5, 6]), //ignore 5
	array = [...set7];
console.log(array); //[1,2,3,4,5,6]


console.log('.'.repeat(20));


function eliminateDuplicates(items) {
	return [...new Set(items)];
}
let numbers = [1, 2, 3, 4, 5, 5, 5, 5, 6],
	noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates); //[1,2,3,4,5,6]

console.log('.'.repeat(20));


// Wiak set

let set8 = new WeakSet(),
	key = {};

// добавяне на обект към set
set8.add(key);

console.log(set8.has(key)); // true

set8.delete(key);

console.log(set8.has(key)); // false



console.log('@'.repeat(30));


//Maps

let map1 = new Map();
map1.set('title', 'Understanding ES6');
map1.set('year', 2016);
console.log(map1.get('title')); //Understanding ES6
console.log(map1.get('year')); //2016



console.log('.'.repeat(20));

//Objeck in maps

let map2 = new Map(),
	key1 = {},
	key2 = {};
map2.set(key1, 5);
map2.set(key2, 42);
console.log(map2.get(key1)); //5
console.log(map2.get(key2)); //42


console.log('.'.repeat(20));

//has(key); delete(key); clear()

let map3 = new Map();
map3.set('name', 'Todor');
map3.set('age', 46);

console.log(map3.size); //2

console.log(map3.has('name')); //true
console.log(map3.get('name')); //Todor

console.log(map3.has('age')); //true
console.log(map3.get('age')); //46

map3.delete('name');
console.log(map3.has('name')); //false
console.log(map3.get('name')); //undefined
console.log(map3.size); //1

map3.clear();
console.log(map3.has('name')); //false
console.log(map3.get('name')); //undefined
console.log(map3.has('age')); //false
console.log(map3.get('age')); //undefined
console.log(map3.size); //0


console.log('.'.repeat(20));


//Map inicializaicq with array

let map4 = new Map([
	['name', 'Todor'],
	['age', 46]
]);
console.log(map4.has('name')); //true
console.log(map4.get('name')); //Todor
console.log(map4.has('age')); //true
console.log(map4.get('age')); //46
console.log(map4.size); //2


console.log('.'.repeat(20));

// Map  forEach

let map5 = new Map([
	['name', 'Todor'],
	['age', 46]
]);
map5.forEach(function(value, key, ownerMap) {
	console.log(key + ' ' + value);
	console.log(ownerMap === map5);
});
//name Todor
//true
//age 46
//true

console.log('.'.repeat(20));

//WeakMap

/*
let map6 = new WeakMap(),
	element = document.querySelector('.element');
map6.set(element, 'Original');

let value6 = map6.get(element);
console.log(value6); //Original

element.parpentNode.removeChild(element);
element = null;
*/

console.log('.'.repeat(20));

let key3 = {},
	key4 = {},
	map7 = new WeakMap([
		[key3, 'Hello'],
		[key4, 'Todor']
	]);

console.log(map7.has(key3)); //true
console.log(map7.get(key3)); //Hello
console.log(map7.has(key4)); //true
console.log(map7.get(key4)); //Todor
console.log(map7.get(key3) + ' ' + map7.get(key4)); //Hello Todor

console.log('.'.repeat(20));


//WeakMap metods= has(); delete();


/*
let map8 = new WeakMap(),
	element = document.querySelector('.element');

map8.set(element, 'Original');

console.log(map8.has(element));     //true
console.log(map8.get(element));     //Original

map8.delete(element);
console.log(map8.has(element));     //false
console.log(map8.get(element));     //undefined

*/



//Private object data

//ES5
let Person = (function() {
	let privateData = {},
		privateId = 0;

	function Person(name) {
		Object.defineProperty(this, '_id', {
			value: privateId++
		});
		privateData[this._id] = {
			name: name
		};
	}
	Person.prototype.getName = function() {
		return privateData[this._id].name;
	};
	return Person;
}());


//ES6
let Person2 = (function() {
	let privateData = new WeakMap();

	function Person2(name) {
		privateData.set(this, {
			name: name
		});
	}
	Person2.prototype.getName = function() {
		return privateData.get(this).name;
	};
	return Person2;
}());