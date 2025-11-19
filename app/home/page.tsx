import { NLEmpty } from "@/components/app-empty";
import { NLSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const noNotes = false;
  return (
    <main>
      <div className="container">
        <div id="greeting" className="p-5">
          <p className="text-2xl">NoteLighter</p>
        </div>
        {noNotes && (
          <div className="">
            <NLEmpty />
          </div>
        )}
        {!noNotes && <></>}
      </div>
    </main>
  );
}
