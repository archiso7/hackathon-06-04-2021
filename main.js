function Submit(){
    var res = [document.getElementById("1").checked,
    document.getElementById("2").checked,
    document.getElementById("3").checked,
    document.getElementById("4").checked,
    document.getElementById("5").checked,
    document.getElementById("6").checked,
    document.getElementById("7").checked,
    document.getElementById("8").checked,
    document.getElementById("9").checked,
    document.getElementById("10").checked,
    document.getElementById("11").checked]

    var severe = 0;

    for(i of res){
        if(i == true){
            severe += 1;
        }
    }

    if(res[0] == true || severe >= 3){
        Sus();
    }
    else if(severe < 1){
        document.write("<h1>You have no signs of a concussion.</h1>")
    }
    else{
        document.write("<h1>You should be fine, but keep monitoring the injury for a bit longer and rest often.</h1>")
    }
}

function Sus(){
    document.write("<h1>You have a suspected concussion, please go and see a trained healthcare provider immediately.</h1>");
}