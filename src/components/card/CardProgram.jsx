export default function CardProgram({ title, url, desc, link }) {
  return (
    <div className="group bg-white p-5 rounded-xl w-full max-w-52 flex justify-center transition-all duration-200 relative h-40 overflow-hidden shadow-md">
      <div className=" flex flex-col text-center pn-20">
        <img src={url} alt="" className="h-[42px]" />
        <h1 className="text-lg font-black text-[#8B0C0C]">{title}</h1>
        <h1 className="text-lg font-medium">{desc}</h1>
      </div>
      <div className="transition-all p-5 md:p-8 duration-200 flex flex-col items-center justify-center absolute top-0 left-0 bg-white w-full opacity-0 translate-y-full h-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:h-full">
        <img src={url} alt="" className="h-[42px]" />
        <h1 className="text-lg font-black text-[#8B0C0C]">{title}</h1>
        <h1 className="text-lg font-medium">{desc}</h1>
        <a
          href={link}
          className=" text-gray-600 underline hover:text-[#E91313]"
        >
          Info Lebih Lanjut
        </a>
      </div>
    </div>
  );
}
