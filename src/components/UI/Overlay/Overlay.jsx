import './Overlay.css'

export const Overlay = ({onClose, isVisible}) => {
    const overlayClasses = ['overlay']
    if (isVisible) {
        overlayClasses.push('visible') 
    }
    return (
        <div className={overlayClasses.join(' ')} onClick={() => onClose()}></div>
    )
}