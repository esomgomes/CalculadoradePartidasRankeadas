function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Define as faixas de vitórias para cada nível
    if (vitorias < 10) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível de Ferro`;
    } else if (vitorias >= 11 && vitorias <= 20) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível de Bronze`;
    } else if (vitorias >= 21 && vitorias <= 50) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível de Prata`;
    } else if (vitorias >= 51 && vitorias <= 80) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível de Ouro`;
    } else if (vitorias >= 81 && vitorias <= 90) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível de Diamante`;
    } else if (vitorias >= 91 && vitorias <= 100) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível Lendário`;
    } else if (vitorias >= 101) {
        return `O jogador tem um saldo de ${saldoVitorias} e está no nível Imortal`;
    } else {
        return "Vitórias inválidas";
    }
}

// Exemplo de uso da função
const resultado = calcularNivel(25, 5);
console.log(resultado);
