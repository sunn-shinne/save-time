import './Arrows.css'
import left from '../../../img/кнопка_н_л.svg'
import right from '../../../img/кнопка_н_п.svg'

export const Arrows = ({toTopSpace, marginSpace, onLeftClick, onRightClick}) => {
    return (
        <div className={'arrow-block'} style={{top: toTopSpace}} >
            <img 
                alt={''} 
                src={left} 
                className={'arrow left'} 
                onClick={() => onLeftClick()}
                style={{margin: marginSpace}}
                />
            <img 
                alt={''} 
                src={right} 
                className={'arrow right'}  
                onClick={() => onRightClick()}
                style={{margin: marginSpace}}
                />
        </div>
    )
}