import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { List } from "../../@types/list";
import { Header } from "../../components/Header";
import { ContentContainer, PageContainer } from "./styles";
import { PrimaryLink } from "../../styles/links";
import { LoadingSpin } from "../../components/LoadingSpin";

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
      {loadingListData ? (
        <LoadingSpin />
      ) : (
        <ContentContainer>
          {loadingListData ? (
            <LoadingSpin />
          ) : (
            <PrimaryLink to={"/my-lists"}>Voltar</PrimaryLink>
          )}
        </ContentContainer>
      )}
    </PageContainer>
  );
}
