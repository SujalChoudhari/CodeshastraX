import Image from "next/image";
import { Tabs } from "../ui/tabs";
import Spline from "@splinetool/react-spline";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Speech recognition",
      value: "Speech recognition",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-green-700 bg-gradient-to-br from-green-300 to-green-500 ">
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
         
          <DummyContent imageSrc="/speech-recognition.png" />ß
          <h1 className='text-md md:text-xl'>Speech Recognition and Personalization</h1>
        </div>
        <p className='max-w-md text-base md:text-base text-green-400'>Highly accurate speech recognition</p>
        <p className='max-w-md text-base md:text-base text-green-400'>Voice profile recognition system that can identify individual users based on their unique voice.</p>
        <p className='max-w-md text-base md:text-base text-green-400'>Integrated terminal to accept terminal-style commands in natural language.</p>
      </div>
        </div>
      ),
    },
    {
      title: "Information Retrieval and Task Execution",
      value: "Information Retrieval and Task Execution",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-pink-700 bg-gradient-to-br from-pink-200 to-pink-500">
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
         
          <h1 className='text-md md:text-xl'>Information Retrieval and Task Execution:</h1>
        </div>
        <p className='max-w-md text-base md:text-base text-pink-400'>Conducts customized searches on the internet to be displayed within its own browser window.</p>
        <p className='max-w-md text-base md:text-base text-pink-400'>Ability to execute a variety of predefined tasks based on voice input.</p>
        <p className='max-w-md text-base md:text-base text-pink-400'>Intelligent task matching.</p>
      </div>
          <DummyContent imageSrc="/information-retrieval.png" />
        </div>
      ),
    },
    {
        title: "Structured flow",
        value: "Structured flow",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-purple-600 bg-gradient-to-br from-purple-300 to-purpe-700">
             <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
         
          <h1 className='text-md md:text-xl'>User Interface and Performance:</h1>
        </div>
        <p className='max-w-md text-base md:text-base text-purple-400'>A user-friendly intuitive interface.</p>
        <p className='max-w-md text-base md:text-base text-purple-400'>Quick response time and high performance to ensure a smooth user experience.
</p>
        <p className='max-w-md text-base md:text-base text-purple-400'>Query time graphs</p>
      </div>
            <DummyContent imageSrc="/user-friendly.png" />
          </div>
        ),
      },
      {
        title: "Realistic voice",
        value: "Realistic voice",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-yellow-500 bg-gradient-to-br from-yellow-300 to-slate-50">
   <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>

        <div className='flex flex-col gap-2'>
         
          <h1 className='text-md md:text-2xl'>Advanced Features and Adaptability</h1>
        </div>
        <p className='max-w-md text-lg md:text-base text-yellow-300'>Realistic pleasant voice to enhance user engagement.</p>
        <p className='max-w-md text-lg md:text-base text-yellow-300'>Ability to maintain context across conversations to provide personalized responses.</p>
        <p className='max-w-md text-lg md:text-base text-yellow-300'>Learn and improve performance over time based on user feedback and usage patterns.</p>
      </div>
            <DummyContent imageSrc="/speech-recognition.png" />
          </div>
        ),
      },
      {
        title: "Security",
        value: "chat",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-blue-700 bg-gradient-to-br from-blue-300 to-blue-800">
            <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
         
          <h1 className='text-md mt-12 text-3xl'>Security and Integration</h1>
        </div>
        <p className='max-w-md text-base md:text-base text-blue-500'>Managing context while respecting user privacy and security</p>
        <p className='max-w-md text-base md:text-base text-blue-500'>Autocomplete feature for search text inputs.</p>
        <p className='max-w-md text-base md:text-base text-blue-500'>Validation mechanisms to protect user data, authenticate user accounts securely</p>
      </div>

      <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10 ml-30'>
      <DummyContent imageSrc="/security.png" />
      </div>
          </div>
        ),
      },
      
    // Add more tabs with different image sources as needed
  ];

  return (
    <>
    <div className="h-[2rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center"></div><div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e0c9ff,transparent)]"></div></div>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        
      <Tabs tabs={tabs} />
    </div></>
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