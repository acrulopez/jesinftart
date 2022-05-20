import CarouselImage from "@/components/CarouselImage";
import { hashes } from "@/components/hashes";
import Layout from "../components/Layout";
import { useEthers } from "@usedapp/core";

export default function Main() {
  return (
    <Layout>
      <div className="text-slate-300 font-body">
        <div className="mt-12 mx-auto lg:max-w-min sm:max-w-max">
          <h1 className="text-6xl drop-shadow-xl mx-auto font-bold font-titles text-center text-slate-100 mb-10">
            WebOS
          </h1>

          <div className="flex flex-col space-y-16 rounded-md drop-shadow-2xl w-full lg:flex-row lg:overflow-x-scroll lg:scrollbar-hide lg:space-y-0 lg:space-x-10">
            {hashes.map((h) => {
              return <CarouselImage key={h} hash={h} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}