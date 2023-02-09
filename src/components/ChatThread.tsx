import React from "react";
import { Message, User } from "../types";
import { ChatMessage } from "./ChatMessage";

type ChatThreadProps = {
    user: User | null;
    messages: Message[];
};

export const ChatThread = ({ user, messages }: ChatThreadProps) => {
    return (
        <div>
            <ul>
                {messages.map((msg) => (
                    <ChatMessage
                        key={`${msg.id}-${msg.from.id}`}
                        message={msg}
                        isOwner={msg.from.id === user?.id}
                    />
                ))}
            </ul>
        </div>
    );
};
