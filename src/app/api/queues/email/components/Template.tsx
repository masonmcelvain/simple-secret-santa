import secretSanta from "@/app/assets/images/secret-santa.jpg";
import type { Participant } from "@/models/participant";
import {
   Mjml,
   MjmlBody,
   MjmlSection,
   MjmlColumn,
   MjmlText,
   MjmlStyle,
   MjmlHead,
   MjmlDivider,
   MjmlImage,
} from "@faire/mjml-react";
import type { IMjmlTextProps } from "@faire/mjml-react";

const gray200 = "#E5E7EB";
const gray700 = "#374151";
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
   border-radius: 0.5rem;
   padding: 1rem;
}

.ss-preline div {
   white-space: pre-line;
}
`}
            </MjmlStyle>
         </MjmlHead>
         <MjmlBody className="font-sans">
            <MjmlSection>
               <MjmlColumn>
                  <Text>🎄 Happy holidays {participant.name}!</Text>
                  <Text>Your Secret Santa assignment has arrived!</Text>
                  <Text fontWeight="700" fontSize="20px">
                     🎁 You&apos;re getting a gift for: {assignee.name}
                  </Text>
                  {message ? (
                     <>
                        <Text>
                           Here&apos;s a message from the organizer,{" "}
                           <span style={{ fontWeight: 700 }}>
                              {organizer.name}
                           </span>
                           :
                        </Text>
                        <Text cssClass="ss-outline ss-preline">{message}</Text>
                     </>
                  ) : (
                     <Text>
                        This exchange was organized by{" "}
                        <span style={{ fontWeight: 700 }}>
                           {organizer.name}
                        </span>
                        .
                     </Text>
                  )}
                  <Text>
                     ❓️ If you have any questions about the game, it&apos;s
                     best to ask the organizer or someone else in your group.
                  </Text>
                  <Text>
                     🤫{" "}
                     <span style={{ fontWeight: 700 }}>
                        Please keep your assignment secret!
                     </span>{" "}
                     The excitement of guessing and revealing adds to the fun of
                     it all.
                  </Text>
                  <Text>
                     🛷 Now go{" "}
                     <span style={{ fontStyle: "italic" }}>sleigh</span> this
                     gift exchange!
                  </Text>
                  <MjmlImage
                     alt="Santa Claus riding a reindeer across the sky in front of the northern lights."
                     src={secretSanta.src}
                     width="144px"
                     borderRadius="100% 100% 0 0"
                  />
                  <MjmlDivider
                     paddingTop="24px"
                     paddingBottom="24px"
                     borderColor={gray200}
                  />
                  <Text color={gray700} fontSize="14px">
                     If you were not expecting this email or you do not
                     recognize the organizer, you can safely ignore this email.
                  </Text>
                  <Text color={gray700} fontSize="14px">
                     These emails are not recurring so there is no need to
                     unsubscribe. Your personal data is encrypted and never
                     stored, shared, or sold.
                  </Text>
                  <Text color={gray700} fontSize="14px">
                     Does something seem wrong? Ask a question{" "}
                     <a
                        href="https://github.com/masonmcelvain/simple-secret-santa/issues"
                        target="_blank"
                     >
                        here
                     </a>
                     .
                  </Text>
                  <Text color={gray700} fontSize="14px">
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
