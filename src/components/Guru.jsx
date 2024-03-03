import CardGuru from "./CardGuru";

export default function Guru() {
  return (
    <div className="w-full">
      <h1 className="text-center text-white text-4xl font-bold mb-24">
        Guru SMK Telkom
      </h1>
      <div className="flex justify-center flex-wrap gap-5">
        <CardGuru
          url={"/img/musliadi.svg"}
          title={"Wakasek Kesiswaan"}
          desc={
            "Mengelola dan memonitor kegiatan kemahasiswaan, pembinaan karakter, serta pengembangan potensi siswa di sekolah"
          }
        />
        <CardGuru
          url={"/img/elwinda.svg"}
          title={"Wakasek Kurikulum"}
          desc={
            "Bertanggung jawab dalam perencanaan, implementasi, dan evaluasi kebijakan serta program pembelajaran di sekolah"
          }
        />
        <CardGuru
          url={"/img/saad.svg"}
          title={"Wakasek Sarpra"}
          desc={
            "Sarpra bertanggungjawab dalam mengelola sarana dan prasana di SMK Telkom Makassar"
          }
        />
        <CardGuru
          url={"/img/rahmat.svg"}
          title={"Wakasek Hubin"}
          desc={
            "Mengelola dan mengembangkan program-program yang terkait dengan hubungan industri, bursa kerja, dan penempatan siswa"
          }
        />
      </div>
      <div className="flex justify-center flex-wrap gap-5 px-10">
        <div className="bg-white p-5 w-full max-w-sm flex items-center gap-5 rounded-xl relative min-w-96">
          <div className="w-1/2">
            <img
              src="/img/oda.svg"
              alt=""
              className="absolute -top-1/3 left-5"
            />
            <h1 className="font-bold text-[#CA1010] text-center mt-24">
              Kaprodi TKJ-DBP
            </h1>
          </div>
          <p className="text-sm w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-white p-5 w-full max-w-sm flex items-center gap-5 rounded-xl relative min-w-96 mt-16 lg:mt-0">
          <p className="text-sm w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="w-1/2">
            <img
              src="/img/ali.svg"
              alt=""
              className="absolute -top-1/3 right-5"
            />
            <h1 className="font-bold text-[#CA1010] text-center mt-24">
              Kaprodi RPL
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
