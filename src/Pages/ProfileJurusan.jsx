import { useParams } from "react-router-dom";
import LayoutJurusan from "../Layout/layoutJurusan";
import HomeJurusan from "../UI/detailJurusan/HomeJurusan";

export default function ProfileJurusan() {
  const { jurusanId } = useParams();

  return (
    <LayoutJurusan>
      <section id="homeJurusan" className="overflow-hidden">
        <div className="bg-white -z-20 py-20 px-20 min-h-screen relative flex items-center">
          <HomeJurusan
            jurusan={"Teknik Jaringan dan Komputer"}
            desc={
              "Program studi yang mempelajari rekayasa di bidang telekomunikasi. Ruang lingkup rekayasa meliputi aspek-aspek yang terkait dengan teknologi, protokol, layanan, desain dan teknik pengiriman informasi broadband."
            }
          />
        </div>
      </section>
    </LayoutJurusan>
  );
}
