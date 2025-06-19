import { Route, Routes } from "react-router-dom";
import Trivia from "../page/Trivia";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trivia" element={<Trivia />} />
    </Routes>
  );
}
