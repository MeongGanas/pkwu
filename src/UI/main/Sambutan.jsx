export default function Sambutan() {
  return (
    <div className="flex flex-wrap items-center px-5 md:px-10">
      <div className="w-full md:w-2/3">
        <h1 className="text-[#B60000] text-2xl font-bold mb-8">
          Kepala Sekolah SMK Telkom Makassar
        </h1>
        <p className="mb-5">
          Puji Syukur Alhamdulillah kita panjatkan ke hadirat Allah SWT, atas
          segala rahmat dan hidayah-Nya sehingga kita masih diberi kesempatan
          untuk bekerja dan berkarya di bidang pendidikan. Karena pendidikan
          merupakan upaya kita untuk menyiapkan generasi penerus bangsa, yang
          akan menggantikan estafet kepemimpinan kita di masa mendatang.
        </p>
        <p>
          Kami mengucapkan selamat datang di website resmi SMK Telkom Makassar
          yang dapat digunakan sebagai salah satu media komunikasi, dan
          interaksi antara civitas akademika dan masyarakat pada umumnya. Mari
          kita bekerja dan berkarya dengan mengharap ridho-Nya dan keikhlasan
          yang tulus demi menyiapkan generasi bangsa yang berintegritas dan
          berprestasi.
        </p>
        <span className="block bg-black h-0.5 my-5 w-1/2"></span>
        <h3 className="font-bold">Drs. Abd. Halim Samad, MM</h3>
      </div>
      <div className="w-full md:w-1/3 flex justify-center">
        <img src="/img/kepalabapak.png" alt="" />
      </div>
    </div>
  );
}
