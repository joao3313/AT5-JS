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





function cadastrarVestibulandos() {
    const vestibulandos = [];
    let totalVestibulandos = parseInt(prompt("Quantos vestibulandos você deseja cadastrar? (entre 5 e 20)"));

    // Validação do número de vestibulandos
    while (totalVestibulandos < 5 || totalVestibulandos > 20 || isNaN(totalVestibulandos)) {
        totalVestibulandos = parseInt(prompt("Número inválido. Deve ser entre 5 e 20. Tente novamente:"));
    }

    for (let i = 0; i < totalVestibulandos; i++) {
        const nome = prompt("Nome completo:");
        const numeroInscricao = prompt("Número de inscrição:");
        const anoNascimento = prompt("Ano de nascimento:");
        const notas = {};

        // Coleta as notas das 5 matérias
        notas.natureza = parseInt(prompt("Nota de Natureza (0-1000):"));
        notas.humanas = parseInt(prompt("Nota de Humanas (0-1000):"));
        notas.linguagens = parseInt(prompt("Nota de Linguagens (0-1000):"));
        notas.matematica = parseInt(prompt("Nota de Matemática (0-1000):"));
        notas.redacao = parseInt(prompt("Nota de Redação (0-1000):"));

        vestibulandos.push({ nome, numeroInscricao, anoNascimento, notas });
    }

    // Avaliação das notas
    vestibulandos.forEach(vestibulando => {
        document.write(`<h3>${vestibulando.nome}</h3>`);
        for (const [materia, nota] of Object.entries(vestibulando.notas)) {
            let mensagem;
            if (nota >= 550) {
                mensagem = "Aprovado";
            } else if (nota < 400) {
                mensagem = "Reprovado";
            } else {
                mensagem = "Recuperação";
            }
            document.write(`${materia.charAt(0).toUpperCase() + materia.slice(1)}: ${nota} - ${mensagem}<br>`);
        }
        document.write("<br>");
    });
}

// Inicia o cadastro
cadastrarVestibulandos();
