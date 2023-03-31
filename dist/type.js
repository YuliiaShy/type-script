"use strict";
let userAge;
let userName;
let toggle;
let empty;
let notInitialize;
userName = 'Max';
userAge = 50;
toggle = true;
empty = null;
notInitialize = undefined;
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === "string") {
    str = some;
}
;
let user;
user = ['Max', 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const state = {
    status: Status.READY,
};
if (state.status === Status.LOADING) {
    console.log('Status: ', Status.LOADING);
}
if (state.status === Status.READY) {
    console.log('Status: ', Status.READY);
}
let union;
union = 'Text';
union = 10;
let buttonStatus;
buttonStatus = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=type.js.map