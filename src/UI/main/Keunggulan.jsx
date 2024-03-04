import CardKeunggulan from "../../components/card/CardKeunggulan";

export default function Keunggulan() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      <CardKeunggulan
        title={"Lingkungan Sekolah yang Luas, Aman dan Nyaman"}
        url={"/img/lingkungan.svg"}
        desc={
          "SMK Telkom makassar berada diarea Kawasan pendidikan SMK Telkom Indonesia tepatnya di Jl. A.P. Pettarani no. 4 Makassar"
        }
      />
      <CardKeunggulan
        title={"Program 4 hari belajar"}
        url={"/img/buku.svg"}
        desc={
          "Memfokuskan Siswa/i untuk memaksimalkan program 4 hari belajar dan sehari untuk program pengembangan minat dan bakat"
        }
      />
      <CardKeunggulan
        title={
          "Kurikulum Modern Berbasis Teknologi (Digitalent, Digicharacter)"
        }
        url={"/img/laptop.svg"}
        desc={
          "Mengikuti Kurikulum nasional yang berbasis teknologi dan telah bersinkronisasi dengan teknologi Industri"
        }
      />
      <CardKeunggulan
        title={"Kerjasama Industri yang Luas"}
        url={"/img/kerjasama.svg"}
        desc={
          "Telah memiliki Kerjasama Industri pada beberapa perusahaan besar seperti : PT Telkom Makassar, icon+, metroteck dan masih banyak lagi"
        }
      />
      <CardKeunggulan
        title={"Guru yang Up-To-Date dengan Perkembanagan Teknologi"}
        url={"/img/guru.svg"}
        desc={
          "Adanya pelatihan Guru yang menunjang sistem proses belajar-mengajar dan juga sebagai pelatihan SMK-PK"
        }
      />
      <CardKeunggulan
        title={"Guru yang Up-To-Date dengan Perkembanagan Teknologi"}
        url={"/img/guru.svg"}
        desc={
          "Adanya pelatihan Guru yang menunjang sistem proses belajar-mengajar dan juga sebagai pelatihan SMK-PK"
        }
      />
    </div>
  );
}
