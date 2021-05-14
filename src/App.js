import { useState } from 'react';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Result from './Result'
import requests from './requests'
function App() {
  const [selectedOptions, setSelectedOptions] = useState(requests.fetchTrending);
  return (
    <div className='app'>
      <Header />
      <Nav setSelectedOptions={setSelectedOptions}/>
      <Result selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
