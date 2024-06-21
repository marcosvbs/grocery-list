import spin from "../../assets/spin.svg";
import { LoadingSpinContainer } from "./styles";

interface LoadingSpinProps {
  size: number;
}

export function LoadingSpin({ size }: LoadingSpinProps) {
  return (
    <LoadingSpinContainer $size={size}>
      <img src={spin} alt="" />
    </LoadingSpinContainer>
  );
}
