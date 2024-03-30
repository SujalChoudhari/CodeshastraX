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
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border"
      >
        <ResizablePanel defaultSize={55}>
          <div className="h-screen flex flex-col">
            <Chat chatData={chatMessages.map((message, index) => ({ isUser: index % 2 === 0, message }))} />
            <PromptBox onSubmitPressed={onInputSent} animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />
            <Terminal animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={45}>
          <WebPage browserURL={browserURL} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
