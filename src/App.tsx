import "./App.css";
import Container from "./components/Container";
import { TaskData } from "./mock/TaskData";

function App() {
  return (
    <div className="w-full h-full bg">
      <main className="p-5 bg-slate-400 rounded">
        <h2 className="text-white font-bold text-2xl mb-5">Project Kanban</h2>
        <div className="flex gap-x-5 items-start">
          {/* {TaskData.map(({ title, id, taskList }) => ( */}
          <Container title={"title"} key={"id"} />
          {/* ))} */}
        </div>
      </main>
    </div>
  );
}

export default App;
