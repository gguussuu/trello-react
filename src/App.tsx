import "./App.css";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="w-full h-full bg">
      <main className="p-5 bg-slate-400 rounded">
        <h2 className="text-white font-bold text-2xl mb-5">Project Kanban</h2>
        <div className="flex gap-x-5 items-start">
          <aside className="p-3 rounded w-80 bg-neutral-200">
            <h3 className="font-bold text-lg mb-2">To Do</h3>
            <ul className="flex flex-col gap-y-2">
              <li className="bg-white rounded p-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-1 items-center">
                    <CheckCircleIcon className="w-4 h-auto" />
                    <p className="text-base font-semibold">New Task</p>
                  </div>
                  <div className="w-4">
                    <XMarkIcon />
                  </div>
                </div>
                <div className="flex justify-end">
                  <PlayCircleIcon className="w-4 h-auto" />
                </div>
              </li>
              <li className="bg-white rounded p-2">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-1 items-center">
                    <CheckCircleIcon className="w-4 h-auto" />
                    <p className="text-base font-semibold">New Task</p>
                  </div>
                  <div className="w-4">
                    <XMarkIcon />
                  </div>
                </div>
                <div className="flex justify-end">
                  <PlayCircleIcon className="w-4 h-auto" />
                </div>
              </li>
            </ul>
            <div className="flex items-center mt-4">
              <PlusIcon className="w-5 h-auto" />
              <p>Add a card</p>
            </div>
          </aside>
          <aside className="p-3 rounded w-80 bg-neutral-200">
            <h3 className="font-bold text-lg mb-2">In Progress</h3>
            <div className="flex items-center mt-4">
              <PlusIcon className="w-5 h-auto" />
              <p>Add a card</p>
            </div>
          </aside>
          <aside className="p-3 rounded w-80 bg-neutral-200">
            <h3 className="font-bold text-lg mb-2">Done</h3>
            <div className="flex items-center mt-4">
              <PlusIcon className="w-5 h-auto" />
              <p>Add a card</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
