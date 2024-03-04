import { SvelteKitAuth } from "@auth/sveltekit"
import { DESCOPE_ID, DESCOPE_SECRET } from "$env/static/private"

// ignore highlighted errors
export const handle = SvelteKitAuth({
  providers: [ 
    {
      id: "descope",
      name: "Descope",
      type: "oidc",
      wellKnown: `https://api.descope.com/${DESCOPE_ID}/.well-known/openid-configuration`,
      issuer: `https://api.descope.com/${DESCOPE_ID}`,
      authorization: { params: { scope: "openid email profile" } },
      clientId: DESCOPE_ID, 
      clientSecret: DESCOPE_SECRET,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    },
  ],
  callbacks: {
    async jwt({token, account, profile}) {
        console.log("JWT Callback Triggered")
        if (account) {
            return {
                ...token,
                access_token: account.access_token,
                expires_at: Math.floor(Date.now() / 1000 + account.expires_in),
                refresh_token: account.refresh_token,
                profile: {
                  name: profile?.name,
                  email: profile?.email,
                  image: profile?.picture,
              },
            }
        } else if (Date.now() < token.expires_at * 1000) {
            return token
        } else {
            try {
                const response = await fetch("https://api.descope.com/oauth2/v1/token", {
                    headers: {"Content-Type": "application/x-www-form-urlencoded"},
                    body: new URLSearchParams({
                        client_id: DESCOPE_ID,
                        client_secret: DESCOPE_SECRET,
                        grant_type: "refresh_token",
                        refresh_token: token.refresh_token,
                    }),
                    method: "POST",
                })

                const tokens = await response.json()

                if (!response.ok) throw tokens

                return {
                    ...token,
                    access_token: tokens.access_token,
                    expires_at: Math.floor(Date.now() / 1000 + tokens.expires_in),
                    refresh_token: tokens.refresh_token ?? token.refresh_token,
                }
            } catch (error) {
                console.error("Error refreshing access token", error)
                return {...token, error: "RefreshAccessTokenError"}
            }
        }
    },

    async session({session, token}) {
        if (token.profile) {
          session.user = token.profile;
        }

        session.error = token.error
        session.accessToken = token.access_token
        return session
    },
  }
})