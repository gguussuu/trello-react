import { PlusIcon } from "@heroicons/react/24/outline";
import TaskItem from "../TaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

interface ITaskListProps {
  title: string;
}

const Container = ({ title }: ITaskListProps) => {
  const [task, setTask] = useState([
    { content: "aaaa", id: "task1" },
    { content: "2222", id: "task2" },
  ]);
  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...task];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTask(items);
  };
  const AddTask = () => {
    setTask(
      task.concat({
        content: "new task",
        id: `task-${task.length + 1}`,
      })
    );
  };
  return (
    <aside className="p-3 rounded w-80 bg-neutral-200">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <DragDropContext onDragEnd={handleChange}>
        <ul className="flex flex-col gap-y-2">
          <Droppable droppableId="todo" key="todo">
            {(provided) => (
              <div
                className="flex flex-col gap-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {task.map((e: any, i: number) => (
                  <Draggable
                    draggableId={`test-${e.id}`}
                    index={i}
                    key={`test-${e.id}`}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="flex flex-col gap-y-2"
                        >
                          <TaskItem content={e.content} />
                        </div>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ul>
        <div
          className="flex items-center mt-4 cursor-pointer"
          onClick={AddTask}
        >
          <PlusIcon className="w-5 h-auto" />
          <p>Add a card</p>
        </div>
      </DragDropContext>
    </aside>
  );
};

export default Container;
