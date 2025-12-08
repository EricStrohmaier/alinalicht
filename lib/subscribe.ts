"use server";

import { ActionResult, error, success } from "./utils";
import { newsletterSchema } from "./schema";

export const subscribe = async (
  email: string
): Promise<ActionResult<string>> => {
  const parsed = newsletterSchema.safeParse({ email });

  if (!parsed.success) {
    return error(parsed.error.message);
  }

  if (!process.env.BEEHIIV_API_KEY || !process.env.BEEHIIV_PUBLICATION_ID) {
    return error("Server configuration error");
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: parsed.data.email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "website",
          utm_medium: "direct",
        }),
      }
    );

    if (!response.ok) {
      const data = await response.text();
      return error(`Subscription failed: ${data}`);
    }

    return success("Thank you for subscribing!");
  } catch (err) {
    return error(
      err instanceof Error ? err.message : "Error subscribing to email list"
    );
  }
};
