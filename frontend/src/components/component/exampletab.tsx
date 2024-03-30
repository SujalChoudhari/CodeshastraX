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
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-blue-700 bg-gradient-to-br from-slate-50 to-slate-50 border-blue-700 border-solid border-2">
            <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-black md:text-2xl'>ByteWave</h2>
          <h2 className='text-md md:text-2xl'>Your Intelligent Voice Companion, Tailored to Perfection</h2>
        </div>
        <p className='max-w-md text-sm md:text-base text-zinc-500'>Insightful is an AI-powered sales optimization tool that provides data-driven insights to boost sales performance.</p>
      </div>

      <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10 ml-30'>
      <DummyContent imageSrc="/landing/images/3.png" />
      </div>
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
