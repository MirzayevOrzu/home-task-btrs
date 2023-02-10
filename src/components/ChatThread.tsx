import React, { useEffect } from "react";
import { Message, User } from "../types";
import { ChatMessage } from "./ChatMessage";
import { MoreHistory } from "./MoreHistory";

type ChatThreadProps = {
    user: User | null;
    messages: Message[];
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const ChatThread = ({ user, messages, setPage }: ChatThreadProps) => {
    useEffect(() => {
        const ul = document.querySelector("#chat-thread")!;

        // As css is loading later, I could not find better solution yet
        // TODO optimize this
        setTimeout(() => {
            ul.scrollTo(0, ul.scrollHeight);
        }, 300);
    }, []);

    return (
        <div id="chat-thread">
            <ul>
                <MoreHistory setPage={setPage} />
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
