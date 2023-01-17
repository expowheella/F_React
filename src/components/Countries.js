import React, { useState } from "react";
import axios from "axios";

function Countries() {
    const [countries, setCountries] = useState([]);

    axios.get("https://restcountries.eu/rest/v2/alpha/col").then(res => {
            console.log(res);
            setCountries(res.data);
        });

    // if (!countries) {
    //     // if not countries, get countries from web
    //     axios.get("https://restcountries.eu/rest/v2/alpha/col").then(res => {
    //         console.log(res);
    //         setCountries(res.data);
    //     });


    // }

    return (
        <table>

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Capital</th>
                </tr>
            </thead>

            <tbody>
                {/* 
                * с помощью map() нужно отрендерить полученный список.
                * на вход получаем список стране country и возвращаем => в формате jsx
                */}
                {countries.map(country => <tr>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                </tr>)}
            </tbody>

        </table>
    )
}

export default Countries;