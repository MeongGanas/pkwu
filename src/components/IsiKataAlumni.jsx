export default function IsiKataAlumni({ kata, gambar, nama, pekerjaan }) {
  return (
    <div className="group md:p-8 w-full max-w-xl text-white h-fulltext-white">
      <h1 className="text-xl font-black mb-6">
        "<span className="font-normal italic">{kata}</span>"
      </h1>
      <div className="flex justify-center items-center gap-5">
        <div className="bg-white p-2 w-20 h-20 flex items-center justify-center rounded-full">
          <img src={gambar} className="w-16 h-16" />
        </div>
        <div className=" text-start flex flex-col gap-1">
          <h1 className="font-bold text-lg">{nama}</h1>
          <h1 className="text-sm">{pekerjaan}</h1>
        </div>
      </div>
    </div>
  );
}
