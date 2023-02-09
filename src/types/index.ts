export type User = {
    id: number;
    name: string;
};

export type Message = {
    id: number;
    text: string;
    from: User;
    time: string; // datestring
};
