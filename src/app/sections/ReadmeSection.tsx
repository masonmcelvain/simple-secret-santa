import { ExternalLink } from "@/components/ExternalLink";

export function ReadmeSection() {
   return (
      <section>
         <h2 className="mb-4">How it works</h2>
         <ol className="list-none text-xl">
            <li>
               ✍️ You enter the names and emails of the folks you want to play
               Secret Santa with.
            </li>
            <li>🧮 The app randomly assigns each participant to another.</li>
            <li>
               📫️ Each person recieves an email with their assignment.{" "}
               <ExternalLink href="/api/email" rel="nofollow">
                  Preview
               </ExternalLink>
            </li>
         </ol>
      </section>
   );
}
