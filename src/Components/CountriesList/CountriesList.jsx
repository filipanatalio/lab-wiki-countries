import React from 'react'
import {Link} from 'react-router-dom'

function CountriesList(props) {
  return (
    <div>
      <h2>Contries</h2>
      {props.countries.map((country) => {
          return (
            <>
              <h2>
                <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
              </h2>
              <img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official} />
            </>
          );
         
      })}
    </div>
  );
}

export default CountriesList














