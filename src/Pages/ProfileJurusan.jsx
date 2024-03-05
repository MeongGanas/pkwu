import { Link, useNavigate, useParams } from "react-router-dom";
import LayoutJurusan from "../Layout/layoutJurusan";
import HomeJurusan from "../UI/detailJurusan/HomeJurusan";
import ProgramJurusan from "../UI/detailJurusan/ProgramJurusan";
import Gallery from "../UI/detailJurusan/Gallery";
import { useEffect } from "react";

const data = [
  {
    title: "Telekomunikasi",
    desc: "Program studi yang mempelajari rekayasa di bidang telekomunikasi. Ruang lingkup rekayasa meliputi aspek-aspek yang terkait dengan teknologi, protokol, layanan, desain dan teknik pengiriman informasi broadband.",
    imgpath: "tel",
    program: [
      { title: "Mobile Communication", img: "/img/tel/mobile.svg" },
      { title: "Fiber Optic Transmision", img: "/img/tel/fiber.svg" },
      { title: "Satellite Communication", img: "/img/tel/satelit.svg" },
      { title: "Design Network Telecommunication", img: "/img/tel/desain.svg" },
      { title: "Submarine Cable", img: "/img/tel/submarine.svg" },
      { title: "Internet of Things", img: "/img/tel/internet.svg" },
    ],
  },
  {
    title: "Digital bisnis dan pariwisata",
    desc: "Program studi yang mempelajari bisnis digital dan kepariwisaan. program studi ini memiliki kemampuan dalam mengelola usaha pariwisata berbasis teknologi informasi.",
    imgpath: "dbp",
    program: [
      { title: "E-Commerce", img: "/img/dbp/ecommerce.svg" },
      { title: "Marketplace", img: "/img/dbp/market.svg" },
      { title: "Social Media & Digital Marketing", img: "/img/dbp/sosmed.svg" },
      { title: "Travel Management", img: "/img/dbp/travel.svg" },
      { title: "Bekal Ide Bisnis", img: "/img/dbp/bisnis.svg" },
      { title: "Mice dan Creative Project", img: "/img/dbp/mice.svg" },
    ],
  },
  {
    title: "Rekayasa Perangkat Lunak",
    desc: "Program studi yang mempelajari tentang pengembangan perangkat-perangkat lunak termasuk dalam hal pembuatannya, pemeliharaan hingga manajemen organisasi dan manajemen kualitasnya",
    imgpath: "rpl",
    program: [
      { title: "UI UX Design", img: "/img/rpl/uiux.svg" },
      { title: "Front-end", img: "/img/rpl/frontend.svg" },
      { title: "Back-end", img: "/img/rpl/backend.svg" },
      { title: "Mobile", img: "/img/rpl/mobile.svg" },
    ],
  },
  {
    title: "Teknik Komputer dan Jaringan",
    desc: "Program yang mempelajari seluruh seluk beluk komputer dan jaringannya. Secara garis besar, jurusan ini akan mengajarkan terkait perakitan, pemasangan, perbaikan, dan jaringan komputer.",
    imgpath: "tkj",
    program: [
      { title: "Developer Operation (DevOps)", img: "/img/tkj/devops.svg" },
      { title: "Internet Of Things", img: "/img/tkj/internet.svg" },
      { title: "Network Security", img: "/img/tkj/security.svg" },
    ],
  },
];

export default function ProfileJurusan() {
  const { jurusanId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (jurusanId > 4) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  });

  return (
    <LayoutJurusan>
      <section id="HomeJurusan">
        <div className="bg-white -z-20 py-20 min-h-screen relative flex items-center">
          <HomeJurusan
            jurusan={data[jurusanId - 1].title}
            desc={data[jurusanId - 1].desc}
            imgpath={data[jurusanId - 1].imgpath}
          />
        </div>
      </section>

      <section id="program">
        <div className="w-full pb-20 bg-white px-10 min-h-screen flex items-center">
          <ProgramJurusan program={data[jurusanId - 1].program} />
        </div>
      </section>

      <section id="gallery">
        <div className="w-full min-h-screen flex items-center relative">
          <img
            src="/img/shapekiri.svg"
            alt=""
            className="absolute top-0 left-0 w-1/4"
          />
          <img
            src="/img/shapekanan.svg"
            alt=""
            className="absolute top-0 right-0 w-1/4"
          />
          <Gallery title={data[jurusanId - 1].imgpath} />
        </div>
      </section>

      <section id="pendaftaran">
        <div className="w-full bg-white px-10 py-32 flex items-center">
          <div className="text-center w-full">
            <h1 className="text-[#CA1010] text-4xl font-bold tracking-wide uppercase">
              Tunggu Apalagi?
            </h1>
            <p className="mt-5 mb-10 text-lg font-semibold">
              daftarkan diri kamu dengan klik link di bawah ini!
            </p>
            <Link className="bg-[#CA1010] px-10 py-4 rounded-xl text-white font-bold shadow-md">
              KLIK DISINI
            </Link>
          </div>
        </div>
      </section>
    </LayoutJurusan>
  );
}
