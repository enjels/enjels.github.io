import "./Projetos.css"
const Projetos = () => {
    const proj = [
      {
        id: 1,
        imagem: "../src/assets/img/pj2.webp",
        link: "https://enjels.github.io/projeto-2/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 2,
        imagem: "../src/assets/img/pj3.webp",
        link: "https://enjels.github.io/projeto-3/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 3,
        imagem: "../src/assets/img/login cat.webp",
        link: "https://enjels.github.io/login-cat/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 4,
        imagem: "../src/assets/img/codai.webp",
        link: "https://enjels.github.io/codai-2.0/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 5,
        imagem: "../src/assets/img/doritos.webp",
        link: "https://enjels.github.io/Doritos/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 6,
        imagem: "../src/assets/img/coffe.webp",
        link: "https://enjels.github.io/Coffee-Shop/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 7,
        imagem: "../src/assets/img/relojo.webp",
        link: "https://enjels.github.io/relogio-digital/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 8,
        imagem: "../src/assets/img/pj4.webp",
        link: "https://enjels.github.io/projeto-4/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 9,
        imagem: "../src/assets/img/pj5.webp",
        link: "https://enjels.github.io/projeto-5/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
      {
        id: 10,
        imagem: "../src/assets/img/pj1.webp",
        link: "https://enjels.github.io/projeto-1/",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, commodi quia. Tenetur laudantium voluptatem quos, accusamus iure reprehenderit dolorem voluptas reiciendis esse, labore officiis odit harum qui ea, natus dolores.",
      },
    ];
    return (
        <div id="container-pj">
            
            <ul>
                {proj.map((proj, i) => (
                    <li key={i}>
                        <p>{proj.text }</p>
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
