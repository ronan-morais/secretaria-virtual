import { Featuring } from "@/components/home/featuring";

export default function Home() {
  return (
    <main className="container w-full">
      <Featuring />
      <section>comunicados</section>
      <section>calendario</section>
      <section>aniversários</section>
    </main>
  );
}
