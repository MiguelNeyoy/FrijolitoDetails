import { Route, Routes } from "react-router-dom";
import Trivia from "../page/Trivia";
import App from "../App";
export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/trivia" element={<Trivia />} />
    </Routes>
  );
}
