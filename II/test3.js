const text = () => {
    let matrix = document.getElementById("text").value;
    let array = matrix.split("\n");
    console.log(array)
    let i, j;
    let array2 = [];
    let second = [];
    let first = "";
    let reverse = [];
    let ans = "";
    for(i = 0; i < array.length; i++) {
        array2 = array[i].split(" ");
        console.log(array2)
        second[i] = new Array(array2.length)
        for(j = 0; j < array2.length; j++) {
            second[i][j] = array2[j];
            first += second[i][j] + " ";
            console.log(first)
        }
        first += "<br>";
    }

    for(i = 0; i < array2.length ; i++) {
        reverse[i] = []
        for(j = 0; j < array.length; j++) {
            reverse[i][j] = second[j][i]
            ans += reverse[i][j] + " "
        }
        console.log(ans)
        ans += "<br>"
    }
    document.getElementById("ans").innerHTML = ans;
}