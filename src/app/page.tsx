import { Form } from "./components/Form";
import { BadgeSection } from "./sections/BadgeSection";

export default function Page() {
   return (
      <>
         <h1>Secret Santa</h1>
         <p className="text-xl">Todo: add header with about page/popup</p>
         <section>
            <h2>How it works</h2>
            <ol className="list-none text-xl">
               <li>
                  ✍️ You enter the names and emails of the folks you want to
                  play Secret Santa with.
               </li>
               <li>🧮 The app randomly assigns each participant to another.</li>
               <li>📫️ Each person recieves an email with their assignment.</li>
            </ol>
         </section>
         <main className="flex w-full flex-col items-center">
            <Form />
         </main>
         <BadgeSection />
      </>
   );
}
