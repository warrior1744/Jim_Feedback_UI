import spinner from '../assets/snail.png'

function Spinner() {
  return (
    <img src={spinner} 
         alt='Loading...'
         style={{ width: '200px', margin: 'auto', display: 'block'}} />
  )
}

export default Spinner