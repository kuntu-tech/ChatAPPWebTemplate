import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AuthOptions } from 'next-auth'

const authOptions: AuthOptions = {
  providers: [
    {
      id: 'datail-oauth',
      name: 'DataTail OAuth',
      type: 'oauth' as const,
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
      profile(profile: { id: string; name?: string; username?: string; email?: string; avatar_url?: string }) {
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

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome, {session.user?.name || 'User'}!
              </h1>
              <p className="text-gray-600 mb-6">
                You have successfully logged in with DataTail OAuth.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  User Information
                </h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {session.user?.name || 'N/A'}</p>
                  <p><span className="font-medium">Email:</span> {session.user?.email || 'N/A'}</p>
                  {session.user?.image && (
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Avatar:</span>
                      <img 
                        src={session.user.image} 
                        alt="User Avatar" 
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
