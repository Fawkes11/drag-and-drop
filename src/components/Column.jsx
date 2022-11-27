import { styled } from "@mui/system";
import Task from "./Task";

const ContainerList = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

const Title = styled("h3")({
  padding: "8px",
});

const TaskList = styled("div")({});

const Column = ({ column, tasks }) => {
  return (
    <ContainerList>
      <Title>{column.title}</Title>
      <TaskList>{tasks.map(task => <Task key={task.id} task={task}/>)}</TaskList>
    </ContainerList>
  );
};

export default Column;
