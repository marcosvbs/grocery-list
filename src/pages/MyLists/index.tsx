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
import { Link } from "react-router-dom";
import { List } from "../../@types/list";
import { LoadingSpin } from "../../components/LoadingSpin";

export function MyLists() {
  const [loadingListData, setLoadingListData] = useState(true);
  const [lists, setLists] = useState<List[]>([]);
  const [createListDialogIsOpen, setCreateListDialogIsOpen] =
    useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [newListName, setNewListName] = useState<string>("");

  async function fetchLists() {
    try {
      const response = await api.get("/lists");
      const fetchedLists = response.data;
      setLists(fetchedLists);
    } catch (error) {
      console.error("Error while fetching lists", error);
    } finally {
      setLoadingListData(false);
    }
  }

  function handleOpenCreateListDialog() {
    setCreateListDialogIsOpen(true);
    setIsFocused(true);
  }

  async function handleDeleteList(listId: number) {
    try {
      await api.delete(`/lists/${listId}`);
      setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
      fetchLists();
    } catch (error) {
      console.error("Error while deleting list", error);
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
      items: [],
    };

    try {
      await api.post("/lists", newList);
      fetchLists();

      setCreateListDialogIsOpen(false);
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
      <Header
        title="Minhas listas"
        description={
          loadingListData
            ? "Carregando listas..."
            : lists.length
            ? `${lists.length} lista criada`
            : "Você ainda não possui listas criadas"
        }
      />

      <ContentContainer>
        {loadingListData ? (
          <LoadingSpin />
        ) : (
          <ListsList>
            {lists.map((list) => {
              return (
                <li key={list.id}>
                  <ListCard>
                    <Link to={`/my-lists/${list.id}`}>
                      <p>{list.name}</p>
                    </Link>

                    <DeleteButton onClick={() => handleDeleteList(list.id)}>
                      <span className="material-symbols-outlined">delete</span>
                    </DeleteButton>
                  </ListCard>
                </li>
              );
            })}
          </ListsList>
        )}

        <CreateListDialog
          open={createListDialogIsOpen}
          onClose={() => setCreateListDialogIsOpen(false)}
        >
          <div className={"overlay"}>
            <DialogPanel className={"dialogContainer"}>
              <div className={"dialogHeader"}>
                <DialogTitle as="h3">Criar lista</DialogTitle>

                <button onClick={() => setCreateListDialogIsOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <Field className={"listNameField"}>
                <Label as="p">Nome</Label>
                <Input
                  name="listName"
                  autoFocus={isFocused}
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
        <PrimaryButton onClick={handleOpenCreateListDialog}>
          Criar lista
        </PrimaryButton>
      </ActionBar>
    </PageContainer>
  );
}
