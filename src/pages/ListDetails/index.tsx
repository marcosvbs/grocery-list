import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { List } from "../../@types/list";
import { Header } from "../../components/Header";
import { ContentContainer, PageContainer } from "./styles";
import { PrimaryLink } from "../../styles/links";

export function ListDetails() {
  const { listId } = useParams<{ listId: string }>();
  const [listData, setListData] = useState<List>({
    id: 0,
    name: "",
    items: [],
  });

  async function fetchListData() {
    const response = await api.get(`/lists/${listId}`);
    const fetchedListData = response.data;
    setListData(fetchedListData);
  }

  useEffect(() => {
    fetchListData();
  }, []);

  return (
    <PageContainer>
      <Header
        title={listData.name}
        description={
          listData.items.length
            ? `${listData.items.length} itens adicionados`
            : "Você ainda não possui itens adicionados"
        }
      />

      <ContentContainer>
        <PrimaryLink to={"/my-lists"}>Voltar</PrimaryLink>
      </ContentContainer>
    </PageContainer>
  );
}
