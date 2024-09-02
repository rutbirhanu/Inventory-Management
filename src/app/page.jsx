import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Home() {
  return (
    <div className="container p-6 flex min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">
      <aside className="flex flex-col mr-20">
        <h2 className="text-2xl font-bold mb-20 text-indigo-800">Dashboard</h2>
        <ul className="space-y-4">
          <li className={robotoCondensed.className}>Overview</li>
          <li className={robotoCondensed.className} >Products</li>
          <li className={robotoCondensed.className} >Transactions</li>
        </ul>
      </aside>
      <main className="container shadow-lg rounded-3xl p-5 border-indigo-600 ">main</main>
      
   </div>
  );
}
