import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyLists } from "../pages/MyLists";
import { CreateList } from "../pages/CreateList";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/my-lists"} element={<MyLists />} />
      <Route path={"/create-list"} element={<CreateList />} />
    </Routes>
  );
}
