/* ============================ ARTE NO POP-UP ============================ */
const minhasArtes = [
    {
      titulo: "Nome do Amigo 1",
      desc: "Explicação sobre a técnica amaldiçoada ou detalhes da arte.",
      img: "../Imagens/Arte/Insta/JJK/Eu-JJK.png"
    },
    {
      titulo: "Nome do Amigo 2",
      desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
      img: "../Imagens/Arte/Insta/JJK/Gih-JJK.png"
    },
    {
        titulo: "Nome do Amigo 2",
        desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
        img: "../Imagens/Arte/Insta/JJK/Isa-JJK.png"
      },
      {
        titulo: "Nome do Amigo 2",
        desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
        img: "../Imagens/Arte/Insta/JJK/Bia-JJK.png"
      },
      {
        titulo: "Nome do Amigo 2",
        desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
        img: "../Imagens/Arte/Insta/JJK/Feh-JJK.png"
      },
      {
        titulo: "Nome do Amigo 2",
        desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
        img: "../Imagens/Arte/Insta/JJK/Let-JJK.png"
      },
      {
        titulo: "Nome do Amigo 2",
        desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
        img: "../Imagens/Arte/Insta/JJK/Fet-JJK.png"
      },
      {
        titulo: "Nome do Amigo 2",
        desc: "Texto sobre o processo de criação ou curiosidade do personagem.",
        img: "../Imagens/Arte/Insta/JJK/Marc-JJK.png"
      }
  ];
  
  /* ============= CÓDIGO DA GALERIA/POP-UP ============= */
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('galeriaGrid');
    const modal = document.getElementById('modalArte');
    const modalImg = document.getElementById('modalImg');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDesc = document.getElementById('modalDesc');
    const closeBtn = document.getElementById('modalClose');
  
    /* Desenha os cards na tela */
    if (grid) {
      grid.innerHTML = '';
      minhasArtes.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `<img src="${item.img}" alt="${item.titulo}">`;
        
        card.addEventListener('click', () => abrirModal(index));
        grid.appendChild(card);
      });
    }
  
    /* Abre o Pop-up com as informações da imagem */
    function abrirModal(index) {
      const item = minhasArtes[index];
      modalImg.src = item.img;
      modalTitulo.textContent = item.titulo;
      modalDesc.textContent = item.desc;
      modal.classList.add('active');
    }
  
    /* Fecha o Pop-up */
    function fecharModal() {
      modal.classList.remove('active');
    }
  
    closeBtn.addEventListener('click', fecharModal);
  
    /* Fecha se clicar fora do Pop-up */
    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharModal();
    });
  });