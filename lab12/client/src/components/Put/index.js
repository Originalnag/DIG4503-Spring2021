import Axios from "axios";

import { useState } from 'react'

function Put() {

    const [search, setSearch] = useState("");

    const [loading, setLoading] = useState(true);

    const [fname, setFname] = useState("");

    const [author, setAuthor] = useState("");

    const [description, setDescription] = useState("");

    const putPart = async () => {
        await Axios.put("http://localhost:45030/books/" + search, {
            title: fname,
            author: author,
            description: description

        });
        setLoading(false);
    };

    return (
        <div>
            <p>Enter an ISBN!</p>
            <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <p>Enter the title!</p>
            <input type="text" onChange={(event2) => {
                setFname(event2.target.value);
            }} />
            <p>Enter the author!</p>
            <input type="text" onChange={(event3) => {
                setAuthor(event3.target.value);
            }} />
            <p>Enter the description!</p>
            <input type="text" onChange={(event4) => {
                setDescription(event4.target.value);
            }} />
            <br></br><br></br>
            <button onClick={() => { putPart() }}>Add Book!</button>
            {
                (loading === true) ? (
                    <p></p>
                ) : (
                    <div>
                        <h1>Added</h1>
                        <h2>ISBN: {search}</h2>
                        <p>Title: {fname}</p>
                        <p>Author: {author}</p>
                        <p>Description: {description}</p>
                    </div>
                )

            }
        </div>

    );
}

export default Put;