import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import "../styles/Country.css"


function Country(props) {
    const [selected, addCity] = useState(false);

    return (
        // if selected = true: className = "selected-country", else: className = "nothing"
        <tr className={!selected ? "" : "selected-country"}>
            <td>{props.country.city}</td>
            <td>{props.country.country}</td>

            <td>
                { !selected ? 
                    <Button variant="success" onClick={() => addCity(true)}>Add</Button> :
                    <Button variant="danger" onClick={() => addCity(false)}>Remove</Button>
                }
            </td>
        </tr>

    )
}

export default Country;