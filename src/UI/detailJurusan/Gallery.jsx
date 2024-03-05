export default function Gallery({ title }) {
  return (
    <div className="w-full">
      <h1 className="text-center text-4xl text-white font-bold uppercase mb-16">
        Galeri {title}
      </h1>
      <div
        className="flex w-full px-10 overflow-auto items-center"
        id="gallery"
      >
        <img src={`/img/${title}/${title}1.svg`} alt="" className="max-h-72" />
        <img src={`/img/${title}/${title}2.svg`} alt="" className="max-h-72" />
        <img src={`/img/${title}/${title}3.svg`} alt="" className="max-h-72" />
      </div>
      <img src="/img/shapetelkom.svg" alt="" />
    </div>
  );
}
