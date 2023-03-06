import { Calendar } from "@/components/home/calendar";
import { Featuring } from "@/components/home/featuring";
import { MessageBoard } from "@/components/home/messageBoard";

export default function Home() {
  return (
    <main className="w-full">
      <Featuring />
      <MessageBoard />
      <Calendar />
      <section>aniversários</section>
    </main>
  );
}
