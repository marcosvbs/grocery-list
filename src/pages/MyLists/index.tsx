import { Header } from "../../components/Header";
import { PrimaryButton } from "../../styles/buttons";
import { ContentContainer, PageContainer } from "./styles";

export function MyLists() {
  return (
    <PageContainer>
      <Header
        title="Minhas listas"
        description="Você ainda não possui listas criadas"
      />
      <ContentContainer>
        <PrimaryButton>Criar lista</PrimaryButton>
      </ContentContainer>
    </PageContainer>
  );
}
