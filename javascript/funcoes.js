function pi(){
    return 3.14;
}

let total = 5 * pi();

console.log(pi());

function imc(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.80));

function corFavorita(cor){
    if(cor === 'azul'){
        return "eu gosto do ceu";
    }else if(cor === 'verde'){
        return "Eu gostos de mato";
    }else {
        return "Eu não gosto de cores";
    }
}

addEventListener('click', () =>{ console.log('oi') });

function mostraConsole(){
    console.log('Oi Mostra console')
}

addEventListener('click', mostraConsole());

