"use client";

import { FormState, queue } from "@/app/actions";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./Button";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const MIN_ROWS = 5;
const MORE_ROWS = 5;

const initialState: FormState = {
   message: "",
};

export function InputForm() {
   const [participantCount, setParticipantCount] = useState(MIN_ROWS);
   const { pending } = useFormStatus();
   const [state, formAction] = useFormState(queue, initialState);
   return (
      <form action={formAction}>
         <table className="border-separate border-spacing-y-2 sm:border-spacing-y-0">
            <thead className="border-0">
               <tr>
                  <th>Participants 🥳</th>
               </tr>
            </thead>
            <tbody className="sm:space-y-2">
               {Array.from({ length: participantCount }).map((_, index) => (
                  <InputRow key={index} index={index} />
               ))}
            </tbody>
            <caption aria-live="polite" className="caption-bottom text-red-500">
               {state.message && (
                  <ExclamationCircleIcon className="mr-px inline-block h-5 w-5" />
               )}
               {state?.message}&nbsp;
            </caption>
         </table>
         <div className="flex justify-between">
            <Button
               aria-disabled={pending}
               onClick={(event) => {
                  event.preventDefault();
                  setParticipantCount((count) => count + MORE_ROWS);
               }}
            >
               Add more
            </Button>
            <Button aria-disabled={pending}>Submit</Button>
         </div>
      </form>
   );
}

type InputRowProps = {
   index: number;
};
function InputRow({ index }: InputRowProps) {
   return (
      <tr className="rounded-lg border-0 shadow-sm sm:flex">
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full p-0 first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
            <input
               placeholder="Name"
               type="text"
               name={`name${index}`}
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
               name={`email${index}`}
               onKeyDown={(e) => {
                  e.key === "Enter" && e.preventDefault();
               }}
               className="-ms-px rounded-[inherit] border border-gray-200 bg-inherit px-4 py-3 pe-11 text-sm transition duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-chakra-focus invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            />
         </td>
      </tr>
   );
}
