type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
   React.PropsWithChildren<{
      border?: string;
      className?: string;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      text?: string;
      pseudo?: string;
   }>;
export function Button({
   border,
   className,
   children,
   onClick,
   text,
   pseudo,
}: ButtonProps) {
   // dark:hover:bg-chakra-hover-dark dark:active:bg-chakra-active-dark
   pseudo ||= "hover:bg-gray-50 active:bg-gray-100";
   border ||= "border border-gray-200 py-3 px-4";
   return (
      <button
         className={`${className} ${border} inline-flex select-none appearance-none items-center justify-center whitespace-nowrap rounded-md bg-transparent align-middle ${text} font-semibold leading-tight outline outline-2 outline-offset-2 outline-transparent transition duration-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-chakra-focus ${pseudo}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
}
