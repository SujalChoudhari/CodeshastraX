import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { SquareTerminal } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

function Terminal({ animatePrompt, setAnimatePrompt }: { animatePrompt: boolean, setAnimatePrompt: any }) {
    const [commandInput, setCommandInput] = useState('');
    const [terminalOutput, setTerminalOutput] = useState<string[]>([]);

    const handleTriggerClick = () => {
        setAnimatePrompt(true); // Toggle animation state
        setTimeout(() => setAnimatePrompt(false), 500); // Reset animation state after 500ms
    };

    const handleCommandExecution = () => {
        // Assuming FastAPI endpoint is running locally at http://127.0.0.1/term/exec
        const apiUrl = 'http://127.0.0.1:80/term/exec';
        fetch(`${apiUrl}?command=${encodeURIComponent(commandInput)}`)
            .then(response => response.json())
            .then(data => {
                // Handle response from the API (if required)
                console.log(data);
                setTerminalOutput(prevOutput => [...prevOutput, `$ Sandbox/> ${commandInput}`, data]);
            })
            .catch(error => {
                console.error('Error executing command:', error);
                // Handle error (if required)
            });
        setCommandInput('');
    };

    return (
        <Accordion type="single" collapsible className="w-full border mt-4 z-10">
            <AccordionItem value="item-1">
                <div className="items-center flex">
                    <SquareTerminal className='' />
                    <AccordionTrigger className='ml-2 ' onClick={handleTriggerClick}>Terminal</AccordionTrigger>
                </div>
                <AccordionContent className='px-4 '>
                    <div className="flex-1 flex flex-col p-2 overflow-hidden">
                        <div className="flex-1 flex flex-col gap-2 overflow-auto text-sm">
                            <ScrollArea className='h-[250px]'>
                                {terminalOutput.map((output, index) => (
                                    <div key={index}><pre>{output}</pre></div>
                                ))}
                            </ScrollArea>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-cyan-600 select-none">{"$ Sandbox/>"}</div>
                            <div className="flex-1">
                                <Input
                                    className="w-full appearance-none bg-transparent border-0 box-border p-0"
                                    id="terminal-input"
                                    placeholder="Type a command..."
                                    value={commandInput}
                                    onChange={e => setCommandInput(e.target.value)}
                                />
                            </div>
                            <Button size="sm" onClick={handleCommandExecution}>Run</Button>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default Terminal;
