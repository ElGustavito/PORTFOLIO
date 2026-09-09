/* ===================== DADOS DOS PERFIS ===================== */
const dadosPerfis = {
  pessoal: {
    role: "Desenvolvedor Multiplataforma",
    avatar: "Imagens/Fotos/Foto-Pessoal.png",
    sobre: [
      "Me chamo Gustavo e sou Desenvolvedor Multiplataforma com foco em Front-end e Design UI/UX",
      "Atualmente estou cursando o terceiro termo de Desenvolvimento de Software Multiplataforma (DSM) na Fatec Marília. Tenho maior domínio em JavaScript, CSS e HTML, porém venho aprendendo cada vez mais sobre programação e colocando esses conhecimentos em prática",
      "No momento, meu projeto de maior foco é o PI da faculdade, mas também venho desenvolvendo projetos menores com menos frequência, geralmente Portfolios, para aplicar os conteúdos que aprendi e evoluir cada vez mais meu portfólio principal"
    ],
    sociais: [
      { nome: 'Github', icon: 'Icons/github.png', url: 'https://github.com/ElGustavito' },
      { nome: 'Linkedin', icon: 'Icons/linkedin.png', url: 'https://www.linkedin.com/in/gustavo-oliveira-745aa8364' },
      { nome: 'Instagram', icon: 'Icons/instagram.png', url: 'https://www.instagram.com/el_gustavlto_dev/' }
    ],
    projetos: [
      { titulo: 'Portal de Receitas', desc: 'A plataforma definitiva para hobbistas e culinaristas. Poste suas receitas, gerencie suas criações e simplifique sua rotina na cozinha.', img: 'Imagens/Projetos/Portal-Receitas.png', link: 'http://elgustavito.github.io/Processo-Portal/' },
      { titulo: 'Dungeons & Math', desc: 'Explore masmorras clássicas e domine combates em turnos onde equações matemáticas ditam o poder dos seus ataques.', img: 'Imagens/Projetos/Dungeons-Math.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' }
    ]
  },
  arte: {
    role: "Artista Digital / Ilustrador",
    avatar: "Imagens/Fotos/Foto-Arte.png",
    sobre: [
      "Me chamo Gustavo e sou Artista/Ilustrador Digital. Atualmente curso DSM na Fatec Marília e tenho foco em Front-end e Design UI/UX",
      "Desde sempre faço minhas artes e ilustrações como um hobby, sem nenhum interesse comercial. Sempre tento praticar e experimentar novos estilos visuais para aprender e aperfeiçoar cada vez mais meus conhecimentos"
    ],
    sociais: [
      { nome: 'Instagram', icon: 'Icons/instagram.png', url: 'https://www.instagram.com/elgustavito_arts?igsh=cWpvejlhemNqbDJk' },
      { nome: 'X | Twitter', icon: 'Icons/x.png', url: 'https://x.com/ElGustavitoARTS' },
      { nome: 'Tiktok', icon: 'Icons/tiktok.png', url: 'https://www.tiktok.com/@elgustavit0?_r=1&_t=ZS-965VsMc0b7k' }
    ],
    projetos: [
      { titulo: 'Dungeons & Math (Arte)', desc: 'Design de personagens e cenários para o jogo.', img: 'Imagens/Projetos/Dungeons-Math.png', link: '#' },
      { titulo: 'Em Breve', desc: '...', img: 'Imagens/Projetos/Em-Breve.png', link: '#' }
    ]
  }
};

const artes = [
  { img: 'Imagens/Arte/Eu-JJK.png', link: 'https://www.instagram.com/p/DJKoxxxSIb7/' },
  { img: 'Imagens/Arte/Jona.png', link: 'https://www.instagram.com/p/DFVgYYnR585/' },
  { img: 'Imagens/Arte/Veraz.png', link: 'https://www.instagram.com/p/DGRcjRfRV6v/' },
  { img: 'Imagens/Arte/Gih-JJK.png', link: 'https://www.instagram.com/p/DJPEYzVRSIf/' },
  { img: 'Imagens/Arte/Felipe-JJK.png', link: 'https://www.instagram.com/p/DJeyYfURGP9/' }
];

