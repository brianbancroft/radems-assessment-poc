import {
  QuestionMarkCircleIcon,
  FolderOpenIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="grid grid-rows-[1fr_100px] overflow-hidden min-h-screen">
      <main className="overflow-y-scroll">hello world</main>
      <footer className="text-red-500 bg-slate-300 flex justify-evenly py-4">
        <a className="flex flex-col">
          <FolderOpenIcon />
          <p>archive</p>
        </a>
        <a className="flex flex-col">
          <PlusCircleIcon />
          <p>Assess</p>
        </a>
        <a className="flex flex-col">
          <QuestionMarkCircleIcon /> <p>about</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
