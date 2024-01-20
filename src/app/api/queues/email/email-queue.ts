import { MAIL_HOST, MAIL_PASS, MAIL_PORT, MAIL_USER } from "@/config/env";
import type { Participant } from "@/models/participant";
import { createTransport } from "nodemailer";
import { Queue } from "quirrel/next-app";
import { renderEmail } from "./render-email";

type QueueProps = {
   message: string;
   organizer: Participant;
   participants: Participant[];
};
export const EmailQueue = Queue<QueueProps>("api/queues/email", handler);

const mail = createTransport({
   host: MAIL_HOST,
   port: Number(MAIL_PORT),
   auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
   },
});

async function handler({ message, organizer, participants }: QueueProps) {
   const assignments = assign(participants);
   for (const [participant, assignee] of assignments) {
      const { html, errors } = renderEmail({
         assignee,
         message,
         organizer,
         participant,
      });
      if (errors.length > 0) {
         console.error("Failed to render email template", errors);
         throw new Error("Failed to render email template");
      }
      await mail.sendMail({
         to: participant.email,
         from: "secretsanta@quirrel.dev",
         subject: "🎁🎅 Your Secret Santa Assignment Revealed!",
         html,
      });
   }
}

function assign(participants: Participant[]) {
   const shuffled = [...participants].sort(() => Math.random() - 0.5);
   return shuffled.map((participant, index, shuffled) =>
      index === shuffled.length - 1
         ? [participant, shuffled[0]]
         : [participant, shuffled[index + 1]],
   );
}
