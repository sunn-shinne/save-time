import './Button.css' 
import {
    Link,
  } from 'react-router-dom';

export const Button = ({text, to}) => {
    return (
          <Link className={'button'} to={to}>{text}</Link>
    )
}