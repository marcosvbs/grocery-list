import { useState } from "react";
import { Header } from "../../components/Header";
import {
  ContentContainer,
  ListCard,
  PageContainer,
  ActionBar,
  ListsList,
  DeleteButton,
  CreateListDialog,
} from "./styles";

import { PrimaryButton } from "../../styles/buttons";

import {
  DialogPanel,
  DialogTitle,
  Field,
  Input,
  Label,
} from "@headlessui/react";

interface List {
  id: number;
  name: string;
}

export function MyLists() {
  const [lists, setLists] = useState<List[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // function handleCreateList(listName: string) {
  //   setLists([{ id: 1, name: listName }]);
  // }

  return (
    <PageContainer>
      {lists.length ? (
        <Header
          title="Minhas listas"
          description={`${lists.length} lista criada`}
        />
      ) : (
        <Header
          title="Minhas listas"
          description="Você ainda não possui listas criadas"
        />
      )}

      <ContentContainer>
        <ListsList>
          <li>
            <ListCard>
              <p>Feira mensal</p>
              <DeleteButton>
                <span className="material-symbols-outlined">delete</span>
              </DeleteButton>
            </ListCard>
          </li>
        </ListsList>

        <CreateListDialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className={"overlay"}>
            <DialogPanel className={"dialogContainer"}>
              <div className={"dialogHeader"}>
                <DialogTitle as="h3">Criar lista</DialogTitle>

                <button onClick={() => setIsOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <Field className={"listNameField"}>
                <Label as="p">Nome</Label>
                <Input name="listName" placeholder="Nome da lista" />
              </Field>
            </DialogPanel>
          </div>
        </CreateListDialog>
      </ContentContainer>

      <ActionBar>
        <PrimaryButton onClick={() => setIsOpen(true)}>
          Criar lista
        </PrimaryButton>
      </ActionBar>
    </PageContainer>
  );
}
