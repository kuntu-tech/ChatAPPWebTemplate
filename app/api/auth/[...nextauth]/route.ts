import NextAuth, { AuthOptions } from 'next-auth'

const authOptions: AuthOptions = {
  providers: [
    {
      id: 'datail-oauth',
      name: 'DataTail OAuth',
      type: 'oauth',
      authorization: {
        url: 'https://oauth2.datail.ai/login/oauth/authorize',
        params: {
          scope: 'read',
          response_type: 'code',
          redirect_uri: process.env.NEXTAUTH_URL || 'http://localhost:3000',
          state: 'casdoor',
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
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
