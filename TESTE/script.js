// Função para validar nome completo
function validarNome(nome) {
    return nome.trim().includes(" ") && nome.trim().length > 0;
}

// Função para validar matrícula (8 dígitos)


    function validarMatricula(matricula) {
        return !isNaN(matricula.length) ===  matricula >= 10000000 && matricula <= 99999999;
        
}

// Função para validar nota (entre 0 e 10)
function validarNota(nota) {
    return nota >= 0 && nota <= 10;
}

// Função para calcular a média das 3 notas
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

// Função para cadastrar os alunos
function cadastrarAlunos() {
    let alunos = [];
    let quantidade = 0;

    // Loop para cadastrar no mínimo 5 alunos e no máximo 100 alunos
    while (quantidade < 5 || confirm(" Deseja cadastrar mais um aluno?")) {
        if (quantidade >= 100) {
            alert(" Você atingiu o limite de 100 alunos.");
            break;
        }

        // Captura e validação do nome
        let nome = prompt("Informe o nome completo do funcionário:");
        if (!validarNome(nome)) {
            alert("Inválido. O nome deve ser completo (Nome e Sobrenome).");
            continue;
        }

        // Captura e validação da matrícula
        
        let matricula = prompt(" Informe a matrícula do aluno (8 dígitos):");
        if (!validarMatricula(matricula)) {
            alert(" Matrícula inválida. Deve conter 8 números.");
            continue;          

            
        }

        // Captura e validação da matéria
        let materia = prompt(" Informe a matéria do aluno:");
        if (materia.trim() === "") {
            alert(" A matéria não pode ser vazia.");
            continue;
        }

        // Captura e validação das 3 notas
        let n1 = parseFloat(prompt(" Informe a primeira nota (entre 0 e 10):"));
        if (isNaN(n1) || !validarNota(n1)) {
            alert(" Nota inválida. A primeira nota deve ser entre 0 e 10.");
            continue;
        }

        let n2 = parseFloat(prompt(" Informe a segunda nota (entre 0 e 10):"));
        if (isNaN(n2) || !validarNota(n2)) {
            alert(" Nota inválida. A segunda nota deve ser entre 0 e 10.");
            continue;
        }

        let n3 = parseFloat(prompt("Informe a terceira nota (entre 0 e 10):"));
        if (isNaN(n3) || !validarNota(n3)) {
            alert(" Nota inválida. A terceira nota deve ser entre 0 e 10.");
            continue;
        }

        // Cálculo da média
        let media = calcularMedia(n1, n2, n3);

        // Armazenar o aluno no array
        alunos.push({
            nome: nome,
            matricula: matricula,
            materia: materia,
            notas: [n1, n2, n3],
            media: media.toFixed(2) // Media com 2 casas decimais
        });

        quantidade++;
    }

    // Exibir os alunos cadastrados e suas respectivas médias no documento HTML
    if (alunos.length > 0) {
        document.write("<h2> Alunos Cadastrados: </h2>");
        document.write("<ul>");
        for (let i = 0; i < alunos.length; i++) {
            document.write("<li>");
            document.write(" Nome: " + alunos[i].nome + " | ");
            document.write(" Matrícula: " + alunos[i].matricula + " | ");
            document.write(" Matéria: " + alunos[i].materia + " | ");
            document.write("N1: " + alunos[i].notas[0].toFixed(2) + " / ");
            document.write("N2: " + alunos[i].notas[1].toFixed(2) + " / ");
            document.write("N3: " + alunos[i].notas[2].toFixed(2) + " / ");
            document.write("Média: " + alunos[i].media);
            document.write("</li>");
        }
        document.write("</ul>");
    } else {
        document.write("<p>Nenhum aluno foi cadastrado.</p>");
    }
}

// Iniciar o processo de cadastro
cadastrarAlunos();