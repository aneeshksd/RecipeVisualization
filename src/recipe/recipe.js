import React from 'react'
import response from '../response.json';
import 'bootstrap/dist/css/bootstrap.css';
import './recipe.css'

export default function Recipe() {
  return (

    <div className='App'>
    {/* {response?.data?.recipe?.values[0]?.values[1]?.valueObj?.activities.map((i) => { */}
        {/* return ( */}
          {/* <div> */}
            {/* <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8595;</h1> */}
            <div className='left'>
            <svg width="220" height="140">
              <rect
             x="0"
             y="0"
             width="330"
             height="200"
             stroke="#00FFFF"
             stroke-width="4px"
             fill="#ff704d"
           />
              <text x="50%" y="30%" dominant-baseline="middle" fill="black" text-anchor="middle">Type:{response.data.recipe.type}</text>
              <text x="50%" y="50%" dominant-baseline="middle" fill="black" text-anchor="middle">Name:{response.data.recipe.name}</text>

            </svg>
            </div>
    </div>
  )
}
