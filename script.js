
const animais = [
  {
    nome: "Macaco-de-cheiro",
    cientifico: "Saimiri sciureus",
    imagem: "imagens/macaco.jpg",
    alimentacao: "Frutas, insetos e pequenos animais.",
    habitat: "Florestas e áreas próximas a rios da Amazônia.",
    curiosidade: "É um primata pequeno, ágil e muito ativo."
  },
  {
    nome: "Onça-pintada",
    cientifico: "Panthera onca",
    imagem: "imagens/onca.jpg",
    alimentacao: "Carnívora: caça diferentes animais.",
    habitat: "Florestas, áreas alagadas e margens de rios.",
    curiosidade: "Sua mordida é extremamente poderosa."
  },
  {
    nome: "Boto-cor-de-rosa",
    cientifico: "Inia geoffrensis",
    imagem: "imagens/boto.jpg",
    alimentacao: "Principalmente peixes.",
    habitat: "Rios e lagos da bacia amazônica.",
    curiosidade: "É um golfinho de água doce."
  },
  {
    nome: "Arara-vermelha-grande",
    cientifico: "Ara macao",
    imagem: "imagens/arara.jpg",
    alimentacao: "Frutos, sementes e castanhas.",
    habitat: "Florestas tropicais da Amazônia.",
    curiosidade: "Possui plumagem vermelha, azul e amarela."
  },
  {
    nome: "Preguiça-de-três-dedos",
    cientifico: "Bradypus variegatus",
    imagem: "imagens/preguica.jpg",
    alimentacao: "Principalmente folhas.",
    habitat: "Árvores de florestas tropicais.",
    curiosidade: "Passa grande parte da vida nas árvores."
  },
  {
    nome: "Tucano-de-bico-preto",
    cientifico: "Ramphastos vitellinus",
    imagem: "imagens/tucano.jpg",
    alimentacao: "Frutos, insetos e pequenos animais.",
    habitat: "Florestas tropicais, incluindo a Amazônia.",
    curiosidade: "Seu bico grande ajuda a alcançar alimentos."
  }
];

const galeria = document.getElementById("galeria-animais");

if (galeria) {
  galeria.innerHTML = "";

  animais.forEach((animal) => {
    const card = document.createElement("article");
    card.className = "card-animal";

    const imagem = document.createElement("img");
    imagem.src = animal.imagem;
    imagem.alt = animal.nome;
    imagem.className = "imagem-animal";

    imagem.onerror = () => {
      imagem.alt = "Fotografia não encontrada: " + animal.nome;
    };

    const titulo = document.createElement("h3");
    titulo.textContent = animal.nome;

    const nomeCientifico = document.createElement("p");
    nomeCientifico.className = "nome-cientifico";
    nomeCientifico.textContent = animal.cientifico;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = "Conhecer animal";

    botao.addEventListener("click", () => {
      alert(
        animal.nome + "\n\n" +
        "Nome científico: " + animal.cientifico + "\n\n" +
        "Alimentação: " + animal.alimentacao + "\n\n" +
        "Habitat: " + animal.habitat + "\n\n" +
        "Curiosidade: " + animal.curiosidade
      );
    });

    card.append(imagem, titulo, nomeCientifico, botao);
    galeria.appendChild(card);
  });
}

console.log("Amazônia Viva carregado com sucesso!");
