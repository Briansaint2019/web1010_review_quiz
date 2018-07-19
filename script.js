var h2 = document.querySelector("h2");
/*var h2 = $('h2')*/

var helloWorld = document.querySelector(".helloWorld")
var keys = document.querySelector("#keys")
var input = document.querySelector("input[type=text]")
var clickme = document.querySelector("button")

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