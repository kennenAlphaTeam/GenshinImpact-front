import { useState } from "react";

export default function InputUID() {
    let profile;
    const [ hide, setHide ] = useState(1);
    const [ uid, setUID ] = useState('');
    function handleUIDChange(e) {
        setUID(e.target.value);
    }
    function handleUIDClick() {
        localStorage.setItem('UID', uid);
        setHide(0);
    }
    return (
        <>
            {hide===1&&
                <div>
                    <h1>Input your Genshin Impact UID</h1>
                    <label htmlFor="">UID:</label>
                    <input type="text" onChange={handleUIDChange}/>
                    <button onClick={handleUIDClick}>Input</button>
                </div>
            }
        </>
    )
}