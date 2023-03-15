
for (var j = 2; j <= 100; j++) {
    var num = 13;
    var flag = 0;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }

    if (flag == 0) {
        console.log(num + " : is prime");
    }
    else {
        console.log(num + " : No is not prime");
    }

}
