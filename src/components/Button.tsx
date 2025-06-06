type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
   React.PropsWithChildren<{
      className?: string;
      disabled?: boolean;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
      text?: string;
      padding?: string;
      pseudo?: string;
   }>;
export function Button({
   className,
   children,
   disabled,
   onClick,
   text,
   padding,
   pseudo,
}: ButtonProps) {
   pseudo ||= "hover:bg-gray-50 active:bg-gray-100";
   padding ||= "py-3 px-4";
   return (
      <button
         className={`${className} ${padding} inline-flex appearance-none items-center justify-center border border-gray-200 bg-transparent align-middle whitespace-nowrap select-none ${text} leading-tight font-semibold outline outline-2 outline-offset-2 outline-transparent ${pseudo} disabled:opacity-40`}
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>
   );
}
