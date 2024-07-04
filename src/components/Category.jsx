import '@/assets/Category.css'
import React, { useEffect, useState } from 'react'
import Option from '@/components/Option';
import image from '@/assets/image.jpeg'


export default function Category({ options, mainCategory }) {
    const [selectedOption, setSelectedOption] = useState('');
    const [passOpts, setPassOpts] = useState([]);

    return <>
        <div className={`select-options ${selectedOption != '' ? '' : 'active'}`}>
            <ul className="active">
                {options.map && options.map(option => {
                    let name = option.name || Object.keys(option)[0];
                    return <Option key={name} name={name} dataSub={option[name]} setPassOpts={setPassOpts} selectedOption={selectedOption} setSelectedOption={setSelectedOption} passOpts={passOpts}/>
                })}
            </ul >
        </div>
        {window.innerWidth > 401 && selectedOption != '' && <Category options={passOpts} />}
        {(mainCategory && selectedOption == '') && <img src={image} width={800} height={500} alt="" />}
    </>
}
