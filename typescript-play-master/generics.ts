function identity(arg: number): number {
  return arg;
}

function identity2(arg: any): any {
  return arg;
}

function identity3<T>(arg: T): T {
  return arg;
}

let output = identity3<string>('Hola');
let output1 = identity3(10);
let output2 = identity3('10');
let output3 = identity3(true);

//////////////////////////////////////////////////////////////////////////////

function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

//////////////////////////////////////////////////////////////////////////////

interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity4<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity4;

//////////////////////////////////////////////////////////////////////////////

// we now will also need to specify the corresponding type argument (here: number)
interface GenericIdentityFn2<T> {
  (arg: T): T;
}

function identity5<T>(arg: T): T {
  return arg;
}

let myIdentity2: GenericIdentityFn2<number> = identity5;
