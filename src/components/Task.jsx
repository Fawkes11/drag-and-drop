import { styled } from "@mui/system";
import { Draggable } from "react-beautiful-dnd";

const ContainerTask = styled("div")((props) => ({
  display: "flex",
  border: "1px solid lightgrey",
  borderRadius: "2px",
  padding: "8px",
  marginBottom: "8px",
  backgroundColor: `${props.isDragging ? "lightgreen" : "white"}`,
  transition: "background-color 0.2s ease",
}));

const Handle = styled("div")({
  width: "20px",
  height: "20px",
  backgroundColor: "orange",
  borderRadius: "4px",
  marginRight: "8px",
});

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <ContainerTask
          {...provided.draggableProps}
          
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps}/>
          {task.content}
        </ContainerTask>
      )}
    </Draggable>
  );
};

export default Task;
