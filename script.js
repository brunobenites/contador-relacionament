// Função para calcular o tempo de relacionamento
function calcularTempo() {
    const dataInicio = new Date("2024-07-05T19:00:00"); // Data e hora que vocês se conheceram
    const dataAtual = new Date();

    // Diferença em milissegundos
    const diff = dataAtual - dataInicio;

    // Calculando os componentes de tempo
    const segundos = Math.floor(diff / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);

    // Ajustando as horas restantes
    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;

    // Exibindo o tempo de relacionamento na página
    const tempoRelacao = `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ${horasRestantes} hora(s), ${minutosRestantes} minuto(s) e ${segundosRestantes} segundo(s)`;

    // Atualizando o texto na página
    document.getElementById("tempo-relacionamento").textContent = `Estamos juntos há: ${tempoRelacao}`;
}

// Função para alternar as fotos
let indiceFoto = 0;
const fotos = document.querySelectorAll('.photo');

function alternarFotos() {
    fotos.forEach(foto => foto.classList.remove('active'));
    fotos[indiceFoto].classList.add('active');
    indiceFoto = (indiceFoto + 1) % fotos.length;
}

setInterval(alternarFotos, 3000); // Alterna as fotos a cada 3 segundos

// Chama a função para calcular o tempo
calcularTempo();

// Atualiza o tempo de relacionamento a cada segundo
setInterval(calcularTempo, 1000); // Atualiza o tempo de relacionamento a cada 1 segundo
