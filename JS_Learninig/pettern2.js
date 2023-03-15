// *****
// ****
// ***
// **
// *

var lines = 10;
var starCount = lines;

for (var j = 1; j <= lines; j++) {
    var s = "";
    for (var i = 1; i <= starCount; i++) {

        s = s + "*"
    }
    console.log(s);
    starCount--;
}


