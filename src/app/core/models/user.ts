export class User {    
    id: number;
    username: string;
    email: string;
    role: Role;    
    password: string;
    active: boolean;
    token: string;

    public isAdmin(): boolean {
        return this.role == Role.admin;
    };
}

enum Role {
    admin = "admin",
    user = "user"
}
