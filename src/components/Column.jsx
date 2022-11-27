import { styled } from "@mui/system";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const ContainerList = styled("div")({
  
  margin: "8px",
  border: "1px solid lightgrey",
  borderRadius: "2px",
  width: "220px",

  color: "darkslategray",
  padding: 8,
  display: "flex",
  flexDirection: "column",
});

const Title = styled("h3")({
  padding: "8px",
  
});

const TaskList = styled("div")((props)=>({
    padding: "8px",
    backgroundColor: `${props.isDraggingOver? 'skyblue': 'white'}`,
    transition: 'background-color 0.2s ease-in-out;',
    flexGrow: 1,
    minHeight: "100px",
}));

const Column = ({ column, tasks }) => {
  return (
    <ContainerList>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </ContainerList>
  );
};

export default Column;
