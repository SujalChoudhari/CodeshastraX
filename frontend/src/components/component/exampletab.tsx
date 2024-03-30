import Image from "next/image";
import { Tabs } from "../ui/tabs";
import Spline from "@splinetool/react-spline";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Speech recognition",
      value: "Speech recognition",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-purple-600 bg-gradient-to-br from-slate-50 to-slate-50 border-purple-600 border-solid border-2">
          <p>Highly accurate speech recognition</p>
          <DummyContent imageSrc="/landing/images/1.png" />
        </div>
      ),
    },
    {
      title: "Information Retrieval and Task Execution",
      value: "Information Retrieval and Task Execution",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-pink-600 bg-gradient-to-br from-slate-50 to-slate-50 border-pink-600 border-solid border-2">
          <p>A user-friendly intuitive interface</p>
          <DummyContent imageSrc="/landing/images/2.png" />
        </div>
      ),
    },
    {
        title: "Structured flow",
        value: "Structured flow",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-purple-600 bg-gradient-to-br from-slate-50 to-slate-50 border-purple-300 border-solid border-2">
            <p>Seamless data flow, clear input, perfect output</p>
            <DummyContent imageSrc="/landing/images/2.png" />
          </div>
        ),
      },
      {
        title: "Realistic voice",
        value: "Realistic voice",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-300 bg-gradient-to-br from-slate-50 to-slate-50 border-yellow-300 border-solid border-2">
            <p>Realistic pleasant voice to enhance user engagement</p>
            <DummyContent imageSrc="/landing/images/4.png" />
          </div>
        ),
      },
      {
        title: "Version control",
        value: "chat",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-300 bg-gradient-to-br from-slate-50 to-slate-50 border-yellow-300 border-solid border-2">
            <p>Realistic pleasant voice to enhance user engagement</p>
            <DummyContent imageSrc="/landing/images/4.png" />
          </div>
        ),
      },
      
    // Add more tabs with different image sources as needed
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imageSrc }) => {
  return (
    <div>
      <Image
        src={imageSrc}
        alt="dummy image"
        width={1000}
        height={1000}
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
  );
};
