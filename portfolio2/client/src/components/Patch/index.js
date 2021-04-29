import Axios from "axios";

import { useState } from 'react'

function Patch() {

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    const [author, setAuthor] = useState("");

    const [rating, setRating] = useState("");

    const patchPart = async () => {
        await Axios.patch("http://localhost:45030/BrianFlores/" + search, {
            author: author,
            rating: rating
        });
        setLoading(false);
    };

    return (
        <div className = "Box">
            <p>Which anime do you want to update?</p>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <p>Enter the author!</p>
            <input type="text" onChange={(event2) => {
                setAuthor(event2.target.value);
            }} />
            <p>Enter a rating!</p>
            <input type="text" onChange={(event3) => {
                setRating(event3.target.value);
            }} />
            <br></br><br></br>
            <button onClick={() => { patchPart() }}>Update</button>

            {
                (loading === true) ? (
    
                    <p></p>
                ) : (
                    <div>
                        <h1>Updated Result:</h1>
                        <h2>Anime: {search}</h2>
                        <p>Author: {author}</p>
                        <p>Rating: {rating}</p>
                    </div>
                )
            }

        </div>

    );
}

export default Patch;