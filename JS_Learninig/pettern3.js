//     * 
//    **
//   ***
//  ****
// *****

var lines = 10;
var starCount = 1;
var spaceCount = lines - 1;

for (var j = 1; j <= lines; j++) {
    var s = "";

    for (var i = 1; i <= spaceCount; i++) {
        s = s + " "
    }

    for (var i = 1; i <= starCount; i++) {
        s = s + "*"
    }
    console.log(s);
    starCount++;
    spaceCount--;
}


