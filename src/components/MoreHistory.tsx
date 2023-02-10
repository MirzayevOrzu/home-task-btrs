import React from "react";

type MoreHistoryProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const MoreHistory = ({ setPage }: MoreHistoryProps) => {
    return <button onClick={() => setPage((page) => page + 1)}>More</button>;
};
