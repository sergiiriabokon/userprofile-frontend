export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    registrationDate: Date;
    ipAddress: string;
    status: string; // enum acctually
}
