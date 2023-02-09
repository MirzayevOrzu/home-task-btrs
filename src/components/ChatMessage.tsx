import React from "react";
import { Message } from "../types";

type ChatMessageProps = {
    message: Message;
};

export const ChatMessage = ({ message }: ChatMessageProps) => {
    return (
        <li>
            {message.text} <i>{message.from.name}</i>
        </li>
    );
};
