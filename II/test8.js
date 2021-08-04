const save = () => {
    let name = document.getElementsByName("userName").value.trim();
    let password = document.getElementsByName("password").value.trim();
    let ul = document.querySelector("ul");
    
    let li = document.createElement('li');
    if (!name || !password) {
        return false;
    }
    else {
        li.innerHTML = name.value + password.value + '<button href="javascript:;">Delete</button>' + '<button href="javascript:;">Edit</button>';
    }
}