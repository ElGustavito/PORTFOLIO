/* ===================== DADOS DOS PERFIS ===================== */
const dadosPerfis = {
  // Perfil Pessoal
  pessoal: {
    role: "Desenvolvedor Multiplataforma",
    sobre: "Me chamo Gustavo sou estudante de DSM na FATEC Marília. Venho aprendendo sobre programação e colocando esses conhecimentos em prática, com foco em desenvolvimento de sistemas e soluções funcionais.",
    sociais: [
      { nome: 'Github', icon: 'Icons/github.png.png', url: 'https://github.com/ElGustavito' },
      { nome: 'Linkedin', icon: 'Icons/linkedin.png.png', url: 'https://www.linkedin.com/in/gustavo-oliveira-745aa8364' },
      { nome: 'Instagram', icon: 'Icons/instagram.png.png', url: 'https://www.instagram.com/el_gustavlto/' }
    ],
    // Projetos Pessoal
    projetos: [
      { titulo: 'Portal de Receitas', desc: 'A plataforma definitiva para hobbistas e culinaristas. Poste suas receitas, gerencie suas criações e simplifique sua rotina na cozinha', img: 'Imagens/Projetos/Portal-Receitas.png', link: 'processo.php' },
      { titulo: 'Dungeons & Math', desc: 'Explore masmorras clássicas e domine combates em turnos onde equações matemáticas ditam o poder dos seus ataques', img: 'Imagens/Projetos/Dungeons-Math.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' }
    ]
  },
  // Perfil Arte
  arte: {
    role: "Artista Digital / Ilustrador",
    sobre: "Me chamo Gustavo sou estudante de DSM na FATEC Marília. Além de desenvolvedor também sou Artista Digital mas ainda não vendo nenhum tipo de serviço em relação a isso faço mais como Hobby e para praticar e tentar diferentes traços e estilos",
    sociais: [
      { nome: 'Instagram', icon: 'Icons/instagram.png.png', url: 'https://www.instagram.com/elgustavito_arts?igsh=cWpvejlhemNqbDJk' },
      { nome: 'X | Twitter', icon: 'Icons/x.png.png', url: 'https://x.com/ElGustavitoARTS' },
      { nome: 'Tiktok', icon: 'Icons/tiktok.png.png', url: 'https://www.tiktok.com/@elgustavit0?_r=1&_t=ZS-965VsMc0b7k' }
    ],
    // Projetos Arte
    projetos: [
      { titulo: 'Dungeons & Math', desc: 'Explore masmorras clássicas e domine combates em turnos onde equações matemáticas ditam o poder dos seus ataques', img: 'Imagens/Projetos/Dungeons-Math.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' }
    ]
  }
};

// Artes
const artes = [
  { img: 'Imagens/Arte/Eu-JJK.png', link: 'https://www.instagram.com/p/DJKoxxxSIb7/' },
  { img: 'Imagens/Arte/Jona.png', link: 'https://www.instagram.com/p/DFVgYYnR585/' },
  { img: 'Imagens/Arte/Veraz.png', link: 'https://www.instagram.com/p/DGRcjRfRV6v/' },
  { img: 'Imagens/Arte/Gih-JJK.png', link: 'https://www.instagram.com/p/DJPEYzVRSIf/' }
];

/* ===================== COMPONENTES DA TELA ===================== */
const body = document.getElementById('mainBody');
const userRole = document.getElementById('userRole');
const sobreTexto = document.getElementById('sobreTexto');
const socialLinksContainer = document.getElementById('socialLinksContainer');
const listaProjetos = document.getElementById('listaProjetos');
const listaArte = document.getElementById('listaArte');
const arteBox = document.getElementById('arteBox');

/* ===================== GERENCIAMENTO DA INTERFACE ===================== */

function carregarPerfil(modo) {
  const dados = dadosPerfis[modo];

  // Role e Texto Sobre
  userRole.innerText = dados.role;
  sobreTexto.innerText = dados.sobre;

  // Botões Sociais
  socialLinksContainer.innerHTML = '';
  dados.sociais.forEach(social => {
    const btn = document.createElement('button');
    btn.className = 'social-btn';
    btn.onclick = () => window.open(social.url, '_blank');
    btn.innerHTML = `<img src="${social.icon}" /> ${social.nome}`;
    socialLinksContainer.appendChild(btn);
  });

  // Lista de Projetos
  listaProjetos.innerHTML = '';
  dados.projetos.forEach(p => {
    const card = document.createElement('a');
    card.href = p.link;
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.img}">
      <div>
        <h3>${p.titulo}</h3>
        <p>${p.desc}</p>
      </div>
    `;
    listaProjetos.appendChild(card);
  });
}

// Lista de Artes
function renderArtes() {
  listaArte.innerHTML = '';
  artes.forEach(a => {
    const item = document.createElement('div');
    item.className = 'art-item';
    item.onclick = () => { if(a.link !== '#') window.open(a.link, '_blank'); };
    item.innerHTML = `<img src="${a.img}" alt="Arte">`;
    listaArte.appendChild(item);
  });
}

/* ===================== AVATARES ===================== */
document.getElementById('btnPessoal').onclick = function() {
  body.className = 'mode-pessoal';
  this.classList.add('active-option');
  document.getElementById('btnArte').classList.remove('active-option');
  document.getElementById('imgPessoal').classList.add('active-img');
  document.getElementById('imgArte').classList.remove('active-img');
  
  arteBox.classList.add('hidden');
  carregarPerfil('pessoal');
};

document.getElementById('btnArte').onclick = function() {
  body.className = 'mode-arte';
  this.classList.add('active-option');
  document.getElementById('btnPessoal').classList.remove('active-option');
  document.getElementById('imgArte').classList.add('active-img');
  document.getElementById('imgPessoal').classList.remove('active-img');
  
  arteBox.classList.remove('hidden');
  carregarPerfil('arte');
  renderArtes();
};

/* ===================== PAINEL RETRÁTIL ===================== */
document.querySelectorAll('.panel-header').forEach(header => {
  header.addEventListener('click', () => {
    const box = header.parentElement;
    box.classList.toggle('active-panel');
    const arrow = header.querySelector('.icon-arrow');
    arrow.src = box.classList.contains('active-panel') ? 'Icons/seta-cima.png.png' : 'Icons/seta-direita.png.png';
  });
});

/* ===================== Html Processo ===================== */
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const viewButtons = document.querySelectorAll(".view-btn");

// Abre o modal ao clicar nos botões com classe .view-btn
viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.getAttribute("data-img");
    if (modalImg) modalImg.src = imgSrc;
    if (modal) modal.classList.add("open");
  });
});

// Fechar com o botão de fechar
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    if (modal) modal.classList.remove("open");
  });
}

// Fechar ao clicar fora da imagem
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
}

// Fechar pressionando a tecla ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal) {
    modal.classList.remove("open");
  }
});

/* ===================== INICIAR ===================== */
carregarPerfil('pessoal'); // Inicia com o modo "programador"