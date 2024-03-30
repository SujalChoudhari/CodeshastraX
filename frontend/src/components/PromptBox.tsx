import { Calculator, Calendar, Mic, Target } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'
import { motion } from 'framer-motion'
import { useState } from 'react'


function PromptBox({ animatePrompt, setAnimatePrompt }: { animatePrompt: boolean, setAnimatePrompt: any }) {
    return (
        <motion.div
            animate={{
                y: animatePrompt ? [-70, 20, 0] : 1,

            }} // Scale up slightly when animating
            transition={{ duration: 0.5, ease: "easeInOut" }} // Define the transition
        >
            <div className="mx-auto w-full sm:max-w-2xl sm:px-4">
                <div className="bg-background  space-y-4 flex flex-row items-center gap-2  border-t px-4  shadow-lg sm:rounded-xl sm:border md:py-4 ">
                    <Command className="rounded-lg border shadow-md mt-4">

                        <CommandList >
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <Calendar className="mr-2 h-4 w-4" />
                                    <span>Schedule an email reminder for the
                                        project deadline on Friday at 10 AM</span>
                                </CommandItem>
                                <CommandItem>
                                    <Target className="mr-2 h-4 w-4" />
                                    <span>"Remind me to submit the project at 5 PM tomorrow.</span>
                                </CommandItem>
                                <CommandItem>
                                    <Calculator className="mr-2 h-4 w-4" />
                                    <span>What is 15% of 280?</span>
                                </CommandItem>
                                <Dialog >
                                    <DialogTrigger className="underline flex justify-end">
                                        <span className="text-sm my-2 text-gray-500 ml-80 ">{`+ 10 more suggestions`}</span>
                                    </DialogTrigger>

                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>All Predefined tasks</DialogTitle>
                                        </DialogHeader>
                                        <Separator />
                                        <ScrollArea className="max-h-[500px] px-5 flex flex-row">
                                            <div className='flex flex-row items-center'>
                                                <Calculator className="mr-2 h-4 w-4 text-gray-500 " />
                                                <span className="  text-gray-500 " >What is 15% of 280?</span>
                                                {/* ADD MORE PREDEFINED TASKSs*/}
                                            </div>


                                        </ScrollArea>
                                    </DialogContent>
                                </Dialog>
                            </CommandGroup>
                            <CommandSeparator />
                        </CommandList>
                        <CommandInput placeholder="Input Prompt." />
                    </Command>



                    <button className="group h-8 select-none rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]"><span className="block group-active:[transform:translate3d(0,1px,0)]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            fill="white "
                            className='size-4 text-white'

                        >
                            <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
                        </svg>
                    </span></button>
                    <button className="group h-8 select-none rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]"><span className="block group-active:[transform:translate3d(0,1px,0)]">
                        <Mic size={15} />
                    </span></button>


                </div>


            </div>
        </motion.div>
    )
}

export default PromptBox