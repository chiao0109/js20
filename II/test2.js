const text = () => {
    let text = document.getElementById("text").value;
    const eng =["A","B","C","D","E","F","G","H","I","J",
        "K",'L','M','N','O','P','Q','R','S','T',
        "U",'V','W','X','Y','Z']
    const sign = ['.-','-...','-.-.','-..','.','..-.','--.',
        '....','..','.---','-.-','.-..','--','-.','---','.--.',
        '--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']
    const morse = text.split(" ");
    console.log(morse)
    let result="";
    morse.forEach((x) => {
        result += eng[sign.indexOf(x)]
        document.getElementById("change").innerHTML = result;
    });
}