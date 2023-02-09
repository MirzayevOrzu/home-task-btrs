import React, { useState } from "react";
import { User } from "../types";

type SendMessageProps = {
    user: User | null;
};

export const SendMessage = ({ user }: SendMessageProps) => {
    const [msgText, setMsgText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert(
            JSON.stringify({
                id: Date.now(),
                text: msgText,
                from: user,
            })
        );
    };

    return (
        <div>
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
