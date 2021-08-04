const text = () => {
    let km =document.getElementById("text").value;
    const base = 70;
    let price = "";
    if (km > 1.5) {
        if(((km-1.5)%0.5) == 0) {
            price = base + (km-1.5)/0.5*5;
        }
        else{
            price = base + (Math.ceil((km-1.5)/0.5)*5);
        }
    }
    else{
        price = base;
    }
    document.getElementById("price").innerText=price;
}