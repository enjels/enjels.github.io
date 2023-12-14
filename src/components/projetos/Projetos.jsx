import "./Projetos.css"
const Projetos = () => {
    const proj = [
      {
        id: 1,
        imagem: "../src/assets/img/pj2.webp",
        link: "https://enjels.github.io/projeto-2/",
        text: " sadadadasdasdasdasdasdasdasdasd",
      },
      {
        id: 2,
        imagem: "../src/assets/img/pj3.webp",
        link: "https://enjels.github.io/projeto-3/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicingis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 3,
        imagem: "../src/assets/img/login cat.webp",
        link: "https://enjels.github.io/login-cat/",
        text: "Lorem ipsum dolor sit amet consectetur adipisiciiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 4,
        imagem: "../src/assets/img/codai.webp",
        link: "https://enjels.github.io/codai-2.0/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicin reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 5,
        imagem: "../src/assets/img/doritos.webp",
        link: "https://enjels.github.io/Doritos/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicias reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 6,
        imagem: "../src/assets/img/coffe.webp",
        link: "https://enjels.github.io/Coffee-Shop/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 7,
        imagem: "../src/assets/img/relojo.webp",
        link: "https://enjels.github.io/relogio-digital/",
        text: "Lorem ipsum dolor sit amet consectetur adipisiciem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 8,
        imagem: "../src/assets/img/pj4.webp",
        link: "https://enjels.github.io/projeto-4/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, cse officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 9,
        imagem: "../src/assets/img/pj5.webp",
        link: "https://enjels.github.io/projeto-5/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, comendis es qui ea, natus dolores.",
      },
      {
        id: 10,
        imagem: "../src/assets/img/pj1.webp",
        link: "https://enjels.github.io/projeto-1/",
        text: "Lorem ipsum dolor sit amet consectetur adipisiciantium voluptatem qiciis odit harum qui ea, natus dolores.",
      },
    ];
    return (
      <section>
        <h1>Projetos</h1>
        <div id="container-pj">
          <ul className="ul-pj">
            {proj.map((proj, i) => (
              <li key={i}>
                <a href={proj.link} target="_blank" rel="noreferrer">
                  <img className="img-pj" src={proj.imagem} alt={`projeto-${i}`} />
                </a>
                <p>{proj.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
};

export default Projetos
