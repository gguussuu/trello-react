import { PlusIcon } from "@heroicons/react/24/outline";
import TaskItem from "../TaskItem";

interface ITaskListProps {
  title: string;
  taskList: ITaskItem[];
}
interface ITaskItem {
  content: string;
  id: string;
  order: number;
}
const Container = ({ title, taskList }: ITaskListProps) => {
  return (
    <aside className="p-3 rounded w-80 bg-neutral-200">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <ul className="flex flex-col gap-y-2">
        {taskList.map(({ content, id }) => (
          <TaskItem key={id} content={content} />
        ))}
      </ul>
      <div className="flex items-center mt-4 cursor-pointer">
        <PlusIcon className="w-5 h-auto" />
        <p>Add a card</p>
      </div>
    </aside>
  );
};

export default Container;
