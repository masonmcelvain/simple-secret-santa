import { Template } from "./components/Template";
import type { TemplateProps } from "./components/Template";
import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml";

export function renderEmail({ assignee, participant }: TemplateProps) {
   return mjml2html(
      renderToMjml(<Template assignee={assignee} participant={participant} />),
      { validationLevel: "soft" },
   );
}
