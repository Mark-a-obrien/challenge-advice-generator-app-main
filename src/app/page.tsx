import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4 bg-navy">
        <Card />
    </main>
  );
}
