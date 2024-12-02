type Role = 'regular' | 'admin';

type UserState = {
    id: string;
    email: string;
    role: Role;
};

export type { Role, UserState };
