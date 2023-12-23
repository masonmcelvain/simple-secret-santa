import { Form } from "./components";
import { BadgeSection, ReadmeSection } from "./sections";

export default function Page() {
   return (
      <>
         <ReadmeSection />
         <main className="flex w-full flex-col items-center pb-8">
            <Form />
         </main>
         <BadgeSection />
      </>
   );
}
