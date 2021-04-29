import Axios from "axios";

import { useState } from 'react'

function Test() {

    const [search, setSearch] = useState("");

    const [search2, setSearch2] = useState("");

    const [test, setTest] = useState({});
    
    const [test2, setTest2] = useState({});

    const [loading, setLoading] = useState(true);

    const [loading2, setLoading2] = useState(true);


    const getPart = async () => {
        const response = await Axios.get("https://pokeapi.co/api/v2/pokemon/" + search, {
        
        });
        setTest(response.data)
        setLoading(false);
        console.log(response.data)
        
    };

    const Part = async () => {
        const response = await Axios.put("http://localhost:45030/pokemon/" + search2, {

        });
        setLoading2(false);
        console.log(response.data)
    };

    

    return (
        <div className = "Box">
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
             {
                (loading === true) ? (
                    <p></p>
                ) : (
                    <div>
                        <h1>You found:</h1>
                        <h2>Pokemon: {test.name}</h2>
                        <h2>Id: {test.id}</h2>
                        <img src = {test.sprites.front_default}/>
                    </div>
                )
            }
            <button onClick={() => { getPart() }}>Find a Pokemon</button>
            <br></br><br></br>
            <input type="text" onChange={(event2) => {
                setSearch2(event2.target.value);
            }} />
            {
                (loading2 === true) ? (
                    <p></p>
                ) : (
                    <div>
                        <h1>You added:</h1>
                        <h2>Pokemon: {search2}</h2>
                        <h2>Id: {test.id}</h2>
                    </div>
                )
            }
             <button onClick={() => { Part() }}>Add Pokemon</button>
            
           
        </div>

    );
}

export default Test;