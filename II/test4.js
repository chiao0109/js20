const text = () => {
    let d = document.getElementById("text").value;
    let row = []
    let col = []
    let rel = []
    let s = ''
    let ansar = []
    let ans = ''
    let result = []
    let tag = []
    let direction = 0

    row = d.split("\n")
    console.log(row);
    rel = new Array(row.length)

    for(var i = 0;i < row.length ; i++){
        col = row[i].split(" ");
        rel[i] = new Array(col.length)
        for(var j = 0;j < col.length ; j++){
            rel[i][j] = col[j]
            s = s + rel[i][j] + ' '
        }
        s = s + "<br>"
    }
    console.log(rel)
    document.getElementById("s").innerHTML = s

    for(var i = 0;i < row.length; i++){ //與輸入陣列相同的陣列，判斷是否走過
        tag[i] = []
        for(var j = 0 ;j < col.length;j++){
            tag[i][j] = 1
        }
    }
    console.log(tag)
    let r = 0
    let c = 0
    let n = 0
    while(tag[r] && tag[r][c] === 1){
        result.push(rel[r][c])
        console.log(result)
        ans = ans + result[n] + " "
        n = n + 1
        tag[r][c] = 0
        switch(direction){
            case 0:
                if(!tag[r][c+1]){//判斷是否為最後一個陣列值，是的話往下走
                    direction = 1
                    r++
                }else{
                    c++
                }
                break
            case 1:
                if(tag[r+1] && tag[r+1][c]){//判斷最後一個陣列值是否來過，來過的話就往左
                    r++
                }else{
                    direction = 2
                    c--
                }
                break
            case 2:{
                if(!tag[r][c-1]){//判斷左邊的陣列值是否走過或是空值，是的話往上走
                    direction = 3
                    r--
                }else{
                    c--
                }
                break;
            }
            case 3:{
                if(!tag[r-1][c]){//判斷上方的陣列值是否走過或是空值，是的話往右走
                    direction = 0
                    c++
                }else{
                    r--
                }
                break;
            }
        }
    }
    console.log(ans)


    document.getElementById("ans").innerHTML = ans
}