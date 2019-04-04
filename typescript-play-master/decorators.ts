function f() {
  console.log('f(): evaluated');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('f(): called');
  };
}

function g() {
  console.log('g(): evaluated');
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('g(): called');
  };
}

class C {
  @f()
  @g()
  method() {}
}

/////////////////////////////////////////////////////////////

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T,
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  };
}

function enumerable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = value;
  };
}

@classDecorator
class Greeterr {
  property = 'property';
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }

  @enumerable(false)
  greet() {
    return 'Hello, ' + this.hello;
  }
}

console.log(new Greeterr('world'));
console.log(new Greeterr('world').greet());
