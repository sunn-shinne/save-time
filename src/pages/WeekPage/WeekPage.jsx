import { Day } from '../../components/Day/Day';

export const WeekPage = () => {
  return (
    <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center', margin: '0 auto', width: '70%'}}>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
      <Day/>
    </div>
  )
}