import '@/assets/Content.css'
import React, { useEffect, useState } from 'react'
import Category from '@/components/Category'
import { data } from '../data-sub.js';

export default function Content() {
    return (
        <div className='main-content'>
            <h2>Schedule an Appointment</h2>
            <div className='main-category-block'>
                <Category options={data} mainCategory={true} />
            </div>
        </div>
    )
}