/* ===================== ELEMENTOS DA TELA ===================== */
const body = document.getElementById('mainBody');
const currentAvatar = document.getElementById('currentAvatar');
const userRole = document.getElementById('userRole');
const sobreTexto = document.getElementById('sobreTexto');
const socialLinksContainer = document.getElementById('socialLinksContainer');
const listaProjetos = document.getElementById('listaProjetos');
const listaArte = document.getElementById('listaArte');
const arteBox = document.getElementById('arteBox');
const navArteLink = document.getElementById('navArteLink');

/* ===================== RENDERIZAÇÃO ===================== */
function carregarPerfil(modo) {
  const dados = dadosPerfis[modo];

  if (currentAvatar) currentAvatar.src = dados.avatar;
  if (userRole) userRole.innerText = dados.role;

  /* Renderizar parágrafos do "Sobre mim" */
  if (sobreTexto) {
    sobreTexto.innerHTML = '';
    dados.sobre.forEach(paragrafoText => {
      const p = document.createElement('p');
      p.className = 'about-text';
      p.innerText = paragrafoText;
      sobreTexto.appendChild(p);
    });
  }

  /* Renderizar Redes Sociais */
  if (socialLinksContainer) {
    socialLinksContainer.innerHTML = '';
    dados.sociais.forEach(social => {
      const btn = document.createElement('button');
      btn.className = 'social-btn';
      btn.onclick = () => window.open(social.url, '_blank');
      btn.innerHTML = `<img src="${social.icon}" alt="${social.nome}"> ${social.nome}`;
      socialLinksContainer.appendChild(btn);
    });
  }

  /* Renderizar Lista de Projetos */
  if (listaProjetos) {
    listaProjetos.innerHTML = '';
    dados.projetos.forEach(p => {
      const card = document.createElement('a');
      card.href = p.link;
      card.className = 'featured-card';
      if (p.link !== '#') card.target = "_blank";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.titulo}">
        <div class="featured-info">
          <h3>${p.titulo}</h3>
          <p>${p.desc}</p>
        </div>
      `;
      listaProjetos.appendChild(card);
    });
  }
}

function renderArtes() {
  if (listaArte) {
    listaArte.innerHTML = '';
    artes.forEach(a => {
      const item = document.createElement('div');
      item.className = 'art-item';
      item.onclick = () => { if (a.link !== '#') window.open(a.link, '_blank'); };
      item.innerHTML = `<img src="${a.img}" alt="Arte">`;
      listaArte.appendChild(item);
    });
  }
}

/* ===================== BOTÃO SELETOR ===================== */
const btnPessoal = document.getElementById('btnPessoal');
const btnArte = document.getElementById('btnArte');

if (btnPessoal) {
  btnPessoal.onclick = function() {
    body.className = 'mode-pessoal';
    this.classList.add('active');
    if (btnArte) btnArte.classList.remove('active');
    
    // Ocultar Navbar e Galeria de Arte
    if (arteBox) arteBox.classList.add('hidden');
    if (navArteLink) navArteLink.classList.add('hidden');
    carregarPerfil('pessoal');
  };
}

if (btnArte) {
  btnArte.onclick = function() {
    body.className = 'mode-arte';
    this.classList.add('active');
    if (btnPessoal) btnPessoal.classList.remove('active');
    
    // Exibir Galeria e Link na Navbar
    if (arteBox) arteBox.classList.remove('hidden');
    if (navArteLink) navArteLink.classList.remove('hidden');
    carregarPerfil('arte');
    renderArtes();
  };
}

/* ==== INICIAR PESSOAL ==== */
carregarPerfil('pessoal');