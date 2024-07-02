import '@/assets/Searchbar.css'
import React from 'react'

export default function Searchbar() {
  return (
    <div className='searchbar'>
      <div className='d-flex'>
        <span>Choose Your Appointment</span>
        <form action="">
          <input type="text" placeholder='Search...' />
          <svg className='search-icon-web' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11.6104" cy="11" r="6" stroke="#010114" stroke-width="1.2" />
            <path d="M20.6104 20L17.6104 17" stroke="#010114" stroke-width="1.2" stroke-linecap="round" />
          </svg>
        </form>
      </div>
    </div>
  )
}
