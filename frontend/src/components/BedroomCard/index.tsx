import { Link } from "react-router-dom";
import { GridContainer, SCard } from "./styles";
import { quartos } from "/app/src/mocks/BedroomMock";

export function BedroomCard() {
  return (
    <GridContainer>
      {quartos.map((quarto, index) => (
        <SCard key={index}>
          <Link to={`/quarto/${index}`}>
            <article>
              <img src={quarto.image} alt={`Imagem da ${quarto.title}`} />
              <h2>{quarto.title}</h2>
              <p>{quarto.description}</p>
            </article>
          </Link>
        </SCard>
      ))}
    </GridContainer>
  );
}
