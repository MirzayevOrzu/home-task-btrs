import React, { useEffect, useState } from "react";
import { User } from "./types";

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const name = prompt("What is your name?");

        setUser({ id: new Date().getTime(), name: name! });
    }, []);

    return <div className="App">Home</div>;
}

export default App;
