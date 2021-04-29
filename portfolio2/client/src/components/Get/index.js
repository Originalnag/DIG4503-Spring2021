import Axios from "axios";

import { useState } from 'react'

function Get() {

    const [search, setSearch] = useState("");

    const [test, setTest] = useState({});

    const [loading, setLoading] = useState(true);

    const getPart = async () => {
        const response = await Axios.get("http://localhost:45030/BrianFlores/" + search, {
        });
        setTest(response.data.Anime)
        setLoading(false);
    };

    return (
        <div className = "Box">
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);

            }} />
            <br></br><br></br>
            <button onClick={() => { getPart() }}>Search</button>

            {
                (loading === true) ? (
                    <p></p>
                ) : (
                    <div>
                        <h1>Result:</h1>
                        <h2>Anime: {test.Anime}</h2>
                        <p>Author: {test.Author}</p>
                        <p>Rating: {test.Rating}</p>
                    </div>
                )
            }
        </div>

    );
}

export default Get;