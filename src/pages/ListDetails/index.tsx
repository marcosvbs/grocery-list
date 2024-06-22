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
import { Dialog } from "../../components/Dialog";
import { Input, Label } from "@headlessui/react";
import { FieldRow, FormField } from "../../styles/formField";

const defaultNewItemData = {
  id: 0,
  name: "",
  amount: 1,
  value: 0,
  isChecked: false,
};

export function ListDetails() {
  const [loadingListData, setLoadingListData] = useState(true);
  const { listId } = useParams<{ listId: string }>();
  const [listData, setListData] = useState<List>({
    id: 0,
    name: "",
    items: [],
  });
  const [createItemDialogIsOpen, setCreateItemDialogIsOpen] =
    useState<boolean>(false);
  const [newItemData, setNewItemData] = useState<Item>(defaultNewItemData);

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
    setNewItemData(defaultNewItemData);
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

        <Dialog
          title={"Adicionar item"}
          isOpen={createItemDialogIsOpen}
          onClose={handleCloseCreateItemDialog}
        >
          <FieldRow>
            <FormField>
              <Label as="p">Nome</Label>
              <Input
                name="itemName"
                type="text"
                value={newItemData.name}
                onChange={() => console.log("1")}
                required
              />
            </FormField>
          </FieldRow>

          <FieldRow>
            <FormField>
              <Label as="p">Quantidade</Label>
              <Input
                name="listName"
                type="number"
                value={newItemData.amount}
                onChange={() => console.log("1")}
                required
              />
            </FormField>

            <FormField>
              <Label as="p">Preço unitário</Label>
              <Input
                name="listName"
                type="number"
                value={newItemData.value}
                onChange={() => console.log("1")}
                required
              />
            </FormField>
          </FieldRow>
        </Dialog>
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
