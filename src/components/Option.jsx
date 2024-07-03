import '@/assets/Option.css'
import React, { useEffect, useState } from 'react'

export default function Option({ name, dataSub, setPassOpts, selectedOption, setSelectedOption }) {
    function handleClick(e) {
        if (!dataSub) return;
        if (selectedOption) return setSelectedOption('');
        else setSelectedOption(name);
        setPassOpts(dataSub);
    }

    return <li
        onClick={(e) => handleClick(e)}
        className={`category-btn ${selectedOption && selectedOption != name && 'grey'}`}
        data-name={name}
        data-sub={JSON.stringify(dataSub)}>
        <h3>{name}</h3>
        <svg style={selectedOption == name ? { display: 'block' } : { display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#010114" strokeidth="2" />
        </svg>
    </li>
}
