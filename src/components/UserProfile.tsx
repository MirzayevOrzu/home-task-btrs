import React from "react";
import { User } from "../types";

type UserProfileProps = {
    user: User | null;
};

export const UserProfile = ({ user }: UserProfileProps) => {
    return (
        <div id="user-profile">
            <p>ID: {user?.id}</p>
            <p>Name: {user?.name}</p>
        </div>
    );
};
