"use client";

import { FormState, queue } from "@/app/actions";
import { Button } from "@/components/Button";
import { useActionState, useEffect, useState } from "react";
import {
   ExclamationCircleIcon,
   MinusIcon,
   PlusIcon,
} from "@heroicons/react/24/outline";
import { SuccessModal } from "./SuccessModal";

const MIN_ROWS = 5;
const MAX_ROWS = 100;

const initialState: FormState = {
   error: "",
   success: false,
};

export function Form() {
   const [participantCount, setParticipantCount] = useState(MIN_ROWS);
   const [state, formAction, pending] = useActionState(queue, initialState);
   const [open, setOpen] = useState(false);
   useEffect(() => {
      if (state.success) {
         setOpen(true);
      }
   }, [state.success]);
   return (
      <form
         action={formAction}
         className="flex w-full max-w-96 flex-col items-center px-8 sm:w-auto sm:max-w-none"
      >
         <table className="border-separate border-spacing-y-2">
            <thead className="sm:text-left">
               <tr>
                  <th className="text-lg">Participants 🥳</th>
               </tr>
            </thead>
            <tbody>
               <InputRow key={0} index={0} />
               <tr>
                  <td className="flex justify-center">
                     <hr className="my-2 w-11/12 border-t-2 border-gray-200 sm:mb-0" />
                  </td>
               </tr>
               {Array.from({ length: participantCount - 1 }).map((_, index) => (
                  <InputRow key={index + 1} index={index + 1} />
               ))}
            </tbody>
         </table>
         <fieldset className="mt-2 mb-4 w-full">
            <input
               type="checkbox"
               name="hasMessage"
               className="peer focus:ring-chakra-focus px-2 align-middle focus:ring-3 focus:outline-hidden"
               id="checkbox"
            />
            <label htmlFor="checkbox" className="ms-3 text-sm font-semibold">
               Add a message
            </label>
            <textarea
               aria-live="polite"
               name="message"
               placeholder="Budget, date, etc."
               className="focus-visible:ring-chakra-focus mt-2 box-border hidden h-48 w-full rounded-sm border border-gray-200 text-sm transition duration-200 peer-checked:block focus-visible:ring-3 focus-visible:outline-hidden sm:h-24"
            />
         </fieldset>
         {state.error && (
            <p
               aria-live="polite"
               className="mb-4 text-center text-sm text-red-500"
            >
               <ExclamationCircleIcon className="mr-2 inline-block h-5 w-5" />
               {state?.error}
            </p>
         )}
         <div className="flex w-full justify-between">
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
            <Button disabled={pending}>Submit</Button>
         </div>
         <SuccessModal open={open} setOpen={setOpen} />
      </form>
   );
}

type InputRowProps = {
   index: number;
};
function InputRow({ index }: InputRowProps) {
   const namePlaceholder =
      index > 0 ? `Name for member ${index + 1}` : "Your name";
   const margin = index === 0 ? "" : "mt-2";
   return (
      <tr className={`rounded-lg border-0 shadow-xs sm:flex ${margin}`}>
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
            <input
               placeholder={namePlaceholder}
               type="text"
               name={`name${index}`}
               onKeyDown={(e) => {
                  if (e.key === "Enter") {
                     e.preventDefault();
                  }
               }}
               className="focus-visible:ring-chakra-focus -ms-px rounded-[inherit] border border-gray-200 bg-inherit px-4 py-3 pe-11 text-sm transition duration-200 focus-visible:z-10 focus-visible:ring-3 focus-visible:outline-hidden focus-visible:ring-inset"
            />
         </td>
         {/* dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 */}
         <td className="relative -mt-px block w-full first:rounded-t-lg last:rounded-b-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-s-lg sm:first:rounded-se-none sm:last:rounded-e-lg sm:last:rounded-es-none">
            <input
               placeholder="Email"
               type="email"
               name={`email${index}`}
               onKeyDown={(e) => {
                  if (e.key === "Enter") {
                     e.preventDefault();
                  }
               }}
               className="focus-visible:ring-chakra-focus -ms-px rounded-[inherit] border border-gray-200 bg-inherit px-4 py-3 pe-11 text-sm transition duration-200 focus-visible:z-10 focus-visible:ring-3 focus-visible:outline-hidden focus-visible:ring-inset invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            />
         </td>
      </tr>
   );
}
