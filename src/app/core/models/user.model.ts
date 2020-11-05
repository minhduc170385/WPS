import { Deserializable } from './deserializable';

export class User implements Deserializable {    
    id: number;
    username: string;
    displayname:string;
    email: string;
    role: Role;    
    password: string;
    active: boolean;
    token: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    public isAdmin(): boolean {
        return this.role == Role.admin;
    };
}

export enum Role {
    admin = "admin",
    user = "user"
}
