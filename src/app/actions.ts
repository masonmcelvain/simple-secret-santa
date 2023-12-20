"use server";

import type { Participant } from "@/models/participant";
import { EmailQueue } from "./api/queues/email/route";

export type FormState = {
   message: string;
};

const MAX_SIZE = 100;

export async function queue(_prev: FormState, formData: FormData) {
   let participants;
   try {
      participants = parseFormData(formData);
   } catch (e) {
      if (e instanceof Error) return { message: e.message };
      throw e;
   }
   if (participants.length < 2) {
      return {
         message: "You can't play by yourself, silly! 😉",
      };
   }
   if (participants.length > MAX_SIZE) {
      return {
         message:
            "Boy you're popular! We don't support groups greater than 100 at this time, try a smaller group.",
      };
   }
   const hasDuplicateEmails =
      new Set(participants.map((p) => p.email)).size !== participants.length;
   if (hasDuplicateEmails) {
      return {
         message: "No double dipping! Please list each email only once.",
      };
   }
   const hasDuplicateNames =
      new Set(participants.map((p) => p.name)).size !== participants.length;
   if (hasDuplicateNames) {
      return {
         message: "Duplicate names can be confusing. Try a nickname instead!",
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
      throw new Error("Oops! Please fill out both fields on each row.");
   }
   return participants as Participant[];
}
