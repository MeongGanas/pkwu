export default function CardGuru({ url, title, desc }) {
  return (
    <div className="relative bg-white rounded-xl max-w-60 pt-24 mb-20 pb-10 px-5">
      <img src={url} alt="" className="absolute -top-1/4 left-10" />
      <h1 className="text-[#CA1010] mt-2 font-bold text-xl mb-3 text-center">
        {title}
      </h1>
      <p className="text-center text-sm">{desc}.</p>
    </div>
  );
}
