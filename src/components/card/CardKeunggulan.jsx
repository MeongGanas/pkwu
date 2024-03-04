export default function CardKeunggulan({ title, url, desc }) {
  return (
    <div className="group bg-white p-5 md:p-8 rounded-xl w-full max-w-[340px] flex items-center transition-all duration-200 relative h-40 overflow-hidden shadow-md">
      <div className="flex items-center gap-8 md:gap-10">
        <img src={url} alt="" />
        <h1 className="text-lg font-semibold">{title}.</h1>
      </div>
      <div className="transition-all p-5 md:p-8 duration-200 flex items-center justify-center absolute top-0 left-0 bg-white w-full opacity-0 translate-y-full h-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:h-full">
        <h1 className="hover:text-[#E91313]">{desc}.</h1>
      </div>
    </div>
  );
}
