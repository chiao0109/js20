const text = () => {
    let identity = document.getElementById("text").value;
    const eg = ["A","B","C","D","E","F","G","H","J","K",
    "L","M","N","P","Q","R","S","T","U","V","X","Y","W","Z","I","O"];
    const num = [10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
    
    let arr =  identity.split("");//身分證分割存字串
    console.log(arr);
    let i = 0;
    let eg2;
    let sum = 0;
    let result = "";

    for(i = 0; i < eg.length; i++) {
        if(arr[0] == eg[i]) {
            eg2 = num[i];//英文轉數字
            break;
        }
    }
    console.log(eg2);
    sum = Math.floor(eg2/10) + eg2%10*9;
    console.log(result);

    for(i = 1; i < arr.length; i++) {
        sum += parseInt(arr[i]) * (9-i);
        console.log(sum);
    }
    sum += + parseInt(arr[(arr.length)-1]);
    console.log(sum);

    if(result%10 == 0) {
        result = "real";
    }
    else {
        result = "fake";
    }
    document.getElementById("result").innerText = sum + "除以10整除，因此為" + result;
}