function obterDataPorExtenso() {
    const data = new Date();
    
    // Array com os nomes dos dias da semana
    const nomesDiasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    
    const diaSemana = nomesDiasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();

    // Array com os nomes dos meses
    const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    // Converter o número do mês para o nome do mês correspondente
    const mesPorExtenso = nomesMeses[mes];

    // Retornar a data por extenso
    return `${diaSemana}, ${dia} de ${mesPorExtenso} de ${ano}`;
}

// Exibir a data por extenso no elemento com ID "dataExibida"
document.getElementById('dataExibida').textContent = obterDataPorExtenso();

function validarInteiro(input) {
    // Remove todos os caracteres não numéricos do valor do input
    input.value = input.value.replace(/\D/g, '');
}