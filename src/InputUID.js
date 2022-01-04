import { useState } from "react";

export default function InputUID() {
    const [ uid, setUID ] = useState('');
    function handleUIDClick(e) {
        setUID(e.target.value);
        localStorage.setItem('UID', uid);
    }
    return (
        <>
            <div>
                <h1>Input your Genshin Impact UID</h1>
                <label htmlFor="">UID:</label>
                <input type="text" value={uid} onClick={handleUIDClick}/>
            </div>
        </>
    )
}