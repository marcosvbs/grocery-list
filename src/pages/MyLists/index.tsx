import { useEffect, useState } from "react";
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
import { api } from "../../lib/axios";

interface List {
  id: number;
  name: string;
}

export function MyLists() {
  const [lists, setLists] = useState<List[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newListName, setNewListName] = useState<string>("");

  async function fetchLists() {
    const response = await api.get("/lists");
    const fetchedLists = response.data;
    setLists(fetchedLists);
  }

  async function handleDeleteList(listId: number) {
    try {
      await api.delete(`/lists/${listId}`);
      fetchLists();
      setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
    } catch (error) {
      console.log("Error while deleting list", error);
    }
  }

  function handleChangeNewListName(event: React.ChangeEvent<HTMLInputElement>) {
    setNewListName(event.target.value);
  }

  async function handleCreateNewList() {
    const lastListId = lists.length ? lists[lists.length - 1].id : 0;

    const newList = {
      id: lastListId + 1,
      name: newListName,
    };

    try {
      await api.post("/lists", newList);
      fetchLists();

      setIsOpen(false);
      setNewListName("");
    } catch (error) {
      console.error("Error while creating new list", error);
    }
  }

  useEffect(() => {
    fetchLists();
  }, []);

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
