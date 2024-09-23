// Houve um vestibular para ingresso de alunos na instituição baseado em 5 matérias: Natureza, Humanas, Linguagens, Matemática e Redação com notas de 0 a
// 1000. Precisa-se de um sistema que cadastre o nome completo, número de inscrição, ano de nascimento e as matérias com as notas dos vestibulandos de 5 até 20 pessoas.
// A mensagem "Aprovado", nas matérias acima de 550;
// A mensagem "Reprovado", nas matérias abaixo de 400;
// A mensagem "Recuperação", nas matérias entre 401 e 549.
// Exiba todos os dados cadastrados e os seus resultados na página HTML.
// Regras
// Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação.
// Os anos de nascimento ficam entre 1901 e 2007.
// Número de Inscrição tem 10 dígitos sendo que deve começar com 2024XXXXXX.





// Função para validar nome completo .... Includes é um conjunto de caracteres dentro de uma string
function validarNome(nome) {
    return nome.trim().includes(" ") && nome.trim().length > 0;
}

// Função para validar idade
function validarIdade(idade) {
    return idade >= 15 && idade <= 119;
}

// Função para validar salário
function validarSalario(salario) {
    return salario >= 2000 && salario <= 20000;
}

// Função para cadastrar os funcionários
function cadastrarFuncionarios() {
    let funcionarios = [];
    let quantidade = 0;

    // Loop até que o usuário cadastre no mínimo 5 e no máximo 100 funcionários
    while (quantidade < 5 || confirm("Deseja cadastrar mais um funcionário?")) {
        if (quantidade >= 100) {
            alert("Você atingiu o limite de 100 funcionários.");
            break;
        }

        let nome = prompt("Informe o nome completo do funcionário:");
        if (!validarNome(nome)) {
            alert("Inválido. O nome deve ser completo (Nome e Sobrenome).");
            continue;
        }

        let idade = parseInt(prompt("Informe a idade do funcionário:"));
        if (isNaN(idade) || !validarIdade(idade)) {
            alert("Inválida. Deve ser entre 15 e 119 anos.");
            continue;
        }

        let salario = parseFloat(prompt("Informe o salário do funcionário (entre R$ 2000,00 e R$ 20000,00):"));
        if (isNaN(salario) || !validarSalario(salario)) {
            alert("Inválido. Deve ser entre R$ 2000,00 e R$ 20000,00.");
            continue;
        }

        // Armazenar o funcionário no array
        funcionarios.push({ nome: nome, idade: idade, salario: salario });
        quantidade++;
    }

    // Exibir funcionários cadastrados no documento HTML ! <li> representa uma tag HTML que representa uma lista
    if (funcionarios.length > 0) {
        document.write("<h2> Funcionários Cadastrados: </h2>");
        document.write("<ul>");
        for (let i = 0; i < funcionarios.length; i++) {
            document.write("<li> Nome: " + funcionarios[i].nome + ", Idade: " + funcionarios[i].idade + ", Salário: R$ " + funcionarios[i].salario.toFixed(2) + "</li>");
        }
        document.write("</ul>"); // representa uma lista não ordenada
    } else {
        document.write("<p> Nenhum funcionário foi cadastrado. </p>");
    }
}

// Iniciar o processo de cadastro
cadastrarFuncionarios();