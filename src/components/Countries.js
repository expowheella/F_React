import React, { useState } from "react";
import axios from "axios";
import "../styles/Countries.css"
import Table from 'react-bootstrap/Table'
import Country from "./Country.js"

function Countries() {
    const [countries, setCountries] = useState([]);

    if (!countries.length) {
        // if not countries, get countries from web
        axios.get("https://countriesnow.space/api/v0.1/countries/population/cities").then(res => {
            console.log(res.data.data.city);
            setCountries(res.data.data);
        });


    }

    return (
        <Table striped bordered hover>

            <thead>
                <tr>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>

            <tbody>
                {/* 
                * с помощью map() нужно отрендерить полученный список.
                * на вход получаем список стране country и возвращаем => в формате jsx
                */}
                {countries.map(country => <Country key={country.city} country = {country}/>)};

            </tbody>

        </Table>
    )
}

export default Countries;