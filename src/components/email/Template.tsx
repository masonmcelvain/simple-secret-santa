import type { Participant } from "@/models/participant";
import {
   Mjml,
   MjmlBody,
   MjmlSection,
   MjmlColumn,
   MjmlText,
} from "@faire/mjml-react";

export type TemplateProps = {
   participant: Participant;
   assignee: Participant;
};
export function Template({ participant, assignee }: TemplateProps) {
   return (
      <Mjml>
         <MjmlBody width={500}>
            <MjmlSection backgroundColor="#EFEFEF">
               <MjmlColumn>
                  <MjmlText fontSize="20px">Hello world!</MjmlText>
                  <MjmlText fontSize="20px">
                     Participant: {participant.name}
                  </MjmlText>
                  <MjmlText fontSize="20px">Assignee: {assignee.name}</MjmlText>
               </MjmlColumn>
            </MjmlSection>
         </MjmlBody>
      </Mjml>
   );
}
