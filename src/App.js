import { useState } from "react";

export default function InputUID() {
    let profile;
    const [ uid, setUID ] = useState('');
    function handleUIDClick() {
        localStorage.setItem('UID', uid);
    }
    function handleUIDChange(e) {
        setUID(e.target.value);
    }
    fetch(`http://localhost:3030/api/825460402/userdata`)
    .then(res => res.json())
    .then(json => profile = json);
    return (
        <>
            <div>
                <h1>Input your Genshin Impact UID</h1>
                <label htmlFor="">UID:</label>
                <input type="text" onChange={handleUIDChange}/>
                <button onClick={handleUIDClick}>Input</button>
            </div>
            <p>{profile}</p>
        </>
    )
}