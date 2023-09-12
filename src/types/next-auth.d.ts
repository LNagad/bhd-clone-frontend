import { User } from './User';

declare module 'next-auth' {
    interface Session {
        user:User
    }
}