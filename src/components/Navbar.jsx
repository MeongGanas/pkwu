import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-[9999] top-0 left-0 w-full py-5 px-10 flex justify-between items-center ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <a href="#home">
        <img src="/img/logosmktelkom.png" width={38} alt="" />
      </a>
      <ul className="flex gap-10">
        <li>
          <a href="#home" className="text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#jurusan" className="text-white">
            Jurusan
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </li>
        <li>
          <a href="#pendaftaran" className="text-white">
            Pendaftaran
          </a>
        </li>
      </ul>
    </nav>
  );
}
