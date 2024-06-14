import { Header } from "../../components/Header";
import { PrimaryLink, TertiaryLink } from "../../styles/globalLinksStyles";
import { ActionBar, ContentContainer, PageContainer } from "./styles";

export function CreateList() {
  return (
    <PageContainer>
      <Header title="Criar lista" />

      <ContentContainer>
        <ActionBar>
          <TertiaryLink to={"/my-lists"}>Voltar</TertiaryLink>
          <PrimaryLink to={"/"}>Salvar</PrimaryLink>
        </ActionBar>
      </ContentContainer>
    </PageContainer>
  );
}
