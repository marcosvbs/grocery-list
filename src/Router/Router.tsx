import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyLists } from "../pages/MyLists";
import { ListDetails } from "../pages/ListDetails";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/my-lists"} element={<MyLists />} />
      <Route path="/my-lists/:listId" element={<ListDetails />} />;
    </Routes>
  );
}
