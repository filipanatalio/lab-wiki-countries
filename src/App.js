import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import CountriesList from './Components/CountriesList/CountriesList';
import CountriesData from './countries.json'




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={CountriesData} />
          {
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails someData={CountriesData} />}
              />
            </Routes>
          }
        </div>
      </div>
    </div>
  );
}

export default App;






