let mensagemDeRetorno
let power = true;

while(power){
    console.log(calcularRank(38))
    function calcularRank(vitorias){
        function verificarClassificacao(){
            if(vitorias <= 10) return 'Ferro'
            else if (vitorias > 11 && vitorias <= 20) return 'Bronze'
            else if (vitorias > 21 && vitorias <= 50) return 'Prata'
            else if (vitorias > 51 && vitorias <= 80) return 'Ouro'
            else if (vitorias > 81 && vitorias <= 90) return 'Diamante'
            else if (vitorias > 91 && vitorias <= 100) return 'Lendário' 
            else if (vitorias >= 101 ) return 'Imortal'
        }
        return mensagemDeRetorno = `O Herói tem de saldo de ${vitorias} está no nível de ${verificarClassificacao()}`
    }
    console.log("Deseja fazer outra consulta?")
    power= changePower(power)
    console.log(power)
}

function changePower(status){
    console.log("Aqui")
    status = false;
    return status;
}