interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

///////////////////////////////////////////////////////////////

interface SquareConfig {
  color?: string;
  width?: number;
}

interface Square {
  color: string;
  area: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: 'black' });
console.log(mySquare);

///////////////////////////////////////////////////////////////

interface Point {
  readonly x: number;
  readonly y?: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

///////////////////////////////////////////////////////////////

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let mySearch2: SearchFunc;
mySearch2 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

///////////////////////////////////////////////////////////////

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {}
}

interface ClockInterface2 {
  currentTime: Date;
  setTime(d: Date);
}

class Clock2 implements ClockInterface2 {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
