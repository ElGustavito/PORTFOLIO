/* ===================== LISTA DE PROJETOS DE ARTE ===================== */
const projetosArte = [
  {
    titulo: "Meus Amigos em Jujutsu",
    desc: "Ilustrações que fiz dos meus amigos no estilo e universo de Jujutsu Kaisen com técnicas amaldiçoadas próprias",
    img: "Imagens/Arte/Arte-Projetos/GF-JJK.png",
    link: "Galeria-Arte/Amigos-JJK.html"
  },
  {
    titulo: "OCs RPG",
    desc: "Personagens Originais que eu fiz e utilizei em RPGs seja jogando ou Mestrando",
    img: "Imagens/Arte/Arte-Projetos/GF-OCsRPG.png",
    link: "Galeria-Arte/OCs-RPG.html"
  },
  {
    titulo: "Ordem Paranormal",
    desc: "Artes que fiz de personagens da Obra sendo eles Personagens Oficiais e OCs de Ordem",
    img: "Imagens/Arte/Arte-Projetos/GF-Ordem.png",
    link: "Galeria-Arte/Ordem.html"
  },
  {
    titulo: "Em breve",
    desc: "Novos projetos de ilustração estão sendo finalizados e postados no Instagram em breve...",
    img: "Imagens/Projetos/Em-Breve.png",
    link: "#"
  }
];

/* ===================== RENDERIZAÇÃO NA TELA ===================== */
const projetosArteGrid = document.getElementById('projetosArteGrid');

function carregarProjetosArte() {
  if (!projetosArteGrid) return;
  
  projetosArteGrid.innerHTML = '';

  projetosArte.forEach(projeto => {
    const card = document.createElement('a');
    card.href = projeto.link;
    card.className = 'art-project-card';

    // Se for um link vazio/inválido (#), desabilita o clique visualmente
    if (projeto.link === '#') {
      card.style.cursor = 'default';
      card.addEventListener('click', (e) => e.preventDefault());
    }

    card.innerHTML = `
      <img src="${projeto.img}" alt="${projeto.titulo}">
      <div class="art-project-info">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.desc}</p>
      </div>
    `;

    projetosArteGrid.appendChild(card);
  });
}

/* Inicializa a renderização */
carregarProjetosArte();