const idade = -12
if(idade<0){
    console.log("Erro!! Número inválido.")
}
else{
    if(idade<13){
        console.log("Você é uma criança.")
    }
    else{
        if(idade<18){
            console.log("Você é um adolescente.")
        }
        else{
            if(idade<65){
                console.log("Você é um adulto.")
            }
            else{
                console.log("Você é um idoso.")
            }
        }
    }
}

//OUTRA MANEIRA
// const idade = 70

// if(idade<0){
//     console.log("ERRO")
// }
// else if(idade<13){
//     console.log("CRIANÇA")
// }
// else if(idade<18){
//     console.log("ADOLESCENTE")
// }
// else if(idade<65){
//     console.log("ADULTO")
// }
// else{
//     console.log("IDOSO")
// }