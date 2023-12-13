import "./Projetos.css"
const Projetos = () => {
    const proj = [
      {
        id: 1,
        imagem: "../src/assets/img/pj2.webp",
        link: "https://enjels.github.io/projeto-2/",
      },
      {
        id: 2,
        imagem: "../src/assets/img/pj3.webp",
        link: "https://enjels.github.io/projeto-3/",
      },
      {
        id: 3,
        imagem: "../src/assets/img/login cat.webp",
        link: "https://enjels.github.io/login-cat/",
      },
      {
        id: 4,
        imagem: "../src/assets/img/codai.webp",
        link: "https://enjels.github.io/codai-2.0/",
      },
      {
        id: 5,
        imagem: "../src/assets/img/doritos.webp",
        link: "https://enjels.github.io/Doritos/",
      },
      {
        id: 6,
        imagem: "../src/assets/img/coffe.webp",
        link: "https://enjels.github.io/Coffee-Shop/",
      },
      {
        id: 7,
        imagem: "../src/assets/img/relojo.webp",
        link: "https://enjels.github.io/relogio-digital/",
      },
      {
        id: 8,
        imagem: "../src/assets/img/pj4.webp",
        link: "https://enjels.github.io/projeto-4/",
      },
      {
        id: 9,
        imagem: "../src/assets/img/pj5.webp",
        link: "https://enjels.github.io/projeto-5/",
      },
      {
        id: 10,
        imagem: "../src/assets/img/pj1.webp",
        link: "https://enjels.github.io/projeto-1/",
      },
    ];
    return (
        <div>
            <ul>
                {proj.map((proj, i) => (
                    <li key={i}>
                        <a href={proj.link} target="_blank" rel="noreferrer">
                            <img src={proj.imagem} alt={`projeto-${i}`} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Projetos
