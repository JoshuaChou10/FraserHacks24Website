// app/api/auth/[...nextauth]/route.ts

import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// 1) Create an `authOptions` object
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email;
      }
      return token;
    },
  },
};

// 2) Create the NextAuth handler using `authOptions`
const handler = NextAuth(authOptions);

// 3) Export the handler for GET/POST, and also export `authOptions`
export { handler as GET, handler as POST };
