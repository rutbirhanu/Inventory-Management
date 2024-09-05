import Card from "@/components/card";
import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export default function Home() {
  return (
    <div className="container p-6 flex min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">
     
      <main className="container shadow-lg rounded-3xl p-5 border-indigo-600  bg-gradient-to-r from-purple-100 to-pink-100 ">
        <div className="flex flex-wrap gap-5">
        <Image src="https://datacopia.com/assets/images/Welcome/d.png" alt="chart" height={300} width={200} />
        <Card/>
        <Card/>
        </div>
       
      </main>
      
   </div>
  );
}
