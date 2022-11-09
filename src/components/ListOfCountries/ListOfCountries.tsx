import '../App/App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
/*
localhost:8080/api/v1/country/all
*/

interface Country {
    code: number,
    name: string
}

function ListOfCountries(props: any) {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        console.log("effect called");
        axios
            .get("http://localhost:8080/api/v1/country/all")
            .then(response => {
                setCountries(response.data);
                
            })
    }, [])

    return (
        <div className='Appflex'>
            {countries.map(note => {
                return (
                    <div key={note.code}>
                        <p>{note.code}</p>
                        <p>{note.name}</p>
                    </div>)
            })}
            <form onSubmit={()=>{}}>
                <input></input>
                <button type='submit'>Submit more!!!</button>
            </form>
        </div>
    )
}

export default ListOfCountries;