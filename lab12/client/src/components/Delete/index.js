import Axios from "axios";

import { useState } from 'react'

function Delete() {

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    const deletePart = async () => {
        await Axios.delete("http://localhost:45030/books/" + search, {

        });
        setLoading(false);

    };

    return (
        <div>
            <p>Delete an ISBN!</p>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <br></br><br></br>
            <button onClick={() => { deletePart() }}>Delete</button>
            {
                (loading === true) ? (
                    <p></p>
                ) : (
                    <div>
                        <h1>Deleted:</h1>
                        <h3>ISBN: {search}</h3>
                    </div>
                )

            }
        </div>
    );
}

export default Delete;