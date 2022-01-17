let count = 0;
count += 1;
const message: string = 'hello world';
const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];
let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

interface Shape {
  getArea(): number;
}
class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  heigth: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.heigth = height;
  }
  getArea() {
    return this.width * this.heigth;
  }
}
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사람',
};

const expert: Developer = {
  name: '김개발',
  skills: ['JS', 'react'],
};

type People = Person[];
const people: People = [person, expert];
type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
