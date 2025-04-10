import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

type SuccessModalProps = {
   open: boolean;
   setOpen: (isOpen: boolean) => void;
};
export function SuccessModal({ open, setOpen }: SuccessModalProps) {
   const closeButtonRef = useRef(null);
   return (
      <Transition.Root show={open} as={Fragment}>
         <Dialog
            as="div"
            className="relative z-10"
            initialFocus={closeButtonRef}
            onClose={setOpen}
         >
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="bg-opacity-75 fixed inset-0 bg-gray-500 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                     enterTo="opacity-100 translate-y-0 sm:scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                     leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                     <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                           <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                 <RocketLaunchIcon
                                    className="h-6 w-6 text-green-600"
                                    aria-hidden="true"
                                 />
                              </div>
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                 <Dialog.Title
                                    as="h3"
                                    className="text-base leading-6 font-semibold text-gray-900"
                                 >
                                    Success!
                                 </Dialog.Title>
                                 <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                       Your participants will be notified via
                                       email shortly.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                           <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => setOpen(false)}
                              ref={closeButtonRef}
                           >
                              Close
                           </button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   );
}
