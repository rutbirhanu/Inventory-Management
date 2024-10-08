import { Inter } from "next/font/google";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Link from "next/link";

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Management",
  description: "Add products, inspect transactions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      className={`${inter.className} flex bg-gradient-to-r from-purple-50 to-pink-50`}>
      <aside className="flex flex-col w-56 p-8 fixed top-0 left-0 bottom-0 min-h-screen">
        <h2 className="text-2xl font-bold mb-20 text-indigo-800">Dashboard</h2>
        <ul className="space-y-4">
          <li className={robotoCondensed.className}><Link href="/">Overview</Link></li>
          <li className={robotoCondensed.className}><Link href="/products">Products</Link></li>
          <li className={robotoCondensed.className}><Link href="/transaction">Transactions</Link></li>
        </ul>
      </aside>
  
      <main className="flex-grow pl-60 p-5">
        {children}
      </main>
    </body>
  </html>
  
  );
}
