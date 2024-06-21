import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { List } from "../../@types/listsAndItems";
import { Header } from "../../components/Header";
import { ActionBar, ContentContainer, PageContainer } from "./styles";
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
        {loadingListData ? <LoadingSpin size={40} /> : "oi"}
      </ContentContainer>
      <ActionBar>
        <SecondaryLink to={"/my-lists"}>Voltar</SecondaryLink>
        <PrimaryButton>Adicionar item</PrimaryButton>
      </ActionBar>
    </PageContainer>
  );
}
