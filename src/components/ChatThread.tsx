import React from "react";
import { Message } from "../types";
import { ChatMessage } from "./ChatMessage";

type ChatThreadProps = {
    messages: Message[];
};

export const ChatThread = ({ messages }: ChatThreadProps) => {
    return (
        <div>
            <ul>
                {messages.map((msg) => (
                    <ChatMessage
                        key={`${msg.id}-${msg.from.id}`}
                        message={msg}
                    />
                ))}
            </ul>
        </div>
    );
};
