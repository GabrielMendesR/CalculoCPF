
function calcular() {
    // CPF 9 Digitos
    let cpf9 = document.getElementById('entCpf').value;  // Vetor - Primeiro Digito Verificador 
    if(cpf9.length == 9) {
        let soma = 0;
        const vetor1 = [10, 9, 8, 7, 6, 5, 4, 3, 2]; 
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf9.charAt(i)) * vetor1[i];
        }
        alert('Soma = ' + soma + ' | Modulo de 11 = ' + soma%11 + ' | 11 - ' + soma%11 + ' = '+ (11-(soma%11)));
        // Armazena o Primeiro Digito Verificador
        let dezena = (soma % 11 <= 1) ? 0 : 11 - (soma % 11);

        // Adiciona o Primeiro Digito Verificador
        let cpf10 = cpf9 + dezena;  // Vetor - Segundo Digito Verificador

        soma = 0;
        const vetor2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]; 
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf10.charAt(i)) * vetor2[i];
        }
        alert('Soma = ' + soma + ' | Modulo de 11 = ' + soma%11 + ' | 11 - ' + soma%11 + ' = '+ (11-(soma%11)));
        // Armazena o Segundo Digito Verificador
        let unidade = (soma % 11 <= 1) ? 0 : 11 - (soma % 11);

        document.getElementById('digitos').innerHTML = 
        `<h3>Digitos Verificadores: ${dezena}${unidade}</h3>
        <h3>CPF Completo: ${cpf9} - ${dezena}${unidade}</h3>`;
    } else {
        document.getElementById('digitos').innerHTML = `
        <h3>Valor Informado Incorreto!</h3>
        <h3>Informe 9 Digitos</h3>`;
    };
}

document.getElementById('entCpf').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        calcular();
    }
});