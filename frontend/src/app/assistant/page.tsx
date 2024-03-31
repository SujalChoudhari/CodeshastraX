"use client";
import React, { useEffect, useRef, useState } from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Chat from '@/components/chat';
import PromptBox from '@/components/PromptBox';
import Terminal from '@/components/Terminal';
import WebPage from '@/components/WebPage';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AuroraBackground } from '@/components/aurora-background';
import toast from 'react-hot-toast';
import { FilesPanel } from '@/components/component/files-panel';

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export default function Page() {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [animatePrompt, setAnimatePrompt] = useState(false);
  const [browserURL, setBrowserURL] = useState("");
  const [timeMs, setTimeMs] = useState(null);

  const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '#files', popover: { title: 'Sandbox Simulation', description: 'Access everything inside Sandbox', side: "left", align: 'start' } },
      { element: '#terminal', popover: { title: 'Access via Terminal', description: 'Access everything inside Sandbox manually using this Terminal' } },
      { element: '#inputs', popover: { title: 'Communicate with WaveByte via these Inputs', description: 'Ask WaveByte to perform tasks in sandbox' } },
      { element: '#voice_login', popover: { title: 'Voice based controls', description: 'Say `Hello` and AI identifies you.' } },
      { element: '#prompt', popover: { title: 'Transparancy', description: 'See the prompt that gets executed when you use the AI' } },
    ]
  });

  const speak = async (text: string, wordsToConvert: number = 50) => {
    // Split the text into words
    const words = text.split(' ');
    // Take the first N words
    const wordsToSpeak = words.slice(0, wordsToConvert).join(' ');

    // Check if the SpeechSynthesis API is available
    if ('speechSynthesis' in window) {
      // Create a new SpeechSynthesisUtterance instance
      const utterance = new SpeechSynthesisUtterance(wordsToSpeak);

      // Set the voice and language
      // Note: You might need to select a voice that matches the language of your text
      // This is just an example, you might want to set it dynamically based on your application's needs
      utterance.lang = 'en-US';

      // Speak the text
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('SpeechSynthesis API is not supported in this browser.');
    }
  };

  // Example usage within onInputSent function
  const onInputSent = async (input: string) => {
    const command = input.trim();
    try {
      const response = await axios.get(`http://127.0.0.1:80/chat/chat?message=${encodeURIComponent(command)}`);
      setChatMessages(prevMessages => [...prevMessages, command, response.data.response]);
      console.log(response.data);

      // Convert and speak the first 50 words of the response
      speak(response.data.response, 50);

      if (response.data.browser_url) {
        setBrowserURL(response.data.browser_url);
      }
      // Check if response.data.time_ms exists and set it
      if (response.data.time_ms) {
        setTimeMs(response.data.time_ms);
      }
      toast.success(`Successful interaction: ${timeMs}ms`)
    } catch (error) {
      console.error('Error sending input:', error);
      toast.error("Failed to send Input. Try Again")
    }
  };


  useEffect(() => {
    const resetChat = async () => {
      try {
        await axios.get("http://127.0.0.1:80/chat/init");
      } catch (error) {
        console.error('Error resetting chat:', error);
        // Handle error (if required)
      }
    };
    resetChat();
    driverObj.drive();
  }, []);
  return (
    <>

      <AuroraBackground className=''>
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border "
        >
          <ResizablePanel defaultSize={15} maxSize={15}>
            <FilesPanel />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={100}>
            <div className="h-screen flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className='ml-10 mt-10'>

                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>

                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-32 gap-2">
                  <Link href='/graph'>
                    <div className='text-center text-gray-500 mt-1 '>Graph</div>
                  </Link>
                  <Link href='/landing'>
                    <div className='text-center text-gray-500 mt-2'>Home</div>
                  </Link>
                </PopoverContent>
              </Popover>
              <h1 className=" text-lg  md:text-4xl  bg-clip-text text-transparent bg-black  text-center font-sans font-bold">
                WaveByte
              </h1>
              <Chat chatData={chatMessages.map((message, index) => ({ isUser: index % 2 === 0, message }))} />
              <PromptBox onSubmitPressed={onInputSent} animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} timeMs={timeMs} />
              <Terminal animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={40} maxSize={60}>
            <WebPage browserURL={browserURL} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </AuroraBackground>
    </>
  );
}
