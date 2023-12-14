import { Queue } from "quirrel/next-app";

export const emailQueue = Queue("api/queues/email", async (job) => {
   console.log("Job", job);
});

export const POST = emailQueue;
