import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ApiResponse, LoginResponse, User } from '@/types';

const BACKEND_API = process.env.BACKEND_API;

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    // ...Add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'credentials',
      // `Credentials is used` to generate a form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted, by adding keys to the credentials object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // Note: If you do not specify a display name for a field, it will not be displayed on the sign in page.
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'your username' },
        password: { label: 'Password', type: 'password', placeholder: '*******' },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        const resp = await fetch(`${BACKEND_API}/account/authenticate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
          
        const data : ApiResponse = await resp.json();
        console.log(data);
        if (!data.succeeded) {
          if (data.Message != null) throw new Error(data.Message);
          throw new Error(data.Errors[0]);
        }

        const loginData = data.data as LoginResponse;
        
        return {
          id: loginData.id,
          userName: loginData.userName,
          email: loginData.email,
          roles: loginData.roles,
          clientId: loginData.clientId,
          isVerified: loginData.isVerified,
          jwtToken: loginData.jwtToken,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    }
  },
  pages: {
    signIn: '/login'
  }
});

export { handler as GET, handler as POST };