const today = () => {
    let date = new Date;
    alert("今天日期是" + date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日");
}

let out = () => {
    alert("你不要我了");
}

let choice = () => {
    let item = document.getElementById("item");
    alert(item.value + "在這");
}
