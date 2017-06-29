/*
    User

    A model used to represent a basic user of the system.
*/
export interface User {
    _id: any;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    active: boolean;
}
