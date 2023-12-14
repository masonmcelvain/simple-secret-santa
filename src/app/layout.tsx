import "./globals.css";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body>
            <div className="prose mx-auto flex min-h-screen w-full max-w-[70rem] flex-col justify-start px-4 md:px-6 lg:px-8">
               {children}
            </div>
         </body>
      </html>
   );
}
