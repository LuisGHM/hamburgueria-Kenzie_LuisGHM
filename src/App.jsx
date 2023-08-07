import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage";
import "./style/index.scss";

export const App = () => {
  return (
    <>
      <HomePage />
      <Toaster/>
    </>
  )
}