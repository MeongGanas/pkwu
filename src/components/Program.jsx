import CardProgram from "./card/CardProgram";

export default function Program() {
  return (
    <div className="w-full text-center gap-9">
      <div className="w-full flex justify-center items-center mb-5">
        <div className="bg-red-900 rounded-full p-2">
          <img src="./img/downButton.svg" width={40} />
        </div>
      </div>
      <h1 className="text-4xl font-extrabold mb-10 text-[#ffffff]">
        Program Keahlian
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <CardProgram
          title={"TKJ"}
          desc={"Teknik Jaringan Komputer"}
          url={"/img/desktop.svg"}
        />
        <CardProgram
          title={"TEL"}
          desc={"Telekomunikasi"}
          url={"/img/tower.svg"}
        />
        <CardProgram
          title={"DBP"}
          desc={"Digital Bisnis & Pariwisata"}
          url={"/img/paspor.svg"}
        />
        <CardProgram
          title={"RPL"}
          desc={"Rekayasa Perangkat Lunak"}
          url={"/img/laptop.svg"}
        />
      </div>
    </div>
  );
}
