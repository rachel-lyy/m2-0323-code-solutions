function ExampleConstructor() {}
console.log('Value of ExampleConstructor prototype: ', ExampleConstructor);
console.log('Value and typeof prototype property of ExampleConstructor:', ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('Value of newConstructor: ', newConstructor);
console.log('Check newConstructor instanceOf: ', newConstructor instanceof ExampleConstructor);
