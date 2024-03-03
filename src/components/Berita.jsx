import CardBerita from "./CardBerita";

export default function Berita() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-[#CA1010] text-3xl text-center mb-10">
        Berita Terbaru
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10 xl:grid-cols-4 px-10">
          <CardBerita />
          <CardBerita />
          <CardBerita />
          <CardBerita />
        </div>
      </div>
    </div>
  );
}
