import { Calendar } from "@/components/home/calendar";
import { Featuring } from "@/components/home/featuring";
import { MessageBoard } from "@/components/home/messageBoard";

export default function Home() {
  return (
    <main className="w-full">
      <Featuring />
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <MessageBoard />
        </div>
        <div className="">
          <Calendar />
        </div>
      </div>
      <section>aniversários</section>
    </main>
  );
}
