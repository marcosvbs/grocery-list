import { useState } from "react";
import { Header } from "../../components/Header";
import { ContentContainer, MyListsContainer } from "./styles";
import { PrimaryLink } from "../../styles/globalLinksStyles";
// import { Link } from "react-router-dom";

interface List {
  id: number;
  name: string;
}

export function MyLists() {
  const [lists, setLists] = useState<List[]>([]);

  // function handleCreateList(listName: string) {
  //   setLists([{ id: 1, name: listName }]);
  // }

  return (
    <MyListsContainer>
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
        <PrimaryLink to={"/create-list"}>Criar lista</PrimaryLink>
      </ContentContainer>
    </MyListsContainer>
  );
}
