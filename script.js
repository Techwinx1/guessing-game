/*var count = 300;

for ( var i = 300 ; i <=333 ; i+=1){
    if ( i % 2 !== 0) {
        console.log(i);
    }
}
*/
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(x){
    var triangle = "";
    for ( i = 1 ; i <= x ; i++){
        triangle += makeLine(i);
    }
    return triangle
}

// test your code by uncommenting the following line
document.querySelector("body").textContent=(buildTriangle(10));
