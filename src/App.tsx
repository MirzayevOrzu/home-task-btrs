import React, { useEffect, useState } from "react";
import { UserProfile } from "./components/UserProfile";
import { defaultMessages } from "./fixtures/messages";
import { User } from "./types";

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const name = prompt("What is your name?");

        const messagesJSON = localStorage.getItem("messages");

        if (!messagesJSON) {
            localStorage.setItem("messages", JSON.stringify(defaultMessages));
        } else {
            // TODO save to local state (redux, react state)
        }

        setUser({ id: new Date().getTime(), name: name! });
    }, []);

    return (
        <div className="App">
            <UserProfile user={user} />
        </div>
    );
}

export default App;
