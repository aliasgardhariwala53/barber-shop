export type Barber = {
    id: string;
    name: string;
    avatar: string;
    availableServices: string[];
};

export type Service = {
    id: string;
    name: string;
    price: number;
    duration: number;
};
