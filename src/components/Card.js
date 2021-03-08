import React, { useState } from 'react'
import { TiTickOutline } from 'react-icons/ti';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiTodoLine } from 'react-icons/ri';

function Card({ id, data, list, setList }) {
    const [strike, setStrike] = useState(false);

    const updateStrike = () => {
        setStrike(!strike);
    }

    const getStyle = () => {
        if(strike){
            return { backgroundColor: 'rgb(155, 155, 155)' }
        }
    }

    const getStrike = () => {
        if(strike) { 
            return { textDecoration: 'line-through'}
        } else {
            return { textDecoration: 'none' }
        }
    }

    const deleteTodo = (e) => {
        const buttonValue  = e.target.value;
        let currTodo = list.filter((l) => {
            return l.id !== buttonValue;
        });
        // console.log(currTodo);
        setList(currTodo);
    }

    return (
        <div className='card'>
            <h1 style={getStyle()}><span className='icon'><RiTodoLine /></span> Todo</h1>
            <p style={getStrike()}>{data}</p>
            <button style={getStyle()} className='complete-button' onClick={updateStrike} value={id}>Complete <span className='icon'><TiTickOutline /></span></button>
            <button className='delete-button' onClick={deleteTodo} value={id}>Delete <span className='icon'><RiDeleteBinLine /></span></button>
        </div>
    )
}

export default Card
