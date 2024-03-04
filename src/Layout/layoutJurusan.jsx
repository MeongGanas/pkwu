import Footer from "../components/Footer";
import NavbarKejuruan from "../components/navbar/NavbarKejuruan";

export default function LayoutJurusan({ children }) {
  return (
    <>
      <NavbarKejuruan />

      <main id="content" className="relative overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
