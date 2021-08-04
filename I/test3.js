const print = () => {
    let i, j;
    let star = "";
    for(i = 0; i < 5; i++) {
        for(j = 0; j < 5; j++) {
            star += "*&nbsp&nbsp&nbsp&nbsp";
        }
        star += "<br>";
    }
    console.log(print);
    document.getElementById("one").innerHTML = "(1)<p>" + star;

    star = "";
    for(i = 0; i < 5; i++) {
        for(j = 0; j < 5; j++) {
            if(i == 0 || i == 4){
                star += "*&nbsp&nbsp&nbsp&nbsp";
            }
            else if(j == 0 || j == 4) {
                star += "*&nbsp&nbsp&nbsp&nbsp";
            }
            else {
                star += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
            }
        }
        star += "<br>";
    }
    console.log(print);
    document.getElementById("two").innerHTML = "(2)<p>" + star;

    star = "";
    for(i = 0; i <= 5; i++) {
        for(j = 0; j < i; j++) {
            star += "*&nbsp";
        }
        star += "<br>";
    }
    console.log(print);
    document.getElementById("three").innerHTML = "(3)<p>" + star;

    star = "";
    for(i = 0; i < 5; i++) {
        for(j = 0; j < 5; j++) {
            if(i == 4) {
                star += "*&nbsp&nbsp";
            }
            else if(j == 0 || j == i) {
                star += "*&nbsp";
            }
            else {
                star += "&nbsp&nbsp&nbsp&nbsp&nbsp"
            }
        }
        star += "<br>";
    }
    console.log(print);
    document.getElementById("four").innerHTML = "(4)<p>" + star;

    star = "";
    for(i = 0; i <= 5; i++) {
        for(j = 5; j > i; j--) {
            star += "&nbsp&nbsp&nbsp&nbsp"
        }
        for(j = 0; j < i; j++) {
            star += "*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
        }
        star += "<br>";
    }
    console.log(print);
    document.getElementById("five").innerHTML = "(5)<p>" + star;
}