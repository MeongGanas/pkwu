import Layout from "../Layout/layout";
import Guru from "../components/Guru";
import Home from "../components/Home";
import Keunggulan from "../components/Keunggulan";
import Navbar from "../components/Navbar";
import Sambutan from "../components/Sambutan";

export default function Intro() {
  return (
    <Layout>
      <section id="home">
        <div className="bg-black pt-52 pb-36 px-10 h-screen bg-opacity-65 flex items-end">
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

      <section id="guru">
        <div className="py-20 w-full flex items-center min-h-screen bg-white"></div>
      </section>
    </Layout>
  );
}
