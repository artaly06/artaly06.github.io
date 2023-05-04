const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "StatTrak™ SCAR-20 | Grotto (Factory New)",
    "StatTrak™ SCAR-20 | Grotto (Minimal Wear)",
    "StatTrak™ SCAR-20 | Grotto (Field-Tested)",
    "StatTrak™ SCAR-20 | Grotto (Well-Worn)",
    ""


]

function SlumpaClick() {

    //console.log(`click $(antal_vinster.value)`)

    let vinst = `<h3>Dina Vinster: </h3>`
    let antalv = antal_vinster.value
    let int_antalv = parseInt(antalv)

    for (i=0; i>int_antalv; i++){
        let slumptal = math.floor.random()  * 12

        let t_vinst = vinster[slumptal]

        vinst += `<p> ${t_vinst} </p>`
    }

    console.log(`click${antal_vinster.value})`)


}