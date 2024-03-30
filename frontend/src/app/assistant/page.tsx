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


export default function Page() {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [animatePrompt, setAnimatePrompt] = useState(false);
  const [browserURL, setBrowserURL] = useState("");

  const onInputSent = async (input: string) => {
    const command = input.trim();
    try {
      const response = await axios.get(`http://127.0.0.1:80/chat/chat?message=${encodeURIComponent(command)}`);
      setChatMessages(prevMessages => [...prevMessages, command, response.data.response]);
      console.log(response.data)
      if (response.data.browser_url) {
        setBrowserURL(response.data.browser_url)
      }
    } catch (error) {
      console.error('Error sending input:', error);
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
  }, []);

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <>

    <AuroraBackground className=''>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border "
      >
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


            <div className='text-center '>WaveByte</div>
            <Chat chatData={chatMessages.map((message, index) => ({ isUser: index % 2 === 0, message }))} />
            <PromptBox onSubmitPressed={onInputSent} animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />
            <Terminal animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={0}>
          <WebPage browserURL={browserURL} />
        </ResizablePanel>
      </ResizablePanelGroup>
      </AuroraBackground>
    </>
  );
}
