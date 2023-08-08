import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import PopUp from "./Components/PopUp";
import { useSelector } from "react-redux";

function App() {
  const dialog = useSelector((store) => store.app.showDialog);
  console.log(dialog);
  return (
    <>
      {dialog ? <PopUp /> : null}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
