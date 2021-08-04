const one = () => {
    let text = document.getElementById("text").value;
    let array =  text.split(",");
    console.log(array);
    document.getElementById("compare").innerHTML = "最大元素:" + Math.max(...array) + "<p>最小元素:" + Math.min(...array);
}

const two = () => {
    let text = document.getElementById("text").value;
    let array =  text.split(",");
    let array2 = array.sort((a,b) => a-b);
    document.getElementById("sort").innerHTML = array2;
}

const three = () => {
    let text = document.getElementById("text").value;
    let array =  text.split(",");
    let item = document.getElementById("text3").value;
    let i;
    for(i = 0; i < array.length; i++) {
        if(item.length == 0) {
            document.getElementById("find").innerHTML = "請輸入欲查詢之元素";
        }
        else if(item == array[i]) {
            i += 1;
            document.getElementById("find").innerHTML = "數字" + item + "在陣列的第" + i +"個位置";
            break;
        }
        else {
            document.getElementById("find").innerHTML = "數字" + item + "不在陣列中";
        }
    }
}

const four = () => {
    let text = document.getElementById("text").value;
    let array =  text.split(",");
    document.getElementById("reverse").innerHTML = array.reverse();
}

const five1 = () => {
    let text = document.getElementById("text").value;
    let item = document.getElementById("text5").value;
    let array =  text.split(",");
    if(item.length == 0) {
        document.getElementById("add").innerHTML = "請輸入欲新增之元素";
    }
    else {
        array.push(item);
        document.getElementById("add").innerHTML = "新增元素後的陣列為:" + array;
    }
}

const five2 = () => {
    let text = document.getElementById("text").value;
    let array =  text.split(",");
    array.pop();
    document.getElementById("delete").innerHTML = "刪除元素後的陣列為:" + array;
}

const six = () => {
    let text = document.getElementById("text").value;
    let item = document.getElementById("text6").value;
    let array =  text.split(",");
    if(item.length == 0) {
        document.getElementById("remove").innerHTML = "請輸入欲移除之元素";
    }
    else {
        item = parseInt(item) - 1;
        array.splice(item,1);
        document.getElementById("remove").innerHTML = "移除元素後的陣列為:" + array;
    }
}

//10,2,5,8,6