import React, { useEffect, useState } from 'react'
import Category from '@/components/Category';

export default function Option({ name, dataSub, setPassOpts, selectedOption, setSelectedOption, passOpts, categoryIndex }) {
    function handleClick(e) {
        if (!dataSub) return;
        if (selectedOption == name) setSelectedOption('');
        else if (selectedOption) {
            setSelectedOption('');
            setTimeout(() => setSelectedOption(name), 0);
        }
        else setSelectedOption(name);
        setPassOpts(dataSub);
    }

    function switchTag(categoryIndex) {
        switch (categoryIndex) {
            case 1:
                return <h4 onClick={(e) => handleClick(e)}>{name}
                   {selectedOption == name ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 15L12 9L6 15" stroke="#010114"/>
                        </svg>
                         : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#010114" />
                        </svg>
                    }
                </h4>
            case 2:
                return <h5 onClick={(e) => handleClick(e)}>{name}
                   {selectedOption == name ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="white" />
                        </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#010114" />
                        </svg>
                    }
                </h5>
            case 3:
                return <h6 onClick={(e) => handleClick(e)}>{name}
                   {selectedOption == name ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="white" />
                        </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#010114" />
                        </svg>
                    }
                </h6>
            default:
                return <h3 onClick={(e) => handleClick(e)}>{name}
                    {selectedOption == name ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15L12 9L6 15" stroke="white" />
                        </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9L12 15L6 9" stroke="#010114" />
                        </svg>
                    }
                </h3>
        }
    }

    return <li
        className={`category-btn ${selectedOption && (selectedOption == name ? 'active' : 'unactive')} category-index-${categoryIndex}`}
        data-name={name}
        data-sub={JSON.stringify(dataSub)}>
        {
            window.innerWidth < 400 ? switchTag(categoryIndex) :
                <h3 onClick={(e) => handleClick(e)}>{name}
                    <svg style={selectedOption == name ? { display: 'block' } : { display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="#010114" strokeidth="2" />
                    </svg>
                </h3>
        }
        {window.innerWidth < 400 && selectedOption == name && <Category options={passOpts} categoryIndex={categoryIndex + 1} />}
    </li>
}
