import React, { useState } from "react";
import { Message, User } from "../types";

type SendMessageProps = {
    user: User | null;
    channel: BroadcastChannel;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const SendMessage = ({
    user,
    channel,
    setMessages,
}: SendMessageProps) => {
    const [msgText, setMsgText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newMsg: Message = {
            id: Date.now(),
            text: msgText,
            from: user as User,
            time: new Date().toDateString(),
        };

        setMsgText("");

        const messages: Message[] = JSON.parse(
            localStorage.getItem("messages")!
        );
        messages.push(newMsg);
        localStorage.setItem("messages", JSON.stringify(messages));

        channel.postMessage(JSON.stringify(newMsg));

        // This is done so because channel postMessage does not broadcast to it's own tab
        setMessages((messages) => [...messages, newMsg]);
    };

    return (
        <div id="send-message">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={msgText}
                    onChange={(e) => setMsgText(e.target.value)}
                />
                <button disabled={!msgText} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
