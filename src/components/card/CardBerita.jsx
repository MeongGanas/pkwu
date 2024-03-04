import { Link } from "react-router-dom";

export default function CardBerita() {
  return (
    <div className="group max-w-80 text-center">
      <div className="rounded-md flex flex-col justify-center">
        <img
          src="/img/Rectangle 136.svg"
          alt=""
          className="max-w-full max-h-52 w-full object-cover"
        />
        <h3 className="p-2 w-full font-bold ">2 Februari 2024</h3>
      </div>
      <h1 className="group-hover:text-[#CA1010] border-b border-b-black pt-4 pb-2 mb-4 text-center font-bold transition-all duration-200">
        STELKERS Raih Juara pada Sulawesi Education & Techno Expo 2024
      </h1>
      <Link className="underline w-full font-semibold">Baca Selengkapnya</Link>
    </div>
  );
}
