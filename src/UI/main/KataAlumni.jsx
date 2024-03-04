import { useState } from "react";
import IsiKataAlumni from "../../components/IsiKataAlumni";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function KataAlumni() {
  const [tabIndex, setTabIndex] = useState(1);

  const handleTabNext = () => {
    if (tabIndex < 3) {
      setTabIndex(tabIndex + 1);
    } else {
      setTabIndex(1);
    }
  };

  const handleTabPrev = () => {
    if (tabIndex === 1) {
      setTabIndex(3);
    } else {
      setTabIndex(tabIndex - 1);
    }
  };

  return (
    <div className="w-full relative text-center mt-20">
      <h1 className="text-4xl font-bold text-[#CA1010] mb-5">#Kata Alumni</h1>

      <div
        id="default-carousel"
        className="relative w-full bg-[#ca1010]"
        data-carousel="slide"
      >
        <div className="relative overflow-hidden h-96">
          <div
            className={`duration-700 ease-in-out absolute inset-0 transition-transform transform  ${
              tabIndex === 1
                ? "block z-30 scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
            data-carousel-item
          >
            <div className="absolute flex justify-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-16 py-10">
              <IsiKataAlumni
                kata={
                  "Di SMK telkom kita belajar lebih banyak dr siswa biasa, waktu lebih panjang dr siswa biasa, presure lebih berat dr siswa biasa. Sehingga mencetak kita menjadi sesuatu yg luar biasa. Sehingga membentuk mental dan kepribadian Positif hingga saya bisa berada di titik ini."
                }
                gambar={"/img/isman.svg"}
                nama={"Ismandiady"}
                pekerjaan={"Workshop Manager, PT.Indomobil Nissan"}
              />
            </div>
          </div>
          <div
            className={`duration-700 ease-in-out absolute inset-0 transition-transform transform  ${
              tabIndex === 2
                ? "block z-30 scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
            data-carousel-item
          >
            <div className="absolute flex justify-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-16 py-10">
              <IsiKataAlumni
                kata={
                  "Menjadi lulusan SMK Telkom makassar, sangat membantu saya dalam melanjutkan pendidikan ke jenjang perguruan tinggi. Didukung pula dengan fasilitas yang sangat mumpuni ,banyak membantu kami dalam hal mengembangkan potensi diri."
                }
                gambar={"/img/arni.svg"}
                nama={"Asrini Isnaini"}
                pekerjaan={"Workshop Manager, PT.Indomobil Nissan"}
              />
            </div>
          </div>
          <div
            className={`duration-700 ease-in-out absolute inset-0 transition-transform transform  ${
              tabIndex === 3
                ? "block z-30 scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
            data-carousel-item
          >
            <div className="absolute flex justify-center w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 px-16 py-10">
              <IsiKataAlumni
                kata={
                  "Saya banyak dapat pengalaman selama sekolah diSTELK yang paling menarik adalah semangat kerja keras karena LOAD belajar yang banyak sehingga membiasakan kita untuk disiplin yang terbawa sampai didunia kerja."
                }
                gambar={"/img/nataniel.svg"}
                nama={"Nataniel Depo"}
                pekerjaan={"Workshop Manager, PT.Indomobil Nissan"}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handleTabPrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <ChevronLeft className="text-white" />
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleTabNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <ChevronRight className="text-white" />
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
