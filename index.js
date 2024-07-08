function bemVindo(){
    document.write("Seja bem-vindo Thiago <br>");
}

bemVindo();

function calcularIdade(ano, mes){
    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth() + 1;
    if(mes >= mesAtual){
        document.write(`A idade de thigo é ${anoAtual - ano}<br>`);
    }else{
        document.write(`A idade de thigo é ${--anoAtual - ano}<br>`);
    }
}

calcularIdade(1993, 1);
