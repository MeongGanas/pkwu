import { PinDrop } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white px-5 py-20 sm:px-14">
      <div className="block md:flex md:justify-evenly border-b gap-10 border-b-white pb-14">
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <h1 className="text-2xl font-bold mb-5">
            Alamat <PinDrop />
          </h1>
          <p>
            Jl. A. P. Pettarani No.4, Gn. Sari, Kec. Rappocini, Kota Makassar,
            Sulawesi Selatan 90221
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold mb-5">Hubungi Kami</h1>
          <ul>
            <li className="mb-2">081241694355 (Daniel)</li>
            <li className="mb-2">085397738978 (Yayu)</li>
            <li>Stelkmks.ypt@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-end mt-5">
        <ul className="flex gap-5 items-center">
          <li>
            <Link to="">
              <img src="/img/browser.svg" alt="" width={24} />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src="/img/instagram.svg" alt="" width={24} />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src="/img/email.svg" alt="" width={24} />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src="/img/youtube.svg" alt="" width={24} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
