import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "nome@email.com"
        },
        password: {
          label: "Senha",
          type: "password"
        }
      },
      async authorize(credentials) {
        const user = { id: "1", nome: "ronan", email: "ronan86@gmail.com" }
        return user
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }