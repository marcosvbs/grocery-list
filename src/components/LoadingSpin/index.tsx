import spin from "../../assets/spin.svg";
import { LoadingSpinContainer } from "./styles";

export function LoadingSpin() {
  return (
    <LoadingSpinContainer>
      <img src={spin} alt="" />
    </LoadingSpinContainer>
  );
}
