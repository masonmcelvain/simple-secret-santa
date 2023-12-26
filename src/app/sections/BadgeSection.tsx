import { ExternalLink } from "@/components/ExternalLink";
import {
   BookOpenIcon,
   CursorArrowRaysIcon,
   ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export function BadgeSection() {
   return (
      <section className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0 md:px-24">
         <div className="max-w-xs space-y-2">
            <div className="flex items-center justify-center space-x-2">
               <CursorArrowRaysIcon className="h-8 w-8" />
               <h3>No frills</h3>
            </div>
            <p className="text-center text-xl">
               Intentionally simple so you can get back to the fun stuff.
            </p>
         </div>
         <div className="max-w-xs space-y-2">
            <div className="flex items-center justify-center space-x-2">
               <ShieldCheckIcon className="h-8 w-8" />
               <h3>Safe</h3>
            </div>
            <p className="text-center text-xl">
               Personal data is encrypted and never shared or sold.
            </p>
         </div>
         <div className="max-w-xs space-y-2">
            <div className="flex items-center justify-center space-x-2">
               <BookOpenIcon className="h-8 w-8" />
               <h3>Open source</h3>
            </div>
            <p className="text-center text-xl">
               Questions and requests are welcome on{" "}
               <ExternalLink href="https://github.com/masonmcelvain/simple-secret-santa/issues">
                  GitHub
               </ExternalLink>
               .
            </p>
         </div>
      </section>
   );
}
