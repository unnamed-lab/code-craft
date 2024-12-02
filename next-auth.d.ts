import 'next-auth'
import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
    interface User extends DefaultUser {
        id: string;
      }

  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"]
  }
}