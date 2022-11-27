import initialData from "./initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(initialData);
  }, []);

  const onDragEnd = () => {
    //TODO: reoder our column
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}
    >
      {data.columnOrder?.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

export default App;
