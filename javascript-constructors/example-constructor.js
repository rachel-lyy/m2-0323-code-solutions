function ExampleConstructor() {}
console.log('Value of ExampleConstructor prototype: ', ExampleConstructor);
console.log('Value of ExampleConstructor typeof: ', typeof ExampleConstructor);

var newConstructor = new ExampleConstructor();
console.log('Value of newConstructor: ', newConstructor);
console.log('Check newConstructor instanceOf: ', newConstructor instanceof ExampleConstructor);
