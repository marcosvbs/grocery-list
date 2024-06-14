import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyLists } from "../pages/MyLists";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/my-lists"} element={<MyLists />} />
    </Routes>
  );
}
