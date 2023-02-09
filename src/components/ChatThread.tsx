import React from "react";
import { Message } from "../types";

type ChatThreadProps = {
    messages: Message[];
};

export const ChatThread = ({ messages }: ChatThreadProps) => {
    return (
        <div>
            <ul>
                {messages.map((msg) => (
                    <li key={`${msg.id}-${msg.from.id}`}>
                        {msg.text} <i>{msg.from.name}</i>
                    </li>
                ))}
            </ul>
        </div>
    );
};
