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
})