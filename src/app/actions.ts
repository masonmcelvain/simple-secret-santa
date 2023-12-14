"use server";

import type { Participant } from "@/models/participant";
import { EmailQueue } from "./api/queues/email/route";

export type FormState = {
   message: string;
};

export async function queue(_prev: FormState, formData: FormData) {
   let participants;
   try {
      participants = parseFormData(formData);
      console.log("particpants", participants);
   } catch (e) {
      if (e instanceof Error) return { message: e.message };
      throw e;
   }
   if (participants.length < 2) {
      return {
         message: "You can't play by yourself, silly! 😉",
      };
   }
   await EmailQueue.enqueue(participants);
   return { message: "" };
}

/**
 * React doesn't seem to support a list of objects in a form.
 */
function parseFormData(formData: FormData): Participant[] {
   const parsed: Record<number, Partial<Participant>> = {};
   for (const [key, value] of formData) {
      const isName = key.includes("name");
      const isEmail = key.includes("email");
      if (!isName && !isEmail) continue;
      const index = parseInt(key.replace(/\D/g, ""));
      const type = isName ? "name" : "email";
      if (!parsed[index]) parsed[index] = {};
      parsed[index][type] = value as string;
   }
   const input = Object.values(parsed);
   const participants = input.filter((p) => p.name && p.email);
   const incomplete = input.filter((p) => p.name || p.email);
   if (participants.length !== incomplete.length) {
      throw new Error("Please fill out both fields on each row.");
   }
   return participants as Participant[];
}
