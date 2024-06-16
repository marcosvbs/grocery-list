import Logo from "../../assets/logo.png";
import { PrimaryLink, SecondaryLink } from "../../styles/links";

import { ActionBar, ContentContainer, PageContainer } from "./styles";

export function Home() {
  return (
    <PageContainer>
      <ContentContainer>
        <img src={Logo} alt="" />
      </ContentContainer>

      <ActionBar>
        <PrimaryLink to={"/my-lists"}>Entrar</PrimaryLink>
        <SecondaryLink to={"/"}>Criar conta</SecondaryLink>
      </ActionBar>
    </PageContainer>
  );
}
