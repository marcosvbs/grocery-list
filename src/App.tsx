import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { MyLists } from "./pages/MyLists";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MyLists />
      <GlobalStyle />
    </ThemeProvider>
  );
}
