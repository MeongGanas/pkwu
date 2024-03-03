import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main id="content" className="relative overflow-x-hidden">
        {children}
      </main>

      <Footer />
    </>
  );
}
