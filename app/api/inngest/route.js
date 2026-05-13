 import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdate,
  ],
   signingKey: process.env.INNGEST_SIGNING_KEY,
});