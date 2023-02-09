import React from "react";
import { Message, User } from "../types";

type ChatMessageProps = {
    message: Message;
    user: User | null;
};

export const ChatMessage = ({ message, user }: ChatMessageProps) => {
    const isOwner = message.from.id === user?.id;

    return (
        <li style={{ textAlign: isOwner ? "right" : "left" }}>
            {message.text} <i>{isOwner ? "You" : message.from.name}</i>
        </li>
    );
};
