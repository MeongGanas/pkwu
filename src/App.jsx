import { Route, Routes } from "react-router-dom";
import Intro from "./Pages/Intro";
import ProfileJurusan from "./Pages/ProfileJurusan";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/jurusan/:jurusanId" element={<ProfileJurusan />} />
    </Routes>
  );
}
