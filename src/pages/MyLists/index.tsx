import { useState } from "react";
import { Header } from "../../components/Header";
import {
  ContentContainer,
  ListCard,
  PageContainer,
  ActionBar,
  ListsList,
  DeleteButton,
} from "./styles";
import { PrimaryLink } from "../../styles/links";
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
          <li>
            <ListCard>
              <p>Feira mensal</p>
              <DeleteButton>
                <span className="material-symbols-outlined">delete</span>
              </DeleteButton>
            </ListCard>
          </li>
        </ListsList>
      </ContentContainer>

      <ActionBar>
        <PrimaryLink to={"/create-list"}>Criar lista</PrimaryLink>
      </ActionBar>
    </PageContainer>
  );
}
