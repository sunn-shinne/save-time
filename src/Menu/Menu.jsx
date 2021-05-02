import cs from './Menu.module.scss';
import {
  Link,
  Switch,
  Router,
} from 'react-router-dom';
import img1 from '../img/icons8-cегодня-64.png'
import img2 from '../img/icons8-меню_жирное.svg'
import img3 from '../img/icons8-галочка.svg'


export const Menu = () => {
  return (
    <div className={cs.Menu}>
      <div style={{marginLeft: '34%', marginTop: '10px'}}>
        <span className={cs.SameTime}>
          sametime
        </span>
      </div>
      <div style={{marginLeft: '65px', marginTop: '100px'}}>
        <div style={{display: 'flex'}}>
          <img src={img1} style={{width: '23px', height: '23px', paddingTop: '0.8em', paddingRight: '10px'}}/>
          <Link className={cs.Text} to='/home'>Home</Link>
        </div>
        <div style={{display: 'flex'}}>
          <img src={img2} style={{width: '22px', height: '22px', paddingTop: '0.8em', paddingRight: '10px'}}/>
          <Link className={cs.Text} to='/task-page'>Task-page</Link>
        </div>
        <div style={{display: 'flex'}}>
          <img src={img3} style={{width: '22px', height: '22px', paddingTop: '0.8em', paddingRight: '10px'}}/>
          <Link className={cs.Text} to='/habits-tracker'>Habits-tracker</Link>
        </div>
      </div>
    </div>
  )
}