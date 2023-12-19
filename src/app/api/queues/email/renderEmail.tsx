import { Template } from "@/components/email";
import type { TemplateProps } from "@/components/email";
import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml";

export function renderEmail({ assignee, participant }: TemplateProps) {
   return mjml2html(
      renderToMjml(<Template assignee={assignee} participant={participant} />),
      { validationLevel: "soft" },
   );
}
