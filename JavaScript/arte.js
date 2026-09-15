/* ===================== LISTA DE PROJETOS DE ARTE ===================== */
const projetosArte = [
    {
      titulo: "Meus Amigos em Jujutsu",
      desc: "Ilustrações que fiz dos meus amigos no estilo e universo de Jujutsu Kaisen com técnicas amaldiçoadas próprias.",
      img: "Imagens/Arte/Arte-Projetos/GF-JJK.png",
      link: "https://www.instagram.com/p/DJKoxxxSIb7/"
    },
    {
      titulo: "OCs RPG",
      desc: "Criação de concept art e fichas visuais para personagens originais de campanhas de RPG.",
      img: "Imagens/Arte/Arte-Projetos/Port.png",
      link: "https://www.instagram.com/p/DFVgYYnR585/"
    },
    {
      titulo: "Ordem Paranormal",
      desc: "Artes e comissões inspiradas no universo de Ordem Paranormal com estética de horror.",
      img: "Imagens/Arte/Arte-Projetos/GF-Ordem.png",
      link: "https://www.instagram.com/p/DGRcjRfRV6v/"
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
      if (projeto.link !== '#') card.target = '_blank';
  
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