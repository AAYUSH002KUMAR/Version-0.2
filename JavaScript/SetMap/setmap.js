// 1. Creating a new Set
const setmap = new Set();

// 2. Adding values using .add()
setmap.add("Apple");
setmap.add("Banana");
setmap.add("Cherry");

// 3. Checking if an element exists using .has() -> returns boolean
console.log(setmap.has("Apple")); // Output: true
console.log(setmap.has("Mango")); // Output: false

// 4. Deleting a specific value using .delete()
setmap.delete("Banana");

// 5. Checking size of the Set
console.log(setmap.size); // Output: 2

// 6. Iterating through the Set using forEach or for...of
setmap.forEach((value) => {
console.log(value);
});

// 7. Clearing all elements using .clear()
setmap.clear();
console.log(setmap.size); // Output: 0