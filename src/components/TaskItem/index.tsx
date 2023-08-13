import {
  CheckCircleIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Droppable } from "react-beautiful-dnd";

interface ITaskItem {
  content: string;
}

const TaskItem = ({ content }: ITaskItem) => {
  return (
    <div className="bg-white rounded p-2 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-1 items-center">
          <CheckCircleIcon className="w-4 h-auto" />
          <p className="text-base font-semibold">{content}</p>
        </div>
        <div className="w-4">
          <XMarkIcon />
        </div>
      </div>
      <div className="flex justify-end">
        <PlayCircleIcon className="w-4 h-auto" />
      </div>
    </div>
  );
};

export default TaskItem;
