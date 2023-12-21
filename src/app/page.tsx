import { Form } from "./components/Form";
import { BadgeSection, ReadmeSection } from "./sections";

export default function Page() {
   return (
      <>
         <h1>Secret Santa</h1>
         <p className="text-xl">Todo: add header with about page/popup</p>
         <ReadmeSection />
         <main className="flex w-full flex-col items-center">
            <Form />
         </main>
         <BadgeSection />
      </>
   );
}
