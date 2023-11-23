<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilo.css">
    <title>Trabalho CPF</title>
</head>

<body>
    <div>
        <div style="margin-top: 3%;">
            <h2>Calculo dos Digitos Verificadores CPF</h2>
        </div>

        <div>
            <h4>Informe os 9 Digitos:</h4>
        </div>

        <div>
            <input id="entCpf" type="number" placeholder="Digite: ">
            <button id="calc" onclick="calcular()">Calcular</button>
        </div>

        <div id="digitos">
            
        </div>

    </div>

    <script src="index.js"></script>
</body>

</html>
---------------------------------------------------------------------------------------
*{
    box-sizing: border-box;
}

body {
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    margin: auto auto;
    align-items: center;
    justify-content: center;
    background-color:rgb(204, 158, 58);
    font: normal 20pt Arial;
    color: white;
}

div {
    display: flex;
    flex-flow: row wrap;
    margin: auto auto;
    align-items: center;
    justify-content: center;
    width: 100%;

}

h3 {
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-bottom: 0%;
}

button#calc {
    background-color: rgb(207, 195, 168);
    width: 100px;
    height: 40px;
    border-radius: 0 10px 10px 0;
}

input[type=number] {
    width: 200px;
    height: 40px;
    background-color: rgb(207, 195, 168);
}

input[type=number]::-webkit-inner-spin-button {
    appearance: none;
}
---------------------------------------------------------------------------------------

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
