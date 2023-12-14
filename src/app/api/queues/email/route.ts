import { Participant } from "@/models/participant";
import { Queue } from "quirrel/next-app";

export const EmailQueue = Queue<Participant[]>(
   "api/queues/email",
   async (participants) => {
      console.log("Sending email to participants:", participants);
   },
);

export const POST = EmailQueue;
