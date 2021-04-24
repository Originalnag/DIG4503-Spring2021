import Axios from "axios";

import { useState } from 'react'

function Get() {

    const [search, setSearch] = useState("");

    const [test, setTest] = useState({});

    const [loading, setLoading] = useState(true);

    const getPart = async () => {
        const response = await Axios.get("http://localhost:45030/books/" + search, {
        });
        setTest(response.data.Book)
        setLoading(false);
    };

    return (
        <div>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);

            }} />
            <br></br><br></br>
            <button onClick={() => { getPart() }}>Find ISBN</button>

            {
                (loading === true) ? (
                    <p></p>
                ) : (
                    <div>
                        <h1>Result:</h1>
                        <h2>ISBN: {test.ISBN}</h2>
                        <p>Title: {test.title}</p>
                        <p>Author: {test.author}</p>
                        <p>Description: {test.description}</p>
                    </div>
                )
            }
        </div>

    );
}

export default Get;