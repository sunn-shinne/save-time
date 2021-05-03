import './NavBar.css'
import { useState } from 'react'
import iconPlus from '../../../img/icons8-плюс.svg'
import iconBell from '../../../img/icons8-напоминания-50.png'
import { ProfileModal } from '../ProfileModal/ProfileModal'

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className={'nav-bar'}>
      <div className={'icons'}>
        <img alt={''} src={iconPlus}/>
        <img alt={''} src={iconBell}/>
      </div>

      <div className={'avatar'} onClick={() => setIsVisible(!isVisible)}>
        <span>D</span>  {/* первая буква имени */}
      </div> 
      <ProfileModal isVisible={isVisible} setIsVisible={setIsVisible}/>
    </div>
  )
}