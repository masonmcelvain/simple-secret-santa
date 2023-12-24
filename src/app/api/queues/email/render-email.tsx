import { Template } from "./components/Template";
import type { TemplateProps } from "./components/Template";
import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml";

export function renderEmail(props: TemplateProps) {
   return mjml2html(renderToMjml(<Template {...props} />), {
      validationLevel: "soft",
   });
}
