"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "hello";
var nitish = { name: "nitish", id: 23 };
nitish = { username: "nk", id: 43 };
function getId(id) {
    console.log("DB id is:".concat(id));
    getId(3);
    getId("3");
}
function getDbID(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//  ARRAY
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, '3'];
