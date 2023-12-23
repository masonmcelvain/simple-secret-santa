"use client";

import { FormState, queue } from "@/app/actions";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
   ExclamationCircleIcon,
   MinusIcon,
   PlusIcon,
} from "@heroicons/react/24/outline";

const MIN_ROWS = 5;
const MAX_ROWS = 100;

const initialState: FormState = {
   message: "",
};

export function Form() {
   const [participantCount, setParticipantCount] = useState(MIN_ROWS);
   const { pending } = useFormStatus();
   const [state, formAction] = useFormState(queue, initialState);
   return (
      <form action={formAction}>
         <table className="mb-2 border-separate border-spacing-y-2 sm:mb-0">
            <thead className="sm:text-left">
               <tr>
                  <th className="text-lg">Participants 🥳</th>
               </tr>
            </thead>
            <tbody className="sm:space-y-2">
               <InputRow key={0} index={0} />
               <tr key="hr">
                  <td className="flex justify-center">
                     <hr className="my-2 w-11/12 border-t-2 border-gray-200 sm:mb-0" />
                  </td>
               </tr>
               {Array.from({ length: participantCount - 1 }).map((_, index) => (
                  <InputRow key={index + 1} index={index + 1} />
               ))}
            </tbody>
            <caption
               aria-live="polite"
               className="min-h-[42px] caption-bottom text-sm text-red-500"
            >
               {state.message && (
                  <ExclamationCircleIcon className="mr-2 inline-block h-5 w-5" />
               )}
               {state?.message}&nbsp;
            </caption>
         </table>
         <div className="flex justify-between">
            <div className="flex space-x-2">
               <Button
                  disabled={pending || participantCount >= MAX_ROWS}
                  onClick={(event) => {
                     event.preventDefault();
                     setParticipantCount((count) =>
                        Math.min(count + 1, MAX_ROWS),
                     );
                  }}
                  padding="p-3"
               >
                  <PlusIcon className="h-5 w-5" />
               </Button>
               <Button
                  disabled={pending || participantCount <= MIN_ROWS}
                  onClick={(event) => {
                     event.preventDefault();
                     setParticipantCount((count) =>
                        Math.max(count - 1, MIN_ROWS),
                     );
                  }}
                  padding="p-3"
               >
                  <MinusIcon className="h-5 w-5" />
               </Button>
            </div>
            <Button aria-disabled={pending}>Submit</Button>
         </div>
      </form>
   );
}

type InputRowProps = {
   index: number;
};
function InputRow({ index }: InputRowProps) {
   const namePlaceholder =
      index > 0 ? `Name for member ${index + 1}` : "Your name";
   return (
      <tr className="rounded-lg border-0 shadow-sm sm:flex">
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
            <input
               placeholder={namePlaceholder}
               type="text"
               name={`name${index}`}
               onKeyDown={(e) => {
                  e.key === "Enter" && e.preventDefault();
               }}
               className="-ms-px rounded-[inherit] border border-gray-200 bg-inherit px-4 py-3 pe-11 text-sm transition duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring focus-visible:ring-inset focus-visible:ring-chakra-focus"
            />
         </td>
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
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
