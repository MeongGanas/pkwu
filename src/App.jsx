import Home from "./components/Home";
import Keunggulan from "./components/Keunggulan";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <section id="home">
        <div className="bg-black pt-52 pb-36 px-10 h-screen bg-opacity-65 flex items-end">
          <Home />
        </div>
      </section>
      <section id="home" className="overflow-hidden">
        <div className="w-[110%] h-40 bg-red-700 absolute rotate-[5deg] -translate-x-5"></div>
        <div className="w-[120%] bg-[#DD2121] h-80 absolute -rotate-[5deg]"></div>
        <div className="bg-[#DD2121] py-20 flex items-center px-5 md:px-10 min-h-screen">
          <Keunggulan />
        </div>
      </section>
    </div>
  );
}
