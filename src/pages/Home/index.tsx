import Logo from "../../assets/logo.png";
import { PrimaryButton, SecondaryButton } from "../../styles/buttons";
import { HomeButtonsContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <img src={Logo} alt="" />

      <HomeButtonsContainer>
        <PrimaryButton>Entrar</PrimaryButton>
        <SecondaryButton>Criar conta</SecondaryButton>
      </HomeButtonsContainer>
    </HomeContainer>
  );
}
