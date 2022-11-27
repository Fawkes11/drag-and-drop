import initialData from "./initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  width: "100%",
  display: "flex",
});






const App = () => {
  const [data, setData] = useState({});
  
  
  useEffect(() => {
    setData(initialData);
  }, []);

  const onDragStart = (start) => {
    const homeIndex = data.columnOrder.indexOf(start.source.droppableId);

    setData((prevData) =>
    {
      return {
        ...prevData,
        homeIndex
      }
    })
  }

  const onDragEnd = (result) => {
    setData((prevData) =>
    {
      return {
        ...prevData,
        homeIndex: null,
      }
    })
    console.log(data)
    const { destination, source, draggableId } = result;
    //si lo mueve a un destino no permitido
    if (!destination) {
      return;
    }
    //para mover entre contenedores y diferente posicion.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setData((prevData) => {
        return {
          ...prevData,
          columns: {
            ...prevData.columns,
            [newColumn.id]: newColumn,
          },
        };
      });
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
     ...start,
      taskIds: startTaskIds,
    
    }

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
     ...finish,
     taskIds: finishTaskIds,
    }

    
    setData((prevData) => {
      return {
        ...prevData,
        columns: {
          ...prevData.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
    });

  };

  return (
    <DragDropContext
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    >
      <MainContainer>
        {data.columnOrder?.map((columnId, index) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          const isDropDisabled = index < data.homeIndex

          return <Column key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled}/>;
        })}
      </MainContainer>
    </DragDropContext>
  );
};

export default App;
