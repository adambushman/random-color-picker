function generateHex() {
    let hexx = "#";
    let num = 0;
    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * 16);
        
        switch(num) {
            case 10:
                hexx = hexx + "A";
                break;
            case 11:
                hexx = hexx + "B";
                break;
            case 12:
                hexx = hexx + "C";
                break;
            case 13:
                hexx = hexx + "D";
                break;
            case 14:
                hexx = hexx + "E";
                break;
            case 15:
                hexx = hexx + "F";
                break;
            default:
                hexx = hexx + num.toString();
                break;
        }
    }
    return(hexx);
}

function newBackground() {
    const hexx = generateHex()
    document.documentElement.style.setProperty("--back-color", hexx);
    document.getElementById("hexCode").innerHTML = hexx;
}