"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Chat from '@/components/chat';
import PromptBox from '@/components/PromptBox';
import Terminal from '@/components/Terminal';
import WebPage from '@/components/WebPage'

export default function page() {

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
  const [animatePrompt, setAnimatePrompt] = useState(false); // State to control animation
  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border"
      >
        <ResizablePanel defaultSize={55}>
          <div className="h-screen flex flex-col">
            <Chat />
            {/* prompt box */}
            <PromptBox animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />
            <Terminal animatePrompt={animatePrompt} setAnimatePrompt={setAnimatePrompt} />

          </div>

        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={45}>

          <WebPage />

        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}

