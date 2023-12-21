import Link from "next/link";

export function Header() {
   return (
      <header className="my-8 flex w-full items-center justify-between">
         <Link className="no-underline" href="/">
            <h1 className="mb-0">Secret Santa</h1>
         </Link>
         <nav aria-labelledby="primary-navigation">
            <h2 id="primary-navigation" className="sr-only">
               Primary Navigation
            </h2>
            <Link className="ml-auto text-xl no-underline" href="/about">
               About
            </Link>
         </nav>
      </header>
   );
}
