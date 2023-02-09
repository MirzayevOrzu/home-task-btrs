import React, { useEffect, useState } from "react";
import { UserProfile } from "./components/UserProfile";
import { User } from "./types";

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const name = prompt("What is your name?");

        setUser({ id: new Date().getTime(), name: name! });
    }, []);

    return (
        <div className="App">
            <UserProfile user={user} />
        </div>
    );
}

export default App;
