import React from 'react'
import uuid from 'react-uuid';
// import './InputBox.css'

function InputBox({ value, changeValue, list, updateList, setError }) {
    const updateValue = (e) => {
        // console.log(e.keyCode)
        changeValue(e.target.value);
    }

    const updateState = () => {
        if(value===''){
            setError(true);
            setTimeout(() => setError(false), 3000)
        } else {
        const newObj = { id: uuid(), todo: value }
        updateList([...list, newObj]);
        changeValue('');
        }
    }

    const handleKeypress = e => {
        // console.log(e.which)
        if(e.which === 13) {
            // console.log('Logg');
            updateState();
        }
    }

    // console.log(list);
    return (
        <>
            <input onChange={updateValue} value={value} onKeyPress={handleKeypress} placeholder="Take a note..." />
            <button type='submit' onClick={updateState}>ADD</button>
        </>
    )
}

export default InputBox
