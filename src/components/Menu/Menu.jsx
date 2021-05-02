import cs from './Menu.module.css';
import {
  Link,
} from 'react-router-dom';
import img1 from '../../img/icons8-cегодня-64.png'
import img2 from '../../img/icons8-меню_жирное.svg'
import img3 from '../../img/icons8-галочка.svg'


export const Menu = () => {
  return (
    <div className={cs.Menu}>
      <div className={cs.MenuTitle}>
      <Link to='/home' className={cs.Title}>savetime</Link>
      </div>
      <div className={cs.MenuItems}>
        <div className={cs.MenuItem}>
          <img alt={''} src={img1} className={cs.MenuItemIcon}/>
          <Link className={cs.MenuItemText} to='/today'>Today</Link>
        </div>
        <div className={cs.MenuItem}>
          <img alt={''} src={img2} className={cs.MenuItemIcon}/>
          <Link className={cs.MenuItemText} to='/this-week'>This week</Link>
        </div>
        <div className={cs.MenuItem}>
          <img alt={''} src={img3} className={cs.MenuItemIcon}/>
          <Link className={cs.MenuItemText} to='/habits-tracker'>Habits tracker</Link>
        </div>
      </div>
    </div>
  )
}