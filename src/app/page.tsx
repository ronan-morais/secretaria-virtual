import { Birthdates } from "@/components/home/birthdates";
import { Calendar } from "@/components/home/calendar";
import { Featuring } from "@/components/home/featuring";
import { MessageBoard } from "@/components/home/messageBoard";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Featuring />
      <div className="flex flex-col xl:flex-row gap-10 p-8 lg:px-32 lg:py-20">
        <div className="w-full">
          <MessageBoard />
        </div>
        <div className="">
          <Calendar />
        </div>
        <div className="">
          <Birthdates />
        </div>
      </div>
    </main>
  );
}
