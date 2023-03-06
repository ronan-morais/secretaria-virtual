import { Calendar } from "@/components/home/calendar";
import { Featuring } from "@/components/home/featuring";
import { MessageBoard } from "@/components/home/messageBoard";

export default function Home() {
  return (
    <main className="w-full">
      <Featuring />
      <div className="flex flex-col md:flex-row">
        <MessageBoard />
        <Calendar />
      </div>
      <section>aniversários</section>
    </main>
  );
}
