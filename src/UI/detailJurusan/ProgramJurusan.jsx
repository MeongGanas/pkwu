export default function ProgramJurusan({ program }) {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-[#CA1010] text-center mb-10">
        Program Kejuruan
      </h1>
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center max-w-screen-md items-center gap-10">
          {program &&
            program.map((prog) => (
              <div className="w-52 flex items-center justify-center">
                <div>
                  <img src={prog.img} className="mx-auto" alt="" />
                  <h1 className="font-semibold text-xl mt-5 text-wrap text-center w-full">
                    {prog.title}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
