import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';import './App.css';
// import BeanieBaby from './BeanieBaby';


export default function BeaniesList({ beanieBabies }) {
  
  


  
  return (
    <div className='beanie-baby'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map((bean, i) => 
          <Link key={bean + i} to={`/beanie-baby/${bean.id}`}>
            <div className='beanie-div'>
              <img className='beanie-img' src={bean.image} alt={bean.title} />
              <div className='beanies'>
                <h3>{bean.title}</h3>
                <p>{bean.astroSign}</p>
                <p>{bean.releaseDate}</p>
              </div>
            </div>
          </Link>)
      }
    </div>);
}
