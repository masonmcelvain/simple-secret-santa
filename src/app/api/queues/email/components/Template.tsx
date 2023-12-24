import type { Participant } from "@/models/participant";
import {
   Mjml,
   MjmlBody,
   MjmlSection,
   MjmlColumn,
   MjmlText,
   MjmlWrapper,
   MjmlStyle,
   MjmlHead,
   MjmlDivider,
} from "@faire/mjml-react";
import type { IMjmlTextProps } from "@faire/mjml-react";

const gray200 = "#E5E7EB";
const teal500 = "#14B8A6";

export type TemplateProps = {
   assignee: Participant;
   message: string;
   participant: Participant;
   organizer: Participant;
};
export function Template({
   assignee,
   message,
   participant,
   organizer,
}: TemplateProps) {
   return (
      <Mjml lang="en">
         <MjmlHead>
            <MjmlStyle inline>
               {`
a {
   color: ${teal500};
}

.ss-outline div {
   border: solid 2px ${gray200};
   border-radius: 0.25rem;
   padding: 1rem;
}

.ss-preline div {
   white-space: pre-line;
}
`}
            </MjmlStyle>
         </MjmlHead>
         <MjmlBody className="font-sans">
            <MjmlWrapper>
               <MjmlSection border="solid #EFEFEF">
                  <MjmlColumn>
                     <Text>🎄 Happy holidays {participant.name}!</Text>
                     <Text>
                        Your Secret Santa assignment has arrived! Here are the
                        details:
                     </Text>
                     <Text
                        paddingLeft="40px"
                        paddingRight="10px"
                        fontWeight="700"
                        fontSize="20px"
                     >
                        You&apos;re getting a gift for: {assignee.name}
                     </Text>
                     <Text
                        paddingLeft="40px"
                        paddingRight="10px"
                        fontWeight="700"
                        fontSize="20px"
                     >
                        Organizer: {organizer.name}
                     </Text>
                     {message && (
                        <>
                           <Text>And a message from the organizer:</Text>
                           <Text cssClass="ss-outline ss-preline">
                              {message}
                           </Text>
                        </>
                     )}
                     <Text>
                        If you have any questions about the game, it&apos;s best
                        to ask the organizer or someone else in your group.
                     </Text>
                     <Text>
                        🤫{" "}
                        <span style={{ fontWeight: 600 }}>
                           Please keep your assignment secret!
                        </span>{" "}
                        The excitement of guessing and revealing adds to the fun
                        of it all.
                     </Text>
                     <Text>
                        Now go{" "}
                        <span style={{ fontStyle: "italic" }}>sleigh</span> this
                        gift exchange!
                     </Text>
                     <Text align="center">🦌🛷🎅</Text>
                     <MjmlDivider
                        paddingTop="24px"
                        paddingBottom="24px"
                        borderColor={gray200}
                     />
                     <Text fontSize="14px">
                        If you were not expecting this email or you do not
                        recognize the organizer, you can safely ignore this
                        email.
                     </Text>
                     <Text fontSize="14px">
                        These emails are not recurring so there is no need to
                        unsubscribe. Your personal data is encrypted and never
                        stored, shared, or sold.
                     </Text>
                     <Text fontSize="14px">
                        Does something seem wrong? Get support{" "}
                        <a
                           href="https://github.com/masonmcelvain/simple-secret-santa/issues"
                           target="_blank"
                        >
                           here
                        </a>
                        .
                     </Text>
                     <Text fontSize="14px">
                        Brought to you by{" "}
                        <a
                           href="https://www.simple-secret-santa.com"
                           target="_blank"
                        >
                           Simple Secret Santa
                        </a>
                        .
                     </Text>
                  </MjmlColumn>
               </MjmlSection>
            </MjmlWrapper>
         </MjmlBody>
      </Mjml>
   );
}

function Text({ children, ...rest }: IMjmlTextProps) {
   return (
      <MjmlText fontFamily="sans-serif" fontSize="20px" {...rest}>
         {children}
      </MjmlText>
   );
}
