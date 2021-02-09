let arr = [20, 30, 40, 50,]
let arr1 = ["Alex", "Dima", "Olga", "Galya", "Katya"]
let arr2 = ["Abraham", "OWU", 20, 30.5, false, true, true]
let emptyArray = [];

let user = {
    userName: "Ostap",
    userAge: 20,
    userKnowlange: [" HTML/CSS", " JavaScript"]
}

for(key in user){
    document.write(key + " ---> " + user[key] + "<br/>")
}

document.write("<hr/>")

for(i = 0; i < 10; i += 1){
    document.write("<div>JavaScript lesson 2</div>")
}

document.write("<hr/>")

for(i = 1; i <= 10; i++){
    document.write(`<div>That's index number ${i} </div>`)
}
document.write("Pay attention!!! For using '${}' press only those ``")

document.write("<hr/>")

let a = 0
while(a < 5){
    document.write("<h4>Cicle while</h4>")
    a += 1
}

document.write("<hr/>")

let b = 0
while(b < 5){
    document.write(`<h4>Cicle while with index ${b}</h4>`)
    b += 1
}

document.write("<hr/>")

for(num of arr){
    document.write(num + "<br/>")
}

document.write("<hr/>")

for(names of arr1){
    document.write(names + "<br/>")
}

document.write("<hr/>")

for(value of arr2){
    document.write(value + "<br/>")
}

document.write("<hr/>")
document.write("There are two ways to output only Boolean values from an array")
document.write("<br/>")
for(i of arr2){
    if(i == 0 || i == 1){
        document.write(i + "<br/>")
    }
}

document.write("---------------")
document.write("or")
document.write("---------------")
document.write("<br/>")

for(i of arr2){
    if(typeof i === "boolean"){
        document.write(i + "<br/>")
    }
}

document.write("<hr/>")

for(i of arr2){
    if(typeof i === "number"){
        document.write(i + "<br/>")
    }
}

document.write("<hr/>")

for(i of arr2){
    if(typeof i === "string"){
        document.write(i + "<br/>")
    }
}

document.write("<hr/>")

emptyArray[0] = "London";
emptyArray[2] = "New-York";
emptyArray[1] = "Amsterdam";
emptyArray[3] = false;
emptyArray[4] = true;
emptyArray[5] = true;
emptyArray[6] = {userName: "Ostap", userAge: 20};

for(let i = 0; i < emptyArray.length; i++){
    document.write(emptyArray[i] + "<br/>")
}

document.write("<hr/>")

for(let i = 0; i < 10; i++){
    document.write(`step: ${i} <br/>`)
}
for(let i = 0; i < 10; i++){
    console.log("step: " + i)
}
for(let i = 0; i < 10; i++){
    console.log("step: ", i)
}
console.log("<------------------------------>")
document.write("<hr/>")

for(let i = 0; i <= 50; i += 2){
    document.write(`step: ${i} <br/>`)
    console.log("step: ", i)
}

console.log("<------------------------------>")
document.write("<hr/>")

for(let i = 2; i < 100; i++){
    if(i % 2 === 0){
        document.write(`step: ${i} <br/>`)
        console.log("step: ", i)
    }
}

console.log("<------------------------------>")
document.write("<hr/>")

for(let i = 2; i <= 100; i++){
    if(i % 2 === 1){
        document.write(`step: ${i} <br/>`)
        console.log("step: ", i)
    }
}

console.log("<------------------------------>")
document.write("<hr/>")

let j = ['a', 'b', 'c']
for(i = 1; i <= 3; i++){
    j.push(i)
} 
document.write(j)

document.write("<hr/>")

let arr5 = [1, 2, 3]
arr5.reverse()
document.write(arr5)

document.write("<hr/>")

let arr6 = [1, 2, 3]
for(i = 4; i <= 6; i++){
    arr6.push(i)
}
document.write(arr6)

document.write("<hr/>")

let arr7 = [1, 2, 3]
for(i = 6; i >= 4; i--){
    arr7.unshift(i)
}
document.write(arr7)

document.write("<hr/>")

let arr8 = ['js', 'css', 'jq']
delElement = arr8.shift(0)
document.write(delElement)
console.log(arr8)

document.write("<hr/>")

let arr9 = ['js', 'css', 'jq'];
deletedElement = arr9.pop()
document.write(deletedElement)
console.log(arr9)

document.write("<hr/>")

let arr10 = [1, 2, 3, 4, 5]
let slicedArray = arr10.slice(3)
document.write(slicedArray)

document.write("<hr/>")

let arr11 = [1, 2, 3, 4, 5]
let slicedArray2 = arr11.slice(0, 2)
document.write(slicedArray2)

document.write("<hr/>")

let arr12 = [1, 2, 3, 4, 5]
arr12.splice(1, 2)
document.write(arr12)

document.write("<hr/>")

let arr13 = [1, 2, 3, 4, 5]
arr13.splice(3, 0, "a, b, c")
document.write(arr13)

document.write("<hr/>")

let arr14 = [1, 2, 3, 4, 5]
arr14.splice(1, 0, "a, b")
arr14.splice(5, 0, "c")
arr14.splice(7, 0, "e")
document.write(arr14)

document.write("<hr/>")

