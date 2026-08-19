// 1. Creating a new Map
const myMap = new Map();

// 2. Adding key-value pairs using .set(key, value)
myMap.set("name", "Aayush");
myMap.set("role", "Developer");
myMap.set("age", 21);

// 3. Getting a value by key using .get(key)
console.log(myMap.get("name")); // Output: Aayush
console.log(myMap.get("role")); // Output: Developer

// 4. Checking if a key exists using .has(key) -> returns boolean
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("gender")); // Output: false

// 5. Deleting a key-value pair using .delete(key)
myMap.delete("age");

// 6. Checking size of the Map
console.log(myMap.size); // Output: 2

// 7. Iterating through key-value pairs using forEach
myMap.forEach((value, key) => {
console.log(`${key}: ${value}`);
});

// 8. Iterating using for...of loop
for (const [key, value] of myMap) {
console.log(`${key} -> ${value}`);
}

// 9. Clearing all entries using .clear()
myMap.clear();
console.log(myMap.size); // Output: 0

