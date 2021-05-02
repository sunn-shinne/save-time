import {NavBar} from './NavBar/NavBar'
import {Menu} from './Menu/Menu'
import {TaskPage} from './TaskPage/TaskPage';
import {BasePage} from './BasePage/BasePage';
import {
  Switch,
  Route,
} from 'react-router-dom';

export const Base = () => {
  return (
    <div>
      <NavBar/>
      <Menu/>
      <div style={{left: '23%', top: '90px', position: 'absolute', border: '3px solid', width: '70%'}}>
        <Switch>
          <Route path='/task-page' component={TaskPage}/>
          <Route path='/home' component={BasePage} />
        </Switch>
      </div>
    </div>
  )
}