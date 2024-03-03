import { Route, Routes } from "react-router-dom";
import Intro from "./Pages/Intro";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}
