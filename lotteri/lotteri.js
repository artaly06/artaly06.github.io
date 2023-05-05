const svar_div = document.getElementById("svar_div")
const antal_vinster = document.getElementById("input_antal_vinster")

const vinster = [
    "StatTrak™ SCAR-20 | Grotto (Factory New)",
    "StatTrak™ SCAR-20 | Grotto (Minimal Wear)",
    "StatTrak™ SCAR-20 | Grotto (Field-Tested)",
    "StatTrak™ SCAR-20 | Grotto (Well-Worn)",
    "StatTrak™ SCAR-20 | Grotto (Battle-Scarred)",
    "SCAR-20 | Grotto (Factory New)",
    "SCAR-20 | Grotto (Minimal Wear)",
    "SCAR-20 | Grotto (Field-Tested)",
    "SCAR-20 | Grotto (Well-Worn)",
    "SCAR-20 | Grotto (Battle-Scarred)"


]

function SlumpaClick() {

    //console.log(`click $(antal_vinster.value)`)

    let vinst = `<h3>Dina Vinster: </h3>`
    let antalv = antal_vinster.value
    let int_antalv = parseInt(antalv)

    console.log(`click ${antal_vinster.value}`)

    for (i=0; i<int_antalv; i++){
        console.log(`i= ${i}`)
        let slumptal = Math.floor(Math.random()  * 9)

        let t_vinst = vinster[slumptal]

        vinst += `<p> ${t_vinst} </p>`
    }

    svar_div.innerHTML = vinst
    //console.log(`click${antal_vinster.value})`)


}