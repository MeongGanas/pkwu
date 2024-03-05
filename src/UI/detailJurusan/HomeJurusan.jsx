export default function HomeJurusan({ jurusan, desc, imgpath }) {
  return (
    <>
      <img
        src="/img/shapejurusan.svg"
        alt=""
        className="hidden sm:block absolute left-0 max-w-full top-0"
        width={400}
      />
      <div className="w-full flex flex-wrap">
        <div className="w-full max-w-2xl px-10 sm:pl-28 sm:pr-20 relative">
          <h2 className="text-3xl mb-2 font-semibold">Jurusan</h2>
          <h1 className="text-3xl mb-2 font-extrabold text-[#CA1010] uppercase">
            {jurusan}
          </h1>
          <h3 className="text-sm md:text-base">{desc}</h3>
          <div className="bg-red-900 w-14 h-14 relative sm:absolute left-1/2 sm:-bottom-1/2 flex items-center rounded-full p-2">
            <img src="/img/downButton.svg" width={40} />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <img
            src={`/img/${imgpath}/fotojurusan.svg`}
            alt=""
            className="block mt-5 lg:hidden max-w-full"
            width={500}
          />
        </div>
      </div>
      <img
        src={`/img/${imgpath}/fotojurusan.svg`}
        alt=""
        className="absolute right-0 hidden lg:block max-w-full top-0 -z-10"
        width={500}
      />
    </>
  );
}
