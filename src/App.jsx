import React from 'react';
import { Home } from './components/useContext/Home';
import { GlobalStorage } from './components/useContext/GlobalContext';



const App = () => {
  return (<>
  <GlobalStorage>
    <Home/>
    </GlobalStorage>
  </>);
};

export default App;