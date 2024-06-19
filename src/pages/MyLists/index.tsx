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
  const [newListName, setNewListName] = useState<string>("");

  function handleChangeNewListName(event: React.ChangeEvent<HTMLInputElement>) {
    setNewListName(event.target.value);
  }

  function handleCreateNewList() {
    setLists([
      {
        id: lists.length + 1,
        name: newListName,
      },
      ...lists,
    ]);

    setIsOpen(false);
    setNewListName("");
  }

  function handleDeleteList(listId: number) {
    setLists(lists.filter((list) => list.id !== listId));
  }

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
          {lists.map((list) => {
            return (
              <li key={list.id}>
                <ListCard>
                  <p>{list.name}</p>
                  <DeleteButton onClick={() => handleDeleteList(list.id)}>
                    <span className="material-symbols-outlined">delete</span>
                  </DeleteButton>
                </ListCard>
              </li>
            );
          })}
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
                <Input
                  name="listName"
                  autoFocus
                  value={newListName}
                  onChange={handleChangeNewListName}
                />
              </Field>

              <PrimaryButton onClick={handleCreateNewList}>
                Salvar
              </PrimaryButton>
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
