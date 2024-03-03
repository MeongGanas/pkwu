import { Link } from "react-router-dom";

export default function CardBerita() {
  return (
    <div className="max-w-sm text-center">
      <div className="bg-[#CA1010] rounded-md flex flex-col justify-center">
        <img
          src="/img/Rectangle 136.svg"
          alt=""
          className="max-w-full max-h-52"
        />
        <h3 className="p-2 w-full font-bold text-white">2 Februari 2024</h3>
      </div>
      <h1 className="border-b border-b-black pt-4 pb-2 mb-4 text-center font-bold">
        STELKERS Raih Juara pada Sulawesi Education & Techno Expo 2024
      </h1>
      <Link className="underline w-full font-semibold">Baca Selengkapnya</Link>
    </div>
  );
}
