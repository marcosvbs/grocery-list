import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { List } from "../../@types/listsAndItems";
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
import { PrimaryButton, TertiaryButton } from "../../styles/buttons";
import { Dialog } from "../../components/Dialog";
import { Input, Label } from "@headlessui/react";
import { FieldColumn, FieldRow, FormField } from "../../styles/formField";

interface NewItemData {
  name: string;
  amount: number;
  value: number;
}

type ChangeNewItemAmountAction = "add" | "remove";

const defaultNewItemData: NewItemData = {
  name: "",
  amount: 0,
  value: 0.0,
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
  const [newItemData, setNewItemData] =
    useState<NewItemData>(defaultNewItemData);

  const [isNewItemFirstValueEntry, setIsNewItemFirstValueEntry] =
    useState(true);

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

  function handleChangeNewItemName(event: React.ChangeEvent<HTMLInputElement>) {
    setNewItemData({
      name: event.target.value,
      amount: newItemData.amount,
      value: newItemData.value,
    });
  }

  function handleChangeNewItemAmount(action: ChangeNewItemAmountAction) {
    if (newItemData.amount >= defaultNewItemData.amount) {
      if (action === "add") {
        setNewItemData((prevNewItemData) => {
          return {
            name: newItemData.name,
            amount: prevNewItemData.amount + 1,
            value: newItemData.value,
          };
        });
      } else if (action === "remove") {
        setNewItemData((prevNewItemData) => {
          return {
            name: newItemData.name,
            amount: prevNewItemData.amount - 1,
            value: newItemData.value,
          };
        });
      }
    }
  }

  function handleChangeNewItemValue(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    console.log(Number(event.target.value));
    let newValue;
    if (isNewItemFirstValueEntry) {
      newValue = Number(event.target.value) * 0.01;
      setIsNewItemFirstValueEntry(false);
    } else {
      newValue = Number(event.target.value) * 10;
    }

    console.log(newValue);

    setNewItemData({
      name: newItemData.name,
      amount: newItemData.amount,
      value: newValue,
    });
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
                onChange={handleChangeNewItemName}
                required
              />
            </FormField>
          </FieldRow>

          <FieldRow>
            <FormField>
              <Label as="p">Quantidade</Label>
              <FieldColumn>
                <TertiaryButton
                  onClick={() => handleChangeNewItemAmount("remove")}
                  disabled={newItemData.amount === defaultNewItemData.amount}
                >
                  <span className="material-symbols-outlined">remove</span>
                </TertiaryButton>
                <Input
                  name="listName"
                  type="number"
                  value={newItemData.amount}
                  readOnly
                  required
                />
                <TertiaryButton
                  onClick={() => handleChangeNewItemAmount("add")}
                >
                  <span className="material-symbols-outlined">add</span>
                </TertiaryButton>
              </FieldColumn>
            </FormField>

            <FormField>
              <Label as="p">Preço unitário</Label>
              <FieldRow>
                <Label as="p">R$</Label>
                <Input
                  name="listName"
                  type="number"
                  value={newItemData.value}
                  onChange={handleChangeNewItemValue}
                  step={"0.00"}
                  required
                />
              </FieldRow>
            </FormField>
          </FieldRow>

          <PrimaryButton>Salvar</PrimaryButton>
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
