

// Q1 -A
var i = 365 * 2;
//console.log(i)

//Q1 -B

var str6 = "this is not " + "what i signed " + "up for!!!! " + "this is unnecessary " + "help me please!";
//console.log(str6)


//Q1 -C
var n1 = 10
var n2 = 7
var n3 = 5
var n4 = 6
var n6 = 7

var str888 = `the numbers are ${n1}, ${n2}, ${n3}, ${n4}, ${n6}`
//console.log(str888)//


//Q1 -D
var a1 = [6,5,4,3,2,1, 'hello', 'world', 4 > 6, 3 == 3, 4 >= 7, ['chicke', 'dogs', false] ]
console.log(a1)

//Q1 -E
var two = {
house:3,
car: "camaro",
boat:[1],
soup:{
x:0

}


}

console.log(two.soup['x'])

//q1 d

//var money = ['4', '3', '2', '1', 'lets go', 'Cowboy Bebop', '3 > 1', '3 == 3', '2 != 1'], ['hi', '5', 'tik tok'];//


// Q2

var helloWorld = document.querySelector(".helloWorld")
var keys = document.querySelector("#keys")
var input = document.querySelector("input[type=text]")
var clickme = document.querySelector("button")



// Q3
function doStuff(input, src){
    hash.innerHTML += `<img src=${src} alt="alternate text">`
    helloWorld.innerHTML = input



}

function loopIt(num){
for(var i =1; i<=num; i++){

    var inp = input.value
    doStuff(inp, 'http://wp.patheos.com.s3.amazonaws.com/premium/whitehindu/files/2013/10/Brahma.jpg')
}

}

clickme.addEventListener('click', function(){
//var inp = input.value//
//keys.innerHTML += `<img src="http://wp.patheos.com.s3.amazonaws.com/premium/whitehindu/files/2013/10/Brahma.jpg" alt="">`//

//doStuff(inp, 'http://wp.patheos.com.s3.amazonaws.com/premium/whitehindu/files/2013/10/Brahma.jpg')//

//helloWorld.textContent = inp//
loopIt(5)
})
