import NextAuth, { AuthOptions } from 'next-auth'

export const authOptions = {
  providers: [
    {
      id: 'datail-oauth',
      name: 'DataTail OAuth',
      type: 'oauth',
      authorization: {
        url: 'https://oauth2.datail.ai/oauth/authorize',
        params: {
          scope: 'read',
          response_type: 'code',
        },
      },
      token: 'https://oauth2.datail.ai/oauth/access_token',
      userinfo: 'https://oauth2.datail.ai/api/user',
      clientId: process.env.DATAIL_CLIENT_ID || '8b2bbb91da9609df2750',
      clientSecret: process.env.DATAIL_CLIENT_SECRET,
      profile(profile: any) {
        return {
          id: profile.id,
          name: profile.name || profile.username,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    },
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
}

const handler = NextAuth(authOptions as AuthOptions)

export { handler as GET, handler as POST }
