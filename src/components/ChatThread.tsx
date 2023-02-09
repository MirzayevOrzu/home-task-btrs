import React, { useEffect } from "react";
import { Message, User } from "../types";
import { ChatMessage } from "./ChatMessage";

type ChatThreadProps = {
    user: User | null;
    messages: Message[];
};

export const ChatThread = ({ user, messages }: ChatThreadProps) => {
    useEffect(() => {
        window.scrollTo(0, document.querySelector("ul")!.scrollHeight);
    }, []);

    return (
        <div>
            <ul>
                {messages.map((msg) => (
                    <ChatMessage
                        key={`${msg.id}-${msg.from.id}`}
                        message={msg}
                        user={user}
                    />
                ))}
            </ul>
        </div>
    );
};
