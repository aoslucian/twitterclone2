import nextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import { TokenClass } from "typescript"

export default nextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version:'2.0',
    }),
    // ...add more providers here
  ],
})

// import nextAuth from 'next-auth'
// import TwitterProvider from 'next-auth/providers/twitter'
// export default nextAuth({
//     providers: [
//         TwitterProvider({
//             clientId: process.env.TWITTER_CLIENT_ID,
//             clientSecret: process.env.TWITTER_CLIENT_SECRET,
//             version: '2.0',
//         })
//     ]
// })



// Api key:
// p5VjQ5KUnGVMTD4e1N6ARUVBG

// Api key secret

// Xn86gawXrFeWQiFSuQzccvuI60emdsvcNGVh6xUiC2G1h245JZ

// Bearer Token 

// AAAAAAAAAAAAAAAAAAAAAL1hlgEAAAAA5RBM9dCsVDMNokXoX0dxRuvg5E0%3DyTEpkR2RRaggD1W4u8w4bE0F5eBkC6oVo57aq9lZhOJyEssKrs



// Client Id:
 
// TFowX0h2UWF6Sm5EZFRTU0VSRks6MTpjaQ

// client secret:

// pASGCgIrm9542V-ObjM0lhORMcjro73EE00Q4e4mx7PsTLxVbl