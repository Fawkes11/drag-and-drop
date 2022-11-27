import { styled } from "@mui/system";
import { Draggable } from "react-beautiful-dnd";

const ContainerTask = styled("div")({
  border: "1px solid lightgrey",
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "8px",
});




const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => <ContainerTask
       {...provided.draggableProps}
       {...provided.dragHandleProps}
       ref={provided.innerRef}
      >
        {task.content}</ContainerTask>}
    </Draggable>
  );
};

export default Task;
