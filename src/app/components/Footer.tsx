import { GitHubIcon } from "@/components/icons/github-icon";

export function Footer() {
   return (
      <footer className="mb-8 mt-auto pt-8">
         <nav
            aria-labelledby="footer-navigation"
            className="flex w-full items-center justify-between"
         >
            <h2 id="footer-navigation" className="sr-only">
               Footer Navigation
            </h2>
            <p>
               Made by{" "}
               <a href="https://github.com/masonmcelvain" target="_blank">
                  @masonmcelvain
               </a>
            </p>
            <div className="flex space-x-2 md:space-x-4">
               <a
                  href="https://github.com/masonmcelvain/hop"
                  target="_blank"
                  className="hover:opacity-100 lg:opacity-30"
               >
                  <GitHubIcon className="h-10 w-10 fill-[#1E3050]" />
               </a>
            </div>
         </nav>
      </footer>
   );
}
