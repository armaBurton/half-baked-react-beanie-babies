import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';
import { checkError, client } from './services/client';
import { getBeanieBabies } from './services/fetch-utils';
import './App.css';

export default function App() {

  // useEffect(() => {
  //   async function onLoad() {
  //     const data = await getBeanieBabies(); 

  //   }

  //   onLoad();

  // }, []);

  return (
    <Router>
      <div className='App'>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Nothing</Link>
          </li>
        </ul>

        <Switch>
          <Route>
            <Route exact path='/'>
              <BeaniesPage />
            </Route>
          </Route>
          <Route> 
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}