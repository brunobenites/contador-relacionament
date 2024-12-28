// Função para calcular o tempo de relacionamento
function calcularTempo() {
    const dataInicio = new Date("2022-06-15"); // Substitua pela data que você e sua namorada se conheceram
    const dataAtual = new Date();

    const diff = dataAtual - dataInicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);

    let tempo = `${anos} ano(s) e ${meses} mês(es)`;

    // Exibe o tempo de relacionamento na página
    document.getElementById("tempo-relacionamento").textContent = `Estamos juntos há ${tempo}`;
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
