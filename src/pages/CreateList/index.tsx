import { Header } from "../../components/Header";
import { PrimaryButton } from "../../styles/buttons";
import { SecondaryLink } from "../../styles/links";
import {
  ActionBar,
  ContentContainer,
  CreateListForm,
  ListDataField,
  PageContainer,
} from "./styles";
import * as Form from "@radix-ui/react-form";

function handleSubmit() {
  console.log("enviou!");
}

export function CreateList() {
  return (
    <PageContainer>
      <Header title="Criar lista" />

      <ContentContainer>
        <CreateListForm>
          <ListDataField name={"listName"}>
            <Form.Label>Nome da lista</Form.Label>
            <Form.Control placeholder={"Nome da lista"} asChild>
              <input className="Input" type="text" required />
            </Form.Control>
          </ListDataField>
        </CreateListForm>
      </ContentContainer>

      <ActionBar>
        <SecondaryLink to={"/my-lists"}>Voltar</SecondaryLink>
        <Form.Submit onSubmit={handleSubmit} asChild>
          <PrimaryButton>Salvar</PrimaryButton>
        </Form.Submit>
      </ActionBar>
    </PageContainer>
  );
}
