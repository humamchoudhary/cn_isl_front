import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <main className="flex flex-col flex-1 items-center justify-between px-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
