function plusClick(){

    console.log("click")


    siffra = siffra + 1;
    document.getElementById("svar").innerhtml = siffra

}

const minusknapp =document.getElementById("minusClick");
minusknapp.addEventListener("click" , minusClick)

