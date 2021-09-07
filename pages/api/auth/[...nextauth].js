import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      singinUrl: process.env.NEXTAUTH_URL + "/api/auth/signin/facebook",
      callbackUrl: process.env.NEXTAUTH_URL + "/api/auth/callback/facebook",
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  //   database: process.env.DATABASE_URL,
});
