import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

type ExternalLinkProps = React.PropsWithChildren<{
   href: string;
   rel?: string;
}>;
export function ExternalLink({ href, children, rel }: ExternalLinkProps) {
   return (
      <a href={href} rel={rel} target="_blank">
         {children}
         <ArrowTopRightOnSquareIcon className="mb-0.5 ml-1 inline-block h-5 w-5" />
      </a>
   );
}
