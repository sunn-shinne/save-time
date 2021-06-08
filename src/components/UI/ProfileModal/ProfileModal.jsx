import './ProfileModal.css'
import { Overlay } from '../Overlay/Overlay'
import exit from '../../../img/icons8-exit-50.png'
import cross from '../../../img/крестик.svg'
import {useSelector} from "react-redux";

export const ProfileModal = ({isVisible, setIsVisible}) => {
  const auth = useSelector((store) => store.auth);
  const {profile} = auth;

    const blockClasses = ['modal']
    if (isVisible) {
        blockClasses.push('visible')  
    }

    const getExit = () => {
        sessionStorage.clear()
        window.location.reload()
    }

    return (
        <> 
            <Overlay onClose={() => setIsVisible(false)} isVisible={isVisible} />
            <div className={blockClasses.join(' ')}>
                <div className={'modal-avatar'}>
                    <span>{profile.username.substring(0, 1).toUpperCase()}</span>  {/* первая буква имени */}
                </div>

                <p className={'modal-email'}>{profile.username}</p>

                <div className={'modal-exit'}>
                    <img alt={''} src={exit} />
                    <span onClick={getExit}>Exit</span>
                </div>

                <div className={'modal-legend'}>
                    <p className={'modal-legend-title'}>savetime</p>
                    <p className={'modal-legend-version'}>v1.0</p>
                </div>

                <img alt={''} src={cross}  className={'modal-cross'} onClick={() => setIsVisible(false)}/>
            </div>
        </>

    )
}