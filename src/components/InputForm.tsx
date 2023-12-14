"use client";

import { Participant } from "@/models/participant";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./Button";

const MIN_ROWS = 5;
const MORE_ROWS = 5;

export function InputForm() {
   // could use a server action instead of an api endpoint
   const [participants, setParticipants] = useState<Participant[]>(
      getEmptyParticipants(MIN_ROWS),
   );
   const { pending } = useFormStatus();
   const getOnChange =
      (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
         const { name, value } = event.target;
         const newParticipants = [...participants];
         newParticipants[index][name as keyof Participant] = value;
         setParticipants(newParticipants);
      };
   const [error, setError] = useState("");
   return (
      <form noValidate>
         <table className="border-separate border-spacing-y-2 sm:border-spacing-y-0">
            <thead className="border-0">
               <tr>
                  <th>Participants 🥳</th>
               </tr>
            </thead>
            <tbody className="peer sm:space-y-2" onFocus={() => setError("")}>
               {participants.map((participant, index) => (
                  <InputRow
                     key={index}
                     participant={participant}
                     onChange={getOnChange(index)}
                  />
               ))}
            </tbody>
            <caption className="caption-bottom text-red-500 peer-focus-within:invisible">
               {error}&nbsp;
            </caption>
         </table>
         <div className="flex justify-between">
            <Button
               aria-disabled={pending}
               onClick={(event) => {
                  event.preventDefault();
                  setParticipants([
                     ...participants,
                     ...getEmptyParticipants(MORE_ROWS),
                  ]);
               }}
            >
               Add rows
            </Button>
            <Button
               aria-disabled={pending}
               onClick={async (event) => {
                  event.preventDefault();
                  const valid = participants.filter((p) => p.name && p.email);
                  const incomplete = participants.filter(
                     (p) => p.name || p.email,
                  );
                  if (valid.length !== incomplete.length) {
                     setError("Please fill out both fields on each row.");
                     return;
                  }
                  await fetch("/api/queues/email", {
                     method: "POST",
                     body: JSON.stringify(valid),
                  });
               }}
            >
               Submit
            </Button>
         </div>
      </form>
   );
}

type InputRowProps = {
   participant?: Participant;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
};
function InputRow({ participant, onChange }: InputRowProps) {
   return (
      <tr className="rounded-lg border-0 shadow-sm sm:flex">
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full p-0 first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
            <input
               placeholder="Name"
               type="text"
               name="name"
               value={participant?.name ?? ""}
               onChange={onChange}
               onKeyDown={(e) => {
                  e.key === "Enter" && e.preventDefault();
               }}
               className="-ms-px rounded-[inherit] border border-gray-200 bg-inherit px-4 py-3 pe-11 text-sm transition duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-chakra-focus"
            />
         </td>
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full p-0 first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
            <input
               placeholder="Email"
               type="email"
               name="email"
               value={participant?.email ?? ""}
               onChange={onChange}
               onKeyDown={(e) => {
                  e.key === "Enter" && e.preventDefault();
               }}
               pattern=".+@.+"
               className="-ms-px rounded-[inherit] border border-gray-200 bg-inherit px-4 py-3 pe-11 text-sm transition duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-chakra-focus invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            />
         </td>
      </tr>
   );
}

function getEmptyParticipants(count: number) {
   return Array.from({ length: count }).map(() => ({ name: "", email: "" }));
}
