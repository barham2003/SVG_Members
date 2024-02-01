import NextAuth from "next-auth";
import Creds from "next-auth/providers/credentials";
import "dotenv";
const ApiURL = process.env.API_URL;
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Creds({
      name: "Credentials",
      credentials: {
        id: { label: "id", type: "text", placeholder: "jsmith" },
      },
      async authorize(credentials, req): Promise<any> {
        console.log("CREDS: ", credentials);
        if (!credentials.id) return null;
        const res = await fetch(`${ApiURL}/members/${credentials.id}`);
        const json = await res.json();
        if (!res.ok) return null;

        const user = {
          id: json.data._id,
          _id: json.data._id,
          name: json.data.name,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const u = user as unknown as any;
      if (u) {
        token = { ...token, user: { ...user, id: u.id } };
      }

      return token;
    },
    async session({ session, token }: any) {
      session.user = { ...session.user, id: token.user.id };
      return session;
    },
  },
});
