import { Header } from "../../components/Header";
import { PrimaryLink, TertiaryLink } from "../../styles/globalLinksStyles";
import { ActionBar, ContentContainer, PageContainer } from "./styles";
import * as Form from "@radix-ui/react-form";

export function CreateList() {
  return (
    <PageContainer>
      <Header title="Criar lista" />

      <ContentContainer>
        <Form.Root>
          <Form.Field name={"newList"}>
            <Form.Label>Nome da lista</Form.Label>
            <Form.Message>Please provide a name</Form.Message>
          </Form.Field>

          <Form.Message />

          <Form.Submit />
        </Form.Root>

        <ActionBar>
          <TertiaryLink to={"/my-lists"}>Voltar</TertiaryLink>
          <PrimaryLink to={"/"}>Salvar</PrimaryLink>
        </ActionBar>
      </ContentContainer>
    </PageContainer>
  );
}
