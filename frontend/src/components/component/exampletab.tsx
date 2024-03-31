"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Speech recognition",
      value: "Speech recognition",
      content: (
        <div className="w-full overflow-hidden h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-green-700 bg-gradient-to-br from-green-300 to-green-500 ">
          <p>Product Tab</p>
          <div className="h-[50px]">
          <DummyContent imageSrc="/speech-recognition.png" /></div>
        </div>
      ),
    },
    {
      title: "Information Retrieval and Task Execution",
      value: "Information Retrieval and Task Execution",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-pink-700 bg-gradient-to-br from-pink-200 to-pink-500">
          <p>Information Retrieval and Task ExecutionServices tab</p>
          <DummyContent imageSrc="/information-retrieval.png" />
        </div>
      ),
    },
    {
      title: "Structured flow",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-purple-600 bg-gradient-to-br from-purple-300 to-purpe-700">
          <p>Structured flow</p>
          <DummyContent imageSrc="/information-retrieval.png" />
        </div>
      ),
    },
    {
      title: "Realistic voice",
      value: "Realistic voice",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-500 bg-gradient-to-br from-yellow-300 to-slate-50">
          <p>Realistic voice</p>
          <DummyContent imageSrc="/speech-recognition.png" />
        </div>
      ),
    },
    {
      title: "Advanced Features and Adaptability",
      value: "Advanced Features and Adaptability",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Advanced Features and Adaptability</p>
          <DummyContent imageSrc="/user-friendly.png"/>
        </div>
      ),
    },
    {
      title: "Security and Integration",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-blue-700 bg-gradient-to-br from-blue-300 to-blue-800">
          <p>Security and Integration</p>
          <DummyContent imageSrc="/security.png"/>
        </div>
      ),
    },
  ];

  return (
    <>
    <div className="h-[2rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"></div><div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e0c9ff,transparent)]"></div></div>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    </>
  );
}

const DummyContent = ({ imageSrc }: { imageSrc: string }) => {
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
