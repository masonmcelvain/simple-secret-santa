import { Participant } from "@/models/participant";
import { Queue } from "quirrel/next-app";

export const EmailQueue = Queue<Participant[]>(
   "api/queues/email",
   async (participants) => {
      const assignments = assign(participants);
      console.log("Sending email to participants:", assignments);
   },
);

export const POST = EmailQueue;

const MAX_TRIES = 50;

function assign(participants: Participant[]) {
   for (let i = 0; i < MAX_TRIES; i++) {
      const pairs = tryAssign(participants);
      const isValid = pairs.every(([a, b]) => a.email !== b.email);
      if (isValid) return pairs;
   }
   throw new Error("Failed to assign participants");
}

function tryAssign(participants: Participant[]): [Participant, Participant][] {
   const shuffled = [...participants].sort(() => Math.random() - 0.5);
   return participants.map((participant) => {
      return [participant, shuffled.pop() as Participant];
   });
}
