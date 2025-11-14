// Lista de livros (exemplo fixo)
const livros = [
  {
    titulo: "Hábitos Atômicos",
    imagem: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg",
    categoria: "Desenvolvimento Pessoal",
    quantidade: 3,
    descricao:
      "Um guia prático para construir bons hábitos e eliminar maus hábitos, com base em pesquisas científicas e exemplos reais."
  },
  {
    titulo: "O poder do Hábito",
    imagem: "https://m.media-amazon.com/images/I/71xLmdLOQ0L.jpg",
    categoria: "Psicologia / Autodesenvolvimento",
    quantidade: 2,
    descricao:
      "Explora os mecanismos por trás dos hábitos e mostra como mudá-los para transformar a vida pessoal e profissional."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
{
    titulo: "Pense e enriqueça",
    imagem: "https://m.media-amazon.com/images/I/71Vji8FDaPL._SL1500_.jpg",
    categoria: "Autoajuda",
    quantidade: 1,
    descricao:
      "Pense & enriqueça propõe um programa de 13 passos que mostra a importância do autoconhecimento, da imaginação e das associações de ideias para criar resultados satisfatórios. Neste clássico absoluto da autoajuda financeira, descubra a fórmula para acumular fortuna, provando que a receita do sucesso é atemporal.."
  },
  {
    titulo: "Aprendendo a aprender",
    imagem: "https://m.media-amazon.com/images/I/911tVSa4fJL._SY425_.jpg",
    categoria: "Educação e Psicologia Cognitiva",
    quantidade: 1,
    descricao:
      "Ensina técnicas baseadas na neurociência para otimizar o aprendizado, focando no uso de dois modos de pensamento: focado (lógico e direto) e difuso (criativo e geral). "
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
  {
    titulo: "Micro-Hábitos",
    imagem: "https://m.media-amazon.com/images/I/71KzD7YlJRL.jpg",
    categoria: "Comportamento / Produtividade",
    quantidade: 1,
    descricao:
      "Pequenas mudanças que produzem grandes resultados, com base em técnicas de BJ Fogg sobre hábitos sustentáveis."
  },
];

// ELEMENTOS
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

const bookDetail = document.getElementById("bookDetail");
const detailImage = document.getElementById("detailImage");
const detailTitle = document.getElementById("detailTitle");
const detailQty = document.getElementById("detailQty");
const detailCat = document.getElementById("detailCat");
const detailDesc = document.getElementById("detailDesc");
const closeDetail = document.getElementById("closeDetail");

// Renderizar livros
function renderBooks(filtro = "") {
  bookList.innerHTML = "";
  const filtrados = livros.filter(l =>
    l.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(livro => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}">
      <p>${livro.titulo}</p>
    `;
    div.onclick = () => mostrarDetalhes(livro);
    bookList.appendChild(div);
  });
}

renderBooks();

// Buscar livros
searchInput.addEventListener("input", e => {
  renderBooks(e.target.value);
});

// Ocultar menu ao clicar na área principal
content.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Mostrar detalhes
function mostrarDetalhes(livro) {
  detailImage.src = livro.imagem;
  detailTitle.textContent = livro.titulo;
  detailQty.textContent = livro.quantidade;
  detailCat.textContent = livro.categoria;
  detailDesc.textContent = livro.descricao;

  bookDetail.classList.add("show");
}

// Fechar detalhes
closeDetail.addEventListener("click", () => {
  bookDetail.classList.remove("show");
});
