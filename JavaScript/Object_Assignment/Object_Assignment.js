//Q1 Creating Objects & Property Access
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car.model);
console.log(car["year"]);

//Q2 Adding & Updating Properties
const student = {
    name: "Alex",
    grade: 10
};

student.subject = "Math";
student.grade = 11;

console.log(student);

//Q3 Deleting Properties
const product = {
    id: 101,
    name: "Laptop",
    price: 999,
    inStock: true
};
delete product.inStock;
console.log(product);

//Q4 Checking Property Existence
const user = {
    name: "Sam",
    age: 25
};
console.log("email" in user);
console.log(user.hasOwnProperty("name"));

//Q5 Counting Own Properties
const book = {
    title: "1984",
    author: "George Orwell",
    pages: 328
};
const keys = Object.keys(book);

console.log(keys);
console.log(keys.length);

//Q6 Nested Objects
const user = {
    id: 42,
    profile: {
        firstName: "Sarah",
        lastName: "Connor",
        contact: {
            email: "sarah@test.com",
            city: "Los Angeles"
        }
    }
};

console.log(user.profile.contact.email);
console.log(user.profile.contact.city);

//Q7 Property Shorthand & Object Methods
const name = "John";
const age = 30;

const person = {
    name,
    age,
    sayHello() {
        console.log("Hello, my name is John!");
    }
};

console.log(person);
person.sayHello();

//Q8 Iterating Over Object Properties
const scores = {
    Math: 90,
    Science: 85,
    History: 88
};
for (let subject in scores) {
    console.log(subject + ": " + scores[subject]);
}

//Q9 Transforming Object Values
const prices = {
    apple: 1.5,
    banana: 0.8,
    orange: 1.2
};
const newPrices = {};

for (let key in prices) {
    newPrices[key] = prices[key] * 2;
}
console.log(newPrices);

//Q10 Shallow Copying Objects
const original = {
    a: 1,
    b: 2
};
const copy1 = Object.assign({}, original);

copy1.a = 100;

console.log(original);
console.log(copy1);

//Q11 Immutable Nested Object Update
const userProfile = {
    name: "David",
    settings: {
        theme: "dark",
        notifications: true
    }
};

const updatedProfile = {
    ...userProfile,
    settings: {
        ...userProfile.settings,
        theme: "light"
    }
};

console.log(updatedProfile);
console.log(userProfile);

//Q12 Object Destructuring
const employee = {
    id: 501,
    name: "Emily",
    department: "Engineering"
};

const {
    name: employeeName,
    department: dept,
    salary = 0
} = employee;

console.log(employeeName);
console.log(dept);
console.log(salary);

//Q13 Constructor Function
function Rectangle(width, height) {

    this.width = width;
    this.height = height;

    this.getArea = function() {
        return this.width * this.height;
    };
}

const r1 = new Rectangle(10, 5);
const r2 = new Rectangle(20, 4);

console.log(r1.getArea());
console.log(r2.getArea());

//Q14 Instance & Prototype Inspection
function Animal(type) {
    this.type = type;
}
const dog = new Animal("Dog");
console.log(dog instanceof Animal);
console.log(Object.getPrototypeOf(dog));

//Q15 Prototype Method Sharing
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};
Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.width + this.height);
};

const r1 = new Rectangle(10, 5);

console.log(r1.getArea());
console.log(r1.getPerimeter());

//Q16 Object.freeze() vs Object.seal()

//Object.freeze()
const config1 = {
    host: "localhost",
    port: 8080
};

Object.freeze(config1);

config1.port = 3000;
config1.debug = true;
delete config1.host;

console.log(config1);

//Object.seal()
const config2 = {
    host: "localhost",
    port: 8080
};

Object.seal(config2);

config2.port = 3000;   // Allowed
config2.debug = true;  // Not allowed
delete config2.host;   // Not allowed

console.log(config2);

//Q17 Encapsulation with Factory Function
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        },
        getBalance() {
            return balance;
        }
    };
}
const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);

console.log(account.getBalance());

//Q18 Safe Nested Property Accessor
function getNestedValue(obj, path) {
    let keys = path.split(".");
    let result = obj;
    for (let key of keys) {
        if (result === undefined || result === null) {
            return undefined;
        }
        result = result[key];
    }
    return result;
}

const data = {
    user: {
        profile: {
            email: "test@gmail.com"
        }
    }
};

console.log(getNestedValue(data, "user.profile.email"));
console.log(getNestedValue(data, "user.profile.name"));

//Q19 Inverting Keys and Values
function invertObject(obj) {
    let result = {};
    for (let key in obj) {
        result[obj[key]] = key;
    }
    return result;
}
console.log(invertObject({
    a: "x",
    b: "y"
}));

//Q20 Custom Object Difference Detector
function getObjectDiff(obj1, obj2) {
    let result = {};
    for (let key in obj2) {
        if (obj1[key] !== obj2[key]) {
            result[key] = obj2[key];
        }
    }
    return result;
}

console.log(
    getObjectDiff(
        { a: 1, b: 2 },
        { a: 1, b: 99, c: 3 }
    )
);


// Objects — Points to Remember

// | Concept / Method   | What to remember                   | Example                       |
// | ------------------ | ---------------------------------- | ----------------------------- |
// | Dot notation       | Access property                    | `user.name`                   |
// | Bracket notation   | Access using key                   | `user["name"]`                |
// | Add property       | `object.key = value`               | `user.age = 20`               |
// | Update property    | Assign new value                   | `user.age = 21`               |
// | `delete`           | Remove property                    | `delete user.age`             |
// | `in`               | Check property exists              | `"name" in user`              |
// | `hasOwnProperty()` | Check own property                 | `user.hasOwnProperty("name")` |
// | `Object.keys()`    | Get keys                           | `Object.keys(obj)`            |
// | `Object.values()`  | Get values                         | `Object.values(obj)`          |
// | `Object.entries()` | Get key-value pairs                | `Object.entries(obj)`         |
// | `for...in`         | Loop through properties            | `for (let key in obj)`        |
// | Spread `...`       | Copy/merge objects                 | `{...obj}`                    |
// | `Object.assign()`  | Copy/merge objects                 | `Object.assign({}, obj)`      |
// | Destructuring      | Extract properties                 | `const {name} = user`         |
// | Nested object      | Access deep property               | `user.profile.email`          |
// | `this`             | Refers to current object           | `this.name`                   |
// | `new`              | Creates object from constructor    | `new Animal()`                |
// | `instanceof`       | Check constructor relationship     | `dog instanceof Animal`       |
// | `prototype`        | Shared methods/properties          | `Animal.prototype.speak`      |
// | `Object.freeze()`  | No add/update/delete               | `Object.freeze(obj)`          |
// | `Object.seal()`    | Update allowed, add/delete blocked | `Object.seal(obj)`            |
// | Closure            | Keeps private data                 | `let balance` inside function |

// Most important for fundamentals

// Object
//     ↓
// key : value

// Access       → object.key
// Add          → object.key = value
// Update       → object.key = newValue
// Delete       → delete object.key

// Keys         → Object.keys()
// Values       → Object.values()
// Entries      → Object.entries()

// Copy         → {...object}
// Destructure  → const {key} = object

// Loop         → for...in

// Constructor  → new
// Prototype    → Constructor.prototype
// ```
