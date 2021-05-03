import './NavBar.css'
import iconPlus from '../../../img/icons8-плюс.svg'
import iconBell from '../../../img/icons8-напоминания-50.png'

export const NavBar = () => {
  return (
    <div className={'nav-bar'}>
      <div className={'icons'}>
        <img alt={''} src={iconPlus}/>
        <img alt={''} src={iconBell}/>
      </div>
      <div className={'user-profile'}>
        <span>D</span> {/* первая буква имени */}
      </div> 
    </div>
  )
}