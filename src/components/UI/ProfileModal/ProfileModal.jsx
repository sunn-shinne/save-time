import './ProfileModal.css'
import { Overlay } from '../Overlay/Overlay'
import exit from '../../../img/icons8-exit-50.png'
import cross from '../../../img/крестик.svg'

export const ProfileModal = ({isVisible, setIsVisible}) => {

    const blockClasses = ['modal']
    if (isVisible) {
        blockClasses.push('visible')  
    }

    return (
        <> 
            <Overlay onClose={() => setIsVisible(false)} isVisible={isVisible} />
            <div className={blockClasses.join(' ')}>
                <div className={'modal-avatar'}>
                    <span>D</span>  {/* первая буква имени */}
                </div>

                <p className={'modal-email'}>dmymail@gmail.com</p>

                <div className={'modal-exit'}>
                    <img alt={''} src={exit} />
                    <span>Exit</span>
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