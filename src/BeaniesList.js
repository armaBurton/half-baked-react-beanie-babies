import BeanieBaby from './BeanieBaby.js';
import './App.css';

export default function BeaniesList({ beanieBabies }) {
  console.log(beanieBabies);
  return (
    <div className='beanie-baby'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map((bean, i) => <div className='beanie-div' key={bean + i}>
          <img className='beanie-img' src={bean.image} alt={bean.title} />
          <div className='beanies'>
            <h3>{bean.title}</h3>
            <p>{bean.astroSign}</p>
            <p>{bean.releaseDate}</p>
          </div>
        </div>)
      }
    </div>);
}
