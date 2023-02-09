import React, { useEffect, useState } from "react";
import { channel } from "./apis/channel";
import { ChatThread } from "./components/ChatThread";
import { SendMessage } from "./components/SendMessage";
import { UserProfile } from "./components/UserProfile";
import { defaultMessages } from "./fixtures/messages";
import { Message, User } from "./types";

function App() {
    const [user, setUser] = useState<User | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    channel.onmessage = (event) => {
        const newMessage: Message = JSON.parse(event.data);
        setMessages([...messages, newMessage]);
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
            <ChatThread user={user} messages={messages} />
            <SendMessage
                user={user}
                channel={channel}
                setMessages={setMessages}
            />
        </div>
    );
}

export default App;
