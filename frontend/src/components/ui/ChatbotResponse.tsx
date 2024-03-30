"use client"
import React, { useEffect, useState } from 'react'
import { Skeleton } from './skeleton'
import { motion } from 'framer-motion'
import { GitGraph } from 'lucide-react';

function ChatbotResponse() {

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
  )
}

export default ChatbotResponse