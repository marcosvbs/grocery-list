import Logo from "../../assets/logo.png";
import { PrimaryLink, SecondaryLink } from "../../styles/globalLinksStyles";

import { HomeButtonsContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <img src={Logo} alt="" />

      <HomeButtonsContainer>
        <PrimaryLink to={"/my-lists"}>Entrar</PrimaryLink>
        <SecondaryLink to={"/"}>Criar conta</SecondaryLink>
      </HomeButtonsContainer>
    </HomeContainer>
  );
}
