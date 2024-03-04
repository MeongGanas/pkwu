export default function HomeJurusan({ jurusan, desc }) {
  return (
    <>
      <img
        src="/img/shapejurusan.svg"
        alt=""
        className="hidden sm:block absolute left-0 max-w-full top-0"
        width={400}
      />
      <div className="w-full max-w-lg">
        <h2 className="text-3xl mb-2">Jurusan</h2>
        <h1 className="text-3xl mb-2 font-bold text-[#CA1010]">{jurusan}</h1>
        <h3 className="text-sm md:text-base">{desc}</h3>
      </div>
      <img
        src="/img/fotojurusan.svg"
        alt=""
        className="absolute right-0 max-w-full top-0"
        width={400}
      />
    </>
  );
}
