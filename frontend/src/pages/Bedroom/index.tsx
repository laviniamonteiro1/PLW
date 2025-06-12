import { useParams } from "react-router-dom";
import { useBedroom } from "/app/src/hooks/useBedroom";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Content,
  Image,
  Title,
  Description,
  Price,
} from "./styles";

export default function Bedroom() {
  const { id } = useParams();
  const { getQuartoById, isLoading } = useBedroom();
  const quarto = getQuartoById(id || "");

  if (isLoading) {
    return (
      <Container>
        <Content>
          <p>Carregando quarto...</p>
        </Content>
      </Container>
    );
  }

  if (!quarto) {
    return (
      <Container>
        <Content>
          <BackButton />
          <p>Quarto não encontrado.</p>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <BackButton />
        <Image src={quarto.image} alt={quarto.title} />
        <Title>{quarto.title}</Title>
        <Description>{quarto.descriptionLong}</Description>
        <Price>Valor da pernoite: {quarto.price}</Price>
      </Content>
    </Container>
  );
}
