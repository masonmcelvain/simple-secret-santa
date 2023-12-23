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
