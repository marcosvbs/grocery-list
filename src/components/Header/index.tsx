import { HeaderContainer } from "./styles";

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <HeaderContainer>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </HeaderContainer>
  );
}
