import React from "react";
import { Message } from "../types";

type ChatMessageProps = {
    message: Message;
    isOwner: boolean;
};

export const ChatMessage = ({ message, isOwner }: ChatMessageProps) => {
    return (
        <li style={{ textAlign: isOwner ? "right" : "left" }}>
            {message.text} <i>{isOwner ? "You" : message.from.name}</i>
        </li>
    );
};
