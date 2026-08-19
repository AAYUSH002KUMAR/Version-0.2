// Sample array with repetitive items
const items = ["phone", "tv", "ac", "phone", "tv", "phone", "laptop", "ac"];

// Method 1: Using Map (Best approach for counting frequency)
const itemCountsMap = new Map();

items.forEach((item) => {
  const currentCount = itemCountsMap.get(item) || 0;
  itemCountsMap.set(item, currentCount + 1);
});

console.log("Counts using Map:");
itemCountsMap.forEach((count, item) => {
  console.log(`${item}: ${count}`);
});

// Method 2: Using Set (To extract unique items, then filter/count)
const uniqueItemsSet = new Set(items);
const itemCountsFromSet = {};

uniqueItemsSet.forEach((uniqueItem) => {
  // Count how many times each unique item appears in the original array
  const count = items.filter((item) => item === uniqueItem).length;
  itemCountsFromSet[uniqueItem] = count;
});

console.log("\nCounts using Set:");
console.log(itemCountsFromSet);