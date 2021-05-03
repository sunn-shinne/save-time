import './NavBar.css'
import { useState } from 'react'
import iconPlus from '../../../img/icons8-плюс.svg'
import iconBell from '../../../img/icons8-напоминания-50.svg'
import { ProfileModal } from '../ProfileModal/ProfileModal'
import { Notifications } from '../Notifications/Notifications'

export const NavBar = () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isNotificationsVisible, setNotificationsVisible] = useState(false)

  return (
    <div className={'nav-bar'}>
      <div className={'icons'}>
        <img alt={''} src={iconPlus}/>
        <img alt={''} src={iconBell} onClick={() => setNotificationsVisible(!isNotificationsVisible)}/>
      </div>

      <div className={'avatar'} onClick={() => setModalVisible(!isModalVisible)}>
        <span>D</span>  {/* первая буква имени */}
      </div> 
      
      <ProfileModal isVisible={isModalVisible} setIsVisible={setModalVisible}/>
      <Notifications isVisible={isNotificationsVisible} setIsVisible={setNotificationsVisible} />
    </div>
  )
}