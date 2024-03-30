import React, { useEffect, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

import { GitGraph, User2Icon } from 'lucide-react'
import { motion } from 'framer-motion';
import { Skeleton } from './ui/skeleton';
import UserChat from './userChat';
import ChatbotResponse from './ui/ChatbotResponse';

export default function Chat() {

    return (
        <ScrollArea className="mt-16 min-h-max h-[460px]">

            <div className="mx-auto max-w-2xl px-4">
                <UserChat />
                <ChatbotResponse />
            </div>
       </ScrollArea>
    )
}
