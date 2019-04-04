let someValue: any = 'this is a string';
// angle-bracket syntax
let strLength: number = (<string>someValue).length;
// as syntax
let strLengthB: number = (someValue as string).length;

console.log(strLengthB);
