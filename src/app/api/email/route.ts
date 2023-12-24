import { renderEmail } from "../queues/email/render-email";

export async function GET() {
   const { html, errors } = renderEmail({
      assignee: {
         name: "Jane Doe",
         email: "jane@example.com",
      },
      participant: {
         name: "John Doe",
         email: "john@example.com",
      },
      organizer: {
         name: "Santa Claus",
         email: "claus@example.com",
      },
      message:
         "Ho ho ho! Our gift exchange is scheduled for December 25th. Please bring a gift worth $20 or less. Can't wait to see you! Warm regards, Santa",
   });
   if (errors.length > 0) {
      console.error("Failed to render email template", errors);
      throw new Error("Failed to render email template");
   }
   return new Response(html, {
      headers: {
         "Content-Type": "text/html",
         "X-Robots-Tag": "noindex, nofollow",
      },
   });
}
