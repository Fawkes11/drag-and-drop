import { styled } from "@mui/system";
import { Draggable } from "react-beautiful-dnd";

const ContainerTask = styled("div")((props)=>({
  border: "1px solid lightgrey",
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "8px",
  background: `${props.isDragging? 'lightgreen': 'white'}`
}));




const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => <ContainerTask
       {...provided.draggableProps}
       {...provided.dragHandleProps}
       ref={provided.innerRef}
       isDragging={snapshot.isDragging}
      >
        {task.content}</ContainerTask>}
    </Draggable>
  );
};

export default Task;
