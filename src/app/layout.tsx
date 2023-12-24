import type { Metadata } from "next";
import { Footer, Header } from "./components";
import "./globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
   return (
      <html lang="en">
         <body className="prose mx-auto flex min-h-screen w-full max-w-[70rem] flex-col justify-start gap-y-8 px-4 py-8 md:px-6 lg:px-8">
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}

export const metadata: Metadata = {
   title: "Simple Secret Santa",
   description: "A simple, free, and open-source Secret Santa generator.",
};
