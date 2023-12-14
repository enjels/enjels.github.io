import "./Sobremim.css";
const Sobremim = () => {
  return (
    <>
      <section id="section-sobremim">
        <div id="sobremim">
          <div>
            <img src="../src/assets/img/virgilio.webp" alt="" />
          </div>
          <div>
            <h2>
              DESENVOLVEDOR <br /> FRONT END.
            </h2>
            <p>
              Sou um dev. Front end apaixonado por transformar ideias em
              realidade,combinando habilidades técnicas e criatividade.Estou
              sempre em busca de novas oportunidades para aperfeiçoar minhas
              habilidade e trabalhar em projetos desafiadores. Meu objetivo é
              aprender e crescer na área. Curso{" "}
              <b>Análise e Desenvolvimento de Sistema </b>
              pela Unifatecie. Principais tecnologias:
              <b> Html, Css, JavaScript, React, git, figma e Photoshop</b>
            </p>
            <div className="Redes-sociais">
              <a href="#" target="blank">
                <img className="img-social" src="..\src\assets\img\dowload.png" alt="Currículo" />
              </a>
              <a href="https://github.com/enjels" target="blank">
                <img src="..\src\assets\GitHub.svg" alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/virg%C3%ADlio-c%C3%A9sar/"
                target="blank">
                <img src="..\src\assets\LinkedIn.svg" alt="Linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Sobremim;
