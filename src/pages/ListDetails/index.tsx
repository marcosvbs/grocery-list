import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Item, List } from "../../@types/listsAndItems";
import { Header } from "../../components/Header";
import {
  ActionBar,
  ContentContainer,
  DeleteButton,
  ItemCard,
  ItemsList,
  PageContainer,
} from "./styles";
import { SecondaryLink } from "../../styles/links";
import { LoadingSpin } from "../../components/LoadingSpin";
import { PrimaryButton } from "../../styles/buttons";

export function ListDetails() {
  const [loadingListData, setLoadingListData] = useState(true);
  const { listId } = useParams<{ listId: string }>();
  const [listData, setListData] = useState<List>({
    id: 0,
    name: "",
    items: [],
  });
  const [createItemDialogIsOpen, setCreateItemDialogIsOpen] =
    useState<boolean>();
  const [newItemData, setNewItemData] = useState<Item>();

  async function fetchListData() {
    try {
      const response = await api.get(`/lists/${listId}`);
      const fetchedListData = response.data;
      setListData(fetchedListData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingListData(false);
    }
  }

  function handleOpenCreateItemDialog() {
    setCreateItemDialogIsOpen(true);
  }

  function handleCloseCreateItemDialog() {
    setCreateItemDialogIsOpen(false);
    setNewItemData({});
  }

  useEffect(() => {
    fetchListData();
  }, []);

  return (
    <PageContainer>
      <Header
        title={listData.name || "Carregando..."}
        description={
          loadingListData
            ? "Carregando itens..."
            : listData.items.length
            ? `${listData.items.length} itens adicionados`
            : "Você ainda não possui itens adicionados"
        }
      />
      <ContentContainer>
        {loadingListData ? (
          <LoadingSpin size={40} />
        ) : (
          <ItemsList>
            {listData.items.map((item) => {
              return (
                <li key={item.id}>
                  <ItemCard>
                    <span className="itemInfo">{item.amount}</span>
                    <p>{item.name}</p>
                    <span className="itemInfo">{item.value}</span>
                    <DeleteButton
                      onClick={() => console.log("deletou")}
                      disabled={false}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </DeleteButton>
                  </ItemCard>
                </li>
              );
            })}
          </ItemsList>
        )}

        {/* <CreateListDialog
          open={}
          onClose={}
        >
          <div className={"overlay"}>
            <DialogPanel className={"dialogContainer"}>
              <div className={"dialogHeader"}>
                <DialogTitle as="h3">Criar lista</DialogTitle>

                <button onClick={}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <Field className={"listNameField"}>
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
            </DialogPanel>
          </div>
        </CreateListDialog> */}
      </ContentContainer>
      <ActionBar>
        <SecondaryLink to={"/my-lists"}>Voltar</SecondaryLink>
        <PrimaryButton onClick={handleOpenCreateItemDialog}>
          Adicionar item
        </PrimaryButton>
      </ActionBar>
    </PageContainer>
  );
}
