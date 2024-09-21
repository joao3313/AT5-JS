// Crie um algoritmo de pagamento em que se cadastre os prestadores de serviço
// pegando os seguintes dados: nome completo, um número do PIS/PASEP, o valor da sua hora trabalhada e a quantidade de horas trabalhadas de 5 a 50 pessoas.
// No fim dos cadastros deve-se mostrar os dados, o valor bruto do serviço e o líquido descontado na página html dos cadastrados.
// Regras
// Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação.
// O valor da hora: mínimo de 20 reais e máximo de 500 reais.
// A quantidade de horas sempre estará entre 20 e 200 horas trabalhadas no mês.
// O valor líquido do prestador de serviço tem descontos de impostos a recolher sendo o INSS (tabela), ISS (5%) e IR (tabela).
// INSS

let prestadores = [];
let continuar = true;
let contador = 0;

// Função para validar se um nome completo foi inserido (pelo menos dois nomes separados por espaço)
function validarNome(nome) {
    return nome && nome.indexOf(" ") >= 2;
}


// Função para validar o PIS/PASEP (11 dígitos)
function validarPis(pis) {
    return pis && pis.length === 11;
}

// Função para validar o valor da hora trabalhada (mínimo R$ 20, máximo R$ 500)
function validarValorHora(valorHora) {
    return !isNaN(valorHora) && valorHora >= 20 && valorHora <= 500;
}

// Função para validar a quantidade de horas trabalhadas (mínimo 20, máximo 200 horas)
function validarHorasTrabalhadas(horas) {
    return !isNaN(horas) && horas >= 20 && horas <= 200;
}

// Loop para garantir que no mínimo 5 prestadores sejam cadastrados
while (continuar || prestadores.length < 3) {
    let nome, pis, valorHora, horasTrabalhadas;

    // Garantir que o nome completo seja inserido corretamente
    do {
        nome = prompt("Nome completo do prestador de serviço:");
        if (!validarNome(nome)) {
            alert("Insira o nome e sobrenome.");
        }
    } while (!validarNome(nome)); {}

    // Garantir que o PIS/PASEP seja válido
    do {
        pis = prompt("Número do PIS/PASEP (11 dígitos):");
        if (!validarPis(pis)) {
            alert("O PIS/PASEP deve conter 11 dígitos.");
        }
    } while (!validarPis(pis));

    // Garantir que o valor da hora trabalhada seja válido
    do {
        valorHora = parseFloat(prompt("Valor da hora trabalhada (R$ 20,00 a R$ 500,00):"));
        if (!validarValorHora(valorHora)) {
            alert("O valor da hora deve ser entre R$ 20,00 e R$ 500,00.");
        }
    } while (!validarValorHora(valorHora));

    // Garantir que a quantidade de horas trabalhadas seja válida
    do {
        horasTrabalhadas = parseFloat(prompt("Horas trabalhadas (20 a 200 horas):"));
        if (!validarHorasTrabalhadas(horasTrabalhadas)) {
            alert("A quantidade de horas trabalhadas deve ser entre 20 e 200.");
        }
    } while (!validarHorasTrabalhadas(horasTrabalhadas));

    // Calcular valor bruto e valor líquido
    let valorBruto = valorHora * horasTrabalhadas;
    let valorLiquido = valorBruto - (valorBruto * 0.11 + valorBruto * 0.075 + valorBruto * 0.05); // Descontos: INSS 11%, ISS 5%, IR 7.5%

    // Adicionar prestador à lista
    prestadores.push({ nome, pis, valorBruto, valorLiquido });
    contador++;

    // Exigir no mínimo 5 cadastros
    if (prestadores.length >= 5) {
        continuar = prompt("Deseja cadastrar mais prestadores? (sim/não)").toLowerCase() === "sim";
    } else {
        alert(`Você precisa cadastrar no mínimo 5 prestadores. Faltam ${5 - prestadores.length} prestadores.`);
    }
}

// Exibir resultados após o cadastro
document.write("<h2>Prestadores cadastrados:</h2>");
for (let i = 0; i < prestadores.length; i++) {
    let mensagem = `
        <p>
        Prestador ${i + 1}:<br>
        Nome: ${prestadores[i].nome}<br>
        PIS/PASEP: ${prestadores[i].pis}<br>
        Valor Bruto: R$ ${prestadores[i].valorBruto.toFixed(2)}<br>
        Valor Líquido: R$ ${prestadores[i].valorLiquido.toFixed(2)}<br>
        </p>
        <hr>
    `;
    document.write(mensagem);
}



