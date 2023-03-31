let userAge: number;
let userName: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;

 userName = 'Max';
 userAge = 50;
 toggle = true;
 empty = null;
 notInitialize = undefined;


let anything: any;
anything = -20;
anything = 'Text';
anything = {};


let some:unknown;
some = 'Text';
let str: string;
if (typeof some === "string") {
str = some;    
};


let user: [string, number];
user = ['Max', 21];


enum Status {LOADING, READY};
const state = {
  status: Status.READY,
}
if (state.status === Status.LOADING) {
  console.log('Status: ', Status.LOADING);
}
if (state.status === Status.READY) {
  console.log('Status: ', Status.READY);
}


let union: string | number;
union = 'Text';
union = 10;


let buttonStatus: 'enable' | 'disable';
buttonStatus = 'enable';


function showMessage(message: string): void {
  console.log(message);
}

function calc(num1:number, num2:number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


type Page1 = {
    title: string;
    likes: number;
    accounts: string[];
    status: "open" | "close";
  details?: {
      createAt: string;
      updateAt: string;
  }
}

const page1: Page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: Page1 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}