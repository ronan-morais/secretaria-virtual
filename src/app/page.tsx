import { Featuring } from "@/components/home/featuring";
import { MessageBoard } from "@/components/home/messageBoard";

export default function Home() {
  return (
    <main className="w-full">
      <Featuring />
      <MessageBoard />
      <section>calendario</section>
      <section>aniversários</section>
    </main>
  );
}
