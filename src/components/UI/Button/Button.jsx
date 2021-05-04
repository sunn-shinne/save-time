import './Button.css' 
import {
    Link,
  } from 'react-router-dom';

export const Button = ({text, to, submit, small, onClick}) => {
  const cl = ['button']
  if (small) {
    cl.push('small-button')
  }

  let content = <Link className={cl.join(' ')} to={to}>{text}</Link>

  if (submit) {
    content = <input className={cl.join(' ')} type="submit" onClick={() => onClick()}>{text}</input>
  }
    return (content)
}