import CheckBox from "./components/CheckBox";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />}></Route>
    </Routes>
  );
}
