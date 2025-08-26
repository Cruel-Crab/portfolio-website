import { RiReactjsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className="text-7xl text-red-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript1 className="text-7xl text-yellow-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-7xl text-orange-700"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-7xl text-sky-400"/>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
