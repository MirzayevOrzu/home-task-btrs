import React, { useEffect, useState } from "react";
import { channel } from "./app/channel";
import { SendMessage } from "./components/SendMessage";
import { UserProfile } from "./components/UserProfile";
import { defaultMessages } from "./fixtures/messages";
import { Message, User } from "./types";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    channel.onmessage = (event) => {
        const newMessage: Message = JSON.parse(event.data);
        console.log(newMessage.text);
    };

    channel.onmessageerror = (event) => {
        console.log(event);
    };

    useEffect(() => {
        const name = prompt("What is your name?");

        const messagesJSON = localStorage.getItem("messages");

        if (!messagesJSON) {
            localStorage.setItem("messages", JSON.stringify(defaultMessages));
        } else {
            setMessages(JSON.parse(messagesJSON));
        }

        setUser({ id: new Date().getTime(), name: name! });

        return () => {
            channel.close();
        };
    }, []);

    return (
        <div className="App">
            <UserProfile user={user} />
            <SendMessage user={user} channel={channel} />
        </div>
    );
}

export default App;
