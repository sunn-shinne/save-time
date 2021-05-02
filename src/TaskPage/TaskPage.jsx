import {Task} from '../Task/Task';

export const TaskPage = () => {
  return (
    <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center', margin: '0 auto', width: '70%'}}>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
      <Task/>
    </div>
  )
}