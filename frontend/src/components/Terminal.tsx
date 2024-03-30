import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { SquareTerminal } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Terminal({ animatePrompt, setAnimatePrompt }: { animatePrompt: boolean, setAnimatePrompt: any }) {
    const handleTriggerClick = () => {
        setAnimatePrompt(true); // Toggle animation state
        setTimeout(() => setAnimatePrompt(false), 500); // Reset animation state after 500ms
    };

    return (
        <Accordion type="single" collapsible className="w-full border mt-4">
            <AccordionItem value="item-1">
                <div className="items-center flex">
                    <SquareTerminal className='' />
                    <AccordionTrigger className='ml-2 ' onClick={handleTriggerClick}>Terminal</AccordionTrigger>
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
    )
}

export default Terminal