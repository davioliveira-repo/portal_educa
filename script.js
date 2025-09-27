// Eventos do mês
const eventos = {
  3: {
    data: "SET.03",
    titulo: "Palestra sobre prevenção ao suicídio",
    local: "Auditório",
    horario: "9:00 AM",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Twemoji12_1f397.svg/250px-Twemoji12_1f397.svg.png"
  },
  7: {
    data: "SET.07",
    titulo: "Desfile da Independência",
    local: "Praça Central",
    horario: "8:00 AM",
    imagem: "https://cdn-icons-png.flaticon.com/512/197/197386.png" // bandeira Brasil
  },
  15: {
    data: "SET.15",
    titulo: "Reunião de Pais e Mestres",
    local: "Sala 12",
    horario: "14:00 PM",
    imagem: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  },
  22: {
    data: "SET.22",
    titulo: "Campanha de Doação de Sangue",
    local: "Ginásio",
    horario: "10:00 AM",
    imagem: "https://cdn-icons-png.flaticon.com/512/1904/1904425.png"
  }
};

// Seleciona elementos do card
const eventoData = document.getElementById("evento-data");
const eventoTitulo = document.getElementById("evento-titulo");
const eventoLocal = document.getElementById("evento-local");
const eventoHorario = document.getElementById("evento-horario");
const eventoImagem = document.getElementById("evento-imagem");

// Adiciona cliques nos dias do calendário
document.querySelectorAll("td[data-dia]").forEach(td => {
  td.textContent = td.dataset.dia; // Mostrar número do dia

  td.addEventListener("click", () => {
    const dia = td.dataset.dia;

    if (eventos[dia]) {
      // Atualiza card com informações do evento
      eventoData.textContent = eventos[dia].data;
      eventoTitulo.innerHTML = `<strong>EVENTO:</strong> ${eventos[dia].titulo}`;
      eventoLocal.innerHTML = `<strong>LOCAL:</strong> ${eventos[dia].local}`;
      eventoHorario.innerHTML = `<strong>HORÁRIO:</strong> ${eventos[dia].horario}`;
      eventoImagem.src = eventos[dia].imagem;
    } else {
      // Sem evento
      eventoData.textContent = `SET.${dia.padStart(2, "0")}`;
      eventoTitulo.innerHTML = `<strong>EVENTO:</strong> Nenhum evento neste dia`;
      eventoLocal.innerHTML = `<strong>LOCAL:</strong> -`;
      eventoHorario.innerHTML = `<strong>HORÁRIO:</strong> -`;
      eventoImagem.src = "https://cdn-icons-png.flaticon.com/512/565/565547.png"; // ícone vazio
    }
  });
});
Object.keys(eventos).forEach(dia => {
  const celula = document.querySelector(`td[data-dia="${dia}"]`);
  if (celula) {
    celula.classList.add("evento-dia");
  }
});