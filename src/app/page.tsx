import { InputForm } from "@/components/InputForm";
import { BadgeSection } from "@/sections/BadgeSection";

export default function Page() {
   return (
      <div className="flex flex-col space-y-4">
         <h1>Secret Santa</h1>
         <p className="text-xl">Todo: add header with about page/popup</p>
         <h2>How it works</h2>
         <p className="text-xl">
            You enter the names and emails of the folks you want to play Secret
            Santa with. The app randomly assigns each participant to another and
            emails each person with their assignment.
         </p>
         <div className="flex w-full flex-col items-center">
            <InputForm />
         </div>
         <BadgeSection />
      </div>
   );
}
