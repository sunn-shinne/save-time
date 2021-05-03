import './Notifications.css'
import { Overlay } from '../Overlay/Overlay'
import { useState } from 'react'
import cross from '../../../img/крестик.svg'

export const Notifications = ({isVisible, setIsVisible}) => {

    const example = [
        {text: 'don\'t forget to drink a glass of water to stay hydrated!'},
        {text: 'you have to call a colleague at 13:00'},
    ]

    const [notices, ] = useState(example)

    const blockClasses = ['notifications']
    if (isVisible) {
        blockClasses.push('visible')  
    }

    return (
        <>
            <Overlay onClose={() => setIsVisible(false)} isVisible={isVisible} />
            <div className={blockClasses.join(' ')}>
                <p className={'notifications-title'}>notifications</p>

                {notices.map(notice => (
                    <div className={'notice'}>
                        <p>{notice.text}</p>
                    </div>
                ))}

                <img alt={''} src={cross}  className={'notifications-cross'} onClick={() => setIsVisible(false)}/>
            </div>
        </>
    )
}