import Image from "next/image";
import Link from "next/link";
import secretSanta from "../assets/images/secret-santa.jpg";

export function Header() {
   return (
      <header className="w-full">
         <div className="flex flex-col items-center gap-y-8 md:flex-row md:gap-x-4 md:gap-y-0">
            <Link href="/">
               <Image
                  src={secretSanta}
                  alt="Picture of Santa dressed as a spy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  style={{
                     borderTopLeftRadius: "100%",
                     borderTopRightRadius: "100%",
                  }}
                  priority
               />
            </Link>
            <Link className="no-underline" href="/">
               <h1 className="text-3xl whitespace-nowrap md:text-4xl">
                  Simple Secret Santa
               </h1>
            </Link>
         </div>
      </header>
   );
}
