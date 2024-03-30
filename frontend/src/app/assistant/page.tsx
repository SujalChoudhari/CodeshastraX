"use client"
import React, { useEffect, useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import {
  Calculator,
  Calendar,
  CreditCard,
  GitGraph,
  LoaderIcon,
  Mic,
  Settings,
  Smile,
  SquareTerminal,
  User,
  User2Icon,
  WavesIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function page() {

  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

  const [chatbotResponse, setChatbotResponse] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching the chatbot response from the backend
    const fetchResponse = () => {
      setTimeout(() => {
        setChatbotResponse('Concert Tickets: This might seem obvious, but its a surefire way to make your friends birthday unforgettable. Check out their favorite artists tour schedule and snag some tickets (bonus points for VIP experience if it fits your budget');
      }, 200); // Simulate a 2-second delay
    };

    fetchResponse();
  }, []); // Empty dependency array means this effect runs once on component mount
  return (


    <>


      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex flex-col">



            <ScrollArea className="mt-16 min-h-[460px]">

              <div className="mx-auto max-w-2xl px-4">
                <div>
                  <div className="group relative flex items-start md:-ml-12">
                    <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border shadow-sm"> {/* Seperator */}
                      <User2Icon size={18} />
                    </div>
                    <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
                      What can you do?
                    </div>
                  </div>
                  <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4">
                  </div>
                </div>




                <div>
                  <div className="group relative flex items-start md:-ml-12">
                    <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border shadow-sm"> {/* Seperator */}
                      <GitGraph size={18} />
                    </div>

                    <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">

                      {chatbotResponse ? (
                        <div>
                          {chatbotResponse.split('').map((char, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.005 }} // Adjust delay as needed
                            >
                              {char}
                            </motion.span>
                          ))}
                        </div>
                      ) : (
                        <>
                          <Skeleton className="w-full h-[20px] rounded-full" />
                          <Skeleton className="w-full h-[20px] rounded-full" />
                          <Skeleton className="w-full h-[20px] rounded-full" />
                        </>
                      )}
                    </div>
                  </div>
                  <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4">
                  </div>
                </div>
              </div>


            </ScrollArea>
            



            {/* prompt box */}
            <div className="mx-auto w-full sm:max-w-2xl sm:px-4">
              <div className="bg-background  space-y-4 flex flex-row items-center gap-2  border-t px-4  shadow-lg sm:rounded-xl sm:border md:py-4 ">
                <Command className="rounded-lg border shadow-md mt-4">

                  <CommandList >
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <Smile className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem>
                        <Calculator className="mr-2 h-4 w-4" />
                        <span>Calculator</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                  </CommandList>
                  <CommandInput placeholder="Input Prompt." />
                </Command>


                <Button type="submit" size="icon" variant="outline" disabled  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill=""
                    className='size-4'

                  >
                    <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
                  </svg>
                  <span className="sr-only">Send message</span>
                </Button>
                <Button type="submit" size="icon" variant="outline" disabled >
                  <Mic size={18} />

                  <span className="sr-only">Send message</span>
                </Button>
              </div>
             
            </div>
             <Accordion type="single" collapsible className="w-full border mt-4">
      <AccordionItem value="item-1">
        <div className="items-center flex">
          <SquareTerminal className=''/>
          <AccordionTrigger className='ml-2'>Terminal</AccordionTrigger>
        </div>
        <AccordionContent className='px-4 '>

          {/* <Textarea className='h-full mt-2  '/> */}
          <div className="flex-1 flex flex-col p-2 overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 overflow-auto text-sm">
          <div className="text-cyan-600 select-none">$ ls -la</div>
          <div>. .. package.json pages vercel.json</div>
          <div className="text-cyan-600 select-none">$ npm run dev</div>
          <div>...</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-cyan-600 select-none">{"$Sandbox/>"}</div>
          <div className="flex-1">
            <Input
              className="w-full appearance-none bg-transparent border-0 box-border p-0"
              id="terminal-input"
              placeholder="Type a command..."
            />
          </div>
          <Button size="sm">Run</Button>
        </div>
      </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
           
          </div>
          
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-[80vh] items-center justify-center p-24">
            <span className="font-semibold">Content</span>

           
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
     


    </>


  )
}

