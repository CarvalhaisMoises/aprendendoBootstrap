function mostrarDados() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let pressao = document.getElementById("pressao").value;
    let temperatura = document.getElementById("temperatura").value;
    let frequencia = document.getElementById("frequencia").value;
    let respiracao = document.getElementById("respiracao").value;
    let evolucao = document.getElementById("evolucao").value;
    let medicamento = document.getElementById("medicamento").value;
    let dosagem = document.getElementById("dosagem").value;
    let horario = document.getElementById("horario").value;

    let resultado = `
        <h5>Prontuário do Paciente</h5>
        <strong>Nome:</strong> ${nome} <br>
        <strong>Idade:</strong> ${idade} <br>
        <strong>Sexo:</strong> ${sexo} <br>
        <strong>Pressão:</strong> ${pressao} <br>
        <strong>Temperatura:</strong> ${temperatura} <br>
        <strong>Frequência:</strong> ${frequencia} <br>
        <strong>Respiração:</strong> ${respiracao} <br>
        <strong>Evolução:</strong> ${evolucao} <br>
        <strong>Medicamento:</strong> ${medicamento} <br>
        <strong>Dosagem:</strong> ${dosagem} <br>
        <strong>Horário:</strong> ${horario}
    `;

    alert("Prontuário salvo!\n\n" + nome);
document.getElementById("resultado").innerHTML = resultado;
}