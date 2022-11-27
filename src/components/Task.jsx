import { styled } from "@mui/system"

const ContainerTask = styled('div')({
    border: '1px solid lightgrey',
    borderRadius: '2px',
    padding: '8px',
    marginBottom: '8px',
})
const Task = ({task}) => {
  return (
    <ContainerTask>{task.content}</ContainerTask>
  )
}

export default Task