import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {
  ContentContainer,
  ListCard,
  PageContainer,
  ActionBar,
  ListsList,
  DeleteButton,
} from "./styles";

import { PrimaryButton } from "../../styles/buttons";

import { Field, Input, Label } from "@headlessui/react";
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";
import { List } from "../../@types/listsAndItems";
import { LoadingSpin } from "../../components/LoadingSpin";
import { Dialog } from "../../components/Dialog";

export function MyLists() {
  const [loadingListData, setLoadingListData] = useState(true);
  const [deletingList, setDeletingList] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  const [lists, setLists] = useState<List[]>([]);
  const [createListDialogIsOpen, setCreateListDialogIsOpen] =
    useState<boolean>(false);
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
  }

  function handleCloseCreateListDialog() {
    setCreateListDialogIsOpen(false);
    setNewListName("");
  }

  async function handleDeleteList(listId: number) {
    setDeletingList(true);
    try {
      await api.delete(`/lists/${listId}`);
      setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
      fetchLists();
    } catch (error) {
      console.error("Error while deleting list", error);
    } finally {
      setDeletingList(false);
    }
  }

  function handleChangeNewListName(event: React.ChangeEvent<HTMLInputElement>) {
    setNewListName(event.target.value);
  }

  async function handleCreateNewList() {
    setCreatingList(true);
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
    } finally {
      setCreatingList(false);
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
          <LoadingSpin size={40} />
        ) : (
          <ListsList>
            {lists.map((list) => {
              return (
                <li key={list.id}>
                  <ListCard>
                    <Link to={`/my-lists/${list.id}`}>
                      <p>{list.name}</p>
                    </Link>

                    <DeleteButton
                      onClick={() => handleDeleteList(list.id)}
                      disabled={deletingList}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </DeleteButton>
                  </ListCard>
                </li>
              );
            })}
          </ListsList>
        )}

        <Dialog
          title={"Criar lista"}
          isOpen={createListDialogIsOpen}
          onClose={handleCloseCreateListDialog}
        >
          <Field className={"field"}>
            <Label as="p">Nome</Label>
            <Input
              name="listName"
              value={newListName}
              onChange={handleChangeNewListName}
              required
            />
          </Field>

          <PrimaryButton
            onClick={handleCreateNewList}
            disabled={!newListName || creatingList}
          >
            {creatingList ? <LoadingSpin size={24} /> : "Salvar"}
          </PrimaryButton>
        </Dialog>
      </ContentContainer>

      <ActionBar>
        <PrimaryButton onClick={handleOpenCreateListDialog}>
          Criar lista
        </PrimaryButton>
      </ActionBar>
    </PageContainer>
  );
}
