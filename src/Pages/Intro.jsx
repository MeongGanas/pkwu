import Layout from "../Layout/layout";
import Berita from "../UI/main/Berita";
import Guru from "../UI/main/Guru";
import Home from "../UI/main/Home";
import KataAlumni from "../UI/main/KataAlumni";
import Keunggulan from "../UI/main/Keunggulan";
import Program from "../UI/main/Program";
import Sambutan from "../UI/main/Sambutan";

export default function Intro() {
  return (
    <Layout>
      <section id="home">
        <div className="bg-black pt-52 pb-36 px-10 min-h-screen bg-opacity-65 flex items-end">
          <Home />
        </div>
      </section>

      <section id="keunggulan">
        <div className="w-[110%] bg-[#DD2121] h-40  absolute rotate-[3deg] -translate-x-5"></div>
        <div className="w-[120%] bg-[#ca1010] h-80 absolute -rotate-[3deg]"></div>
        <div className="bg-[#ca1010] py-20 flex items-center px-5 md:px-10 min-h-screen">
          <Keunggulan />
        </div>
      </section>

      <section id="program">
        <div className="w-full pb-20 px-10 min-h-screen bg-opacity-65 flex items-center">
          <Program />
        </div>
      </section>

      <section id="sambutan">
        <div className="bg-white py-20 flex items-center min-h-screen max-w-screen-lg lg:rounded-r-xl">
          <Sambutan />
        </div>
      </section>

      <section id="guru">
        <div className="py-20 w-full flex items-center min-h-screen">
          <Guru />
        </div>
      </section>

      <section id="alumni">
        <div className="pt-20 w-full bg-white">
          <KataAlumni />
        </div>
      </section>

      <section id="berita">
        <div className="py-20 w-full flex items-center min-h-screen bg-white">
          <Berita />
        </div>
      </section>

      <section id="join">
        <div className="py-10 w-full text-center bg-[#EDEDED]">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#CA1010]">
            Ayo gabung bersama kami!
          </h1>
        </div>
      </section>
    </Layout>
  );
}
